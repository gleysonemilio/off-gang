'use client'

import { useTheme } from "next-themes";
import { Moon, Sun, CircleUserRound } from 'lucide-react';
import { Button } from "../ui/button";
import Image from "next/image";
import LogoTB from '../../assets/logo-t-b.png'
import LogoTW from '../../assets/logo-t-w.png'
import Link from "next/link";



export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed z-50 w-[90%] bg-accent h-12 flex items-center justify-between px-4 m-4 rounded-4xl shadow-md">

      <div className="flex items-center"></div>
      <div>
        <Link href={'/'}>
          <Image src={theme === 'light' ? LogoTB : LogoTW} alt="Logo" width={40} height={100} className="rounded-full" />
        </Link>
      </div>
      <div className="flex items-center">
        <div>
          <CircleUserRound />
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="ml-2 h-8 w-8 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <Moon className="forced-color-adjust-auto" /> : <Sun className="forced-color-adjust-auto" />}
        </Button>
      </div>
    </header>
  );
}
