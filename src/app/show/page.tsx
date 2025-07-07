'use client'

import { InforQrCodeInterface, getQrcodeOfId } from '@/firebase/Api'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  }, [])

  const openInstagram = () => {
    window.location.href = `instagram://user?username=${inforQrCode?.description}`

    setTimeout(() => {
      window.open(`https://www.instagram.com/${inforQrCode?.description}`, '_blank')
    }, 1000)
  }

  return (
    <div className="w-full h-[70vh] flex justify-center items-center my-20 px-10">
      {inforQrCode && (
        <div className="flex flex-col items-center justify-center gap-8">
          <span className="text-9xl bg-neutral-200 dark:bg-neutral-800 rounded-sm">
            {inforQrCode?.emoji}
          </span>

          <h3 className="scroll-m-20 text-3xl font-semibold tracking-tight">
            {inforQrCode?.description}
          </h3>
        </div>
      )}
    </div>
  )
}
