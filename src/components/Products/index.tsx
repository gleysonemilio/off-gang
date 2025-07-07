// import Image from "next/image";
// import ImgText from '../../assets/available-products.png';
import ImgClother from '@/assets/clother/tshits2.png'
import Link from 'next/link'

import CardProducts from '../CardProducts'

export default function Products() {
  return (
    <div className="w-full flex flex-col h-full items-center justify-center gap-10 m-w-20 p-5">
      <div className="w-full h-full flex items-center justify-center gap-2 sm:flex-wrap max-sm:flex-col md:flex-wrap lg:flex-wrap xl:flex-nowrap 2xl:flex-wrap">
        <Link href={'/product'}>
          <CardProducts img={ImgClother} />
        </Link>

        <Link href={'/product'}>
          <CardProducts img={ImgClother} />
        </Link>
        <Link href={'/product'}>
          <CardProducts img={ImgClother} />
        </Link>
        <Link href={'/product'}>
          <CardProducts img={ImgClother} />
        </Link>
      </div>
    </div>
  )
}
