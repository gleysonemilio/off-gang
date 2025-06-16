import Products from "@/components/Products";
import Image from "next/image";
import ImgText from '../assets/bg-img-text.png';


export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <main>
        <div  className="w-full h-[45vh] flex items-center justify-center relative">  
            <div id='img_home' className=" " /> 
            {/* <Image src={ImgText} alt="Home Image" width={100} height={180} className="w-full h-full object-cover" /> */}
        </div>
        
      <Products />
      </main>
    </div>
  );
}
