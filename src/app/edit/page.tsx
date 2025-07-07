'use client'

import SkeletonEdit from '@/components/Skeleton/Skeleton-edit'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { InforQrCodeInterface, getQrcodeOfId, updateInforQrcode } from '@/firebase/Api'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Facebook, Instagram, LetterText, Linkedin } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const arrayButton = [
  {
    icon: <LetterText className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    label: 'Texto',
  },
  {
    icon: <Instagram className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    label: 'Instagram',
  },
  {
    icon: <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    label: 'Linkedin',
  },
  {
    icon: <Facebook className="w-6 h-6 text-gray-700 dark:text-gray-300" />,
    label: 'Facebook',
  },
]

export default function Edit() {
  const searchParams = useSearchParams()
  const uId = searchParams.get('param')

  const [inforQrcode, setInforQrcode] = useState<InforQrCodeInterface>({
    id: '',
    type: '',
    emoji: '',
    description: '',
  })

  const handleGetQrcode = async () => {
    const data = await getQrcodeOfId(uId as string)

    console.log(data)
    setInforQrcode(data as InforQrCodeInterface)
  }

  useEffect(() => {
    handleGetQrcode()
  }, [])

  const updateInfor = async () => {
    if (!uId || !inforQrcode?.type) return

    await updateInforQrcode({
      id: uId,
      type: inforQrcode.type,
      description: inforQrcode?.description,
      ...(inforQrcode.emoji && { emoji: inforQrcode.emoji }),
    })
  }

  return (
    <div className="w-full max-w-[900px] my-20 px-10 font-[family-name:var(--font-geist-sans)] justify-center items-center flex flex-col gap-10">
      <div className="flex w-full flex-col items-start justify-start gap-8">
        {inforQrcode?.type === '' ? (
          <SkeletonEdit />
        ) : (
          <>
            <div className="flex flex-col items-start justify-start gap-2">
              <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">
                Qual a opção?
              </span>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {arrayButton.map(({ icon, label }) => (
                  <Button
                    variant={label === inforQrcode?.type ? 'secondary' : 'ghost'}
                    key={label}
                    onClick={() =>
                      setInforQrcode({
                        ...inforQrcode,
                        type: label,
                      })
                    }
                    className={`flex items-center justify-center gap-2`}
                  >
                    {icon}
                    {label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-2">
              {inforQrcode?.type === 'Texto' && (
                <>
                  <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">
                    Colocar Emoji
                  </span>
                  <div className="w-full flex flex-col sm:flex sm:flex-row gap-2">
                    <div className="w-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 sm:text-8xl text-5xl p-2 rounded-sm">
                      <span>{inforQrcode.emoji}</span>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <Picker
                        data={data}
                        onEmojiSelect={(value: any) =>
                          setInforQrcode({
                            ...inforQrcode,
                            emoji: value.native,
                          })
                        }
                        skinTonePosition="search"
                        searchPosition="static"
                        previewPosition="none"
                        autoFocus={true}
                      />
                    </div>
                  </div>
                </>
              )}
              <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">
                Colocar seu `{inforQrcode?.type}`
              </span>
              {inforQrcode?.type !== 'Texto' ? (
                <Input
                  type="text"
                  placeholder={`${inforQrcode?.type}`}
                  value={inforQrcode?.description}
                  onChange={(e) =>
                    setInforQrcode({
                      ...inforQrcode,
                      description: e.target.value,
                    })
                  }
                />
              ) : (
                <div className="grid w-full gap-2">
                  <Textarea
                    placeholder="Type your message here."
                    value={inforQrcode?.description}
                    onChange={(e) =>
                      setInforQrcode({
                        ...inforQrcode,
                        description: e.target.value,
                      })
                    }
                  />
                  <p className="text-muted-foreground text-sm">
                    Este `{inforQrcode?.type}` ira aparecer quando alguem escanear o QR Code.
                  </p>
                </div>
              )}
            </div>
            <Button className="w-full" onClick={updateInfor}>
              Salvar
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
