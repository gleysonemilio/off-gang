// import Image from "next/image";
// import ImgText from '../../assets/available-products.png';

import CardProducts from "../CardProducts";


export default function Products() {
  return (
    <div className="w-full flex flex-col h-full items-center justify-center gap-10 m-w-20 p-5">
      <div className="text-2xl text-gray-700 dark:text-gray-300">
        Produtos disponíveis
        {/* <Image src={ImgText} alt="Product Image" width={150} height={500} className="rounded-lg" /> */}
      </div>

      <div className="w-full h-full flex items-center justify-center gap-2">

        <CardProducts />
      </div>
    </div>
  );
}