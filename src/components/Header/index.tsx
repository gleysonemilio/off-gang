'use client'

import { CircleUserRound, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

import LogoTB from '../../assets/logo-off-b.png'
import LogoTW from '../../assets/logo-off-w.png'
import { Button } from '../ui/button'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="fixed z-50 w-[90%] bg-accent h-12 flex items-center justify-between px-4 m-4 rounded-4xl shadow-md">
      <div>
        <Link href={'/'}>
          <Image
            src={theme === 'light' ? LogoTB : LogoTW}
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
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
          {theme === 'light' ? (
            <Moon className="forced-color-adjust-auto" />
          ) : (
            <Sun className="forced-color-adjust-auto" />
          )}
        </Button>
      </div>
    </header>
  )
}
