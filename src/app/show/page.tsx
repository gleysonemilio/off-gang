'use client'

import { getQrcodeOfId } from '@/firebase/Api'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface InforQrCodeInterface {
  type: string
  description: string
}

export default function Show() {
  const searchParams = useSearchParams()
  const param = searchParams.get('param')
  const [inforQrCode, setInforQrCode] = useState<InforQrCodeInterface>()

  useEffect(() => {
    handleGetQrcode()
  }, [])

  const handleGetQrcode = async () => {
    const data = await getQrcodeOfId(param as string)
    setInforQrCode(data as InforQrCodeInterface)
  }

  useEffect(() => {
    if (inforQrCode?.type === 'Instagram') {
      openInstagram()
    }
  }, [inforQrCode])

  const openInstagram = () => {
    window.location.href = `instagram://user?username=${inforQrCode?.description}`

    setTimeout(() => {
      window.open(`https://www.instagram.com/${inforQrCode?.description}`, '_blank')
    }, 1000)
  }

  return (
    <div className="w-full my-20 px-10 font-[family-name:var(--font-geist-sans)]">
      {inforQrCode && (
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-gray-500 dark:text-gray-400">{inforQrCode?.description}</span>
        </div>
      )}

      {/*https://github.com/ianstormtaylor/slate?tab=readme-ov-file#examples
            https://www.reactwebeditor.com/
            
            <button onClick={openInstagram}>
                Abrir Instagram
            </button> */}
    </div>
  )
}
