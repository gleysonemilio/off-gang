import Products from "@/components/Products";


export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="w-full h-[45vh] flex items-center justify-center relative">
          <div id='img_home' className=" " />
        </div>

        <div className="w-full flex flex-col items-center justify-center text-gray-700 dark:text-gray-300">
          <Products />

        </div>
      </main>
    </div>
  );
}
