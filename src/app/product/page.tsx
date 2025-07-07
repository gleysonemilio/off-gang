'use client'

import ImgClother from '@/assets/clother/tshits3.png'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

export default function Product() {
  const [selectSize, setSelectSize] = useState('')

  return (
    <div className="w-full my-20 px-10 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-1 w-full justify-center items-center">
          <Image src={ImgClother} alt="Product Image" width={500} height={500} />
        </div>
        <div className="w-full flex flex-col">
          <div className="flex flex-col max-w-[60vh] md:fixed text-neutral-600 dark:text-neutral-400 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Camiseta Maxi Over</h1>
              <span className="text-sm font-extralight">SUB-TITLE</span>
            </div>
            <span className="text-sm font-extrabold">R$ 200,00</span>

            <div className="flex gap-2">
              {['P', 'M', 'G', 'GG'].map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectSize(size)}
                  variant={size === selectSize ? 'secondary' : 'ghost'}
                  className="flex items-center justify-center gap-2"
                >
                  {size}
                </Button>
              ))}
            </div>
            <span className="text-sm font-extralight">Select Size</span>

            <div className="w-full flex items-center justify-between">
              <Button className="bg-black  text-white hover:bg-green-600 w-full cursor-pointer font-bold tracking-widest dark:bg-neutral-800 dark:hover:bg-green-600">
                COMPRAR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
