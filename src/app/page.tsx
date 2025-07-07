import Products from '@/components/Products'

export default function Home() {
  return (
    <div className="w-full font-[family-name:var(--font-geist-sans)]">
      <main>
        <div id="img_home" className="w-full h-[45vh] flex items-center justify-center relative">
          {/* <div id="img_home" className=" " /> */}
        </div>

        <div className="w-full flex flex-col items-center justify-center text-gray-700 dark:text-gray-300">
          <Products />
        </div>
      </main>
      {/* http://localhost:3000/show?param=IWO2y93QQvEcJM1BUKQS */}
      {/* http://localhost:3000/edit?param=IWO2y93QQvEcJM1BUKQS */}
      {/* https://off-gang.vercel.app/edit?param=IWO2y93QQvEcJM1BUKQS */}
    </div>
  )
}
