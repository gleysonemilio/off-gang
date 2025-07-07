import Image from 'next/image'

interface CardProductsInterface {
  img: any
}

export default function CardProducts({ img }: CardProductsInterface) {
  return (
    <div className="relative overflow-hidden flex flex-col group gap-2 cursor-pointer">
      <Image src={img} alt="Product Image" width={180} height={200} />
      <div className="absolute top-[330px] left-19 bg-green-500 text-white opacity-0 group-hover:opacity-100 px-3 ">
        Comprar
      </div>

      <div>
        <p className="text-sm ">CAMISETA QR-CODE</p>
        <span className="text-sm font-bold text-neutral-500">R$ 100,00</span>
      </div>
    </div>
  )
}
