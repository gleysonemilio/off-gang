'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  UpdateInforInterface,
  createQrcode,
  getQrcodeOfId,
  updateInforQrcode,
} from '@/firebase/Api'
import EmojiPicker from 'emoji-picker-react'
import { Emoji, EmojiStyle } from 'emoji-picker-react'
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

  const [typeEdit, setTypeEdit] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [inforQrcode, setInforQrcode] = useState<UpdateInforInterface>({
    id: '',
    type: '',
    description: '',
  })

  const handleGetQrcode = async () => {
    const data = await getQrcodeOfId(uId as string)

    console.log(data)
    setInforQrcode(data as UpdateInforInterface)
    setTypeEdit(data?.type || 'Texto')
  }

  useEffect(() => {
    handleGetQrcode()
  }, [])

  const updateInfor = async () => {
    if (!uId || !typeEdit) return

    await updateInforQrcode({
      id: uId,
      type: typeEdit,
      description: description || inforQrcode?.description,
    })
  }

  return (
    <div className="w-full max-w-[900px] my-20 px-10 font-[family-name:var(--font-geist-sans)] justify-center items-center flex flex-col gap-10">
      <div className="flex w-full flex-col items-start justify-start gap-8">
        <div className="flex flex-col items-start justify-start gap-2">
          <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">
            Qual a opção?
          </span>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {arrayButton.map(({ icon, label }) => (
              <Button
                variant={label === typeEdit ? 'secondary' : 'ghost'}
                key={label}
                onClick={() => setTypeEdit(label)}
                className={`flex items-center justify-center gap-2`}
              >
                {icon}
                {label}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-2">
          {typeEdit === 'Texto' && (
            <>
              <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">
                Colocar Emoji
              </span>
              <div className="w-full">
                <EmojiPicker
                  width={'100%'}
                  height={'420px'}
                  searchDisabled
                  // reactions={true}ss
                />
              </div>
            </>
          )}
          <span className="font-extrabold text-2xl text-gray-700 dark:text-gray-300">
            Colocar seu `{typeEdit}`
          </span>
          {typeEdit !== 'Texto' ? (
            <Input
              type="text"
              placeholder={`${typeEdit}`}
              value={description || inforQrcode?.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            <div className="grid w-full gap-2">
              <Textarea
                placeholder="Type your message here."
                value={description || inforQrcode?.description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className="text-muted-foreground text-sm">
                Este `{typeEdit}` ira aparecer quando alguem escanear o QR Code.
              </p>
            </div>
          )}
        </div>
        <Button className="w-full" onClick={updateInfor}>
          Salvar
        </Button>
      </div>
    </div>
  )
}
