import Image from "next/image";
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button";

export default function Product() {
    return (
        <div className="w-full my-20 px-10 font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex flex-col gap-1 w-full justify-center items-center">
                    <Image src="https://bawclothing.fbitsstatic.net/img/p/camiseta-maxi-over-baw-x-smiley-150707/339746.jpg?w=556&h=833&v=202506051920" alt="Product Image" width={500} height={500} />
                    <Image src="https://bawclothing.fbitsstatic.net/img/p/camiseta-maxi-over-baw-x-smiley-150707/339746.jpg?w=556&h=833&v=202506051920" alt="Product Image" width={500} height={500} />
                </div>
                <div className="w-full flex flex-col">
                    <div className="flex flex-col max-w-[60vh] md:fixed text-neutral-600 dark:text-neutral-400 gap-4">
                        <div>
                            <div className=" text-2xl font-bold">Camiseta Maxi Over Baw X Smiley</div>
                            <div className="text-sm  font-extralight">SUB-TITLE</div>
                        </div>
                        <div className="text-sm font-extrabold">R$ 200,00</div>

                        <div className="flex gap-2">
                            <Toggle>P</Toggle>
                            <Toggle >M</Toggle>
                            <Toggle >G</Toggle>
                            <Toggle >GG</Toggle>
                            <Toggle >XG</Toggle>
                        </div>
                        <div className="text-sm font-extralight">Select Size</div>

                        <div className="w-full flex items-center justify-between">
                            <Button className="bg-black  text-white hover:bg-green-600 w-full cursor-pointer font-bold tracking-widest dark:bg-neutral-800 dark:hover:bg-green-600">
                                COMPRAR
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}


// position: fixed;
// background: white;
// bottom: 0;
// width: 100%;
// padding: 9px;