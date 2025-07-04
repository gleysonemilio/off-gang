import Image from 'next/image'

export default function CardProducts() {
  return (
    <div className="relative overflow-hidden flex flex-col group gap-2 cursor-pointer">
      <Image
        src={
          'https://bawclothing.fbitsstatic.net/img/p/moletom-hoodie-selfie-chenille-150349/338016.jpg?w=556&h=833&v=202506051948'
        }
        alt="Product Image"
        width={280}
        height={500}
      />
      <div className="absolute top-[330px] left-19 bg-green-500 text-white opacity-0 group-hover:opacity-100 px-3 ">
        Compra
      </div>

      <div>
        <p className="text-sm ">CAMISETA REGULAR QR-CODE</p>
        <span className="text-sm font-bold text-neutral-500">R$ 100,00</span>
      </div>
    </div>
  )
}
