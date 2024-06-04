import Link from 'next/link';

import { Assets } from '@/assets';
import ThemeSwitcher from './theme-switcher';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './language-switcher';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  return (
    <header className='fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-gray-900/90 shadow'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4 md:px-6'>
        <div className='flex items-center gap-2'>
          <Assets.icons.CarWhite className='w-10 h-10' />
          <span className='text-lg font-bold dark:text-gray-300'>Car Wash</span>
        </div>
        <nav className='hidden md:flex items-center gap-6'>
          <Link
            href='#home'
            className='relative text-sm dark:text-gray-300 font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50 [&.active]:after:absolute [&.active]:after:-bottom-1 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:bg-gray-900 [&.active].dark:after:bg-gray-50'
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href='#features'
            className='relative text-sm dark:text-gray-300 font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50 [&.active]:after:absolute [&.active]:after:-bottom-1 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:bg-gray-900 [&.active].dark:after:bg-gray-50'
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href='#pricing'
            className='relative text-sm dark:text-gray-300 font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50 [&.active]:after:absolute [&.active]:after:-bottom-1 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:bg-gray-900 [&.active].dark:after:bg-gray-50'
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href='#testimonials'
            className='relative text-sm dark:text-gray-300 font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50 [&.active]:after:absolute [&.active]:after:-bottom-1 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:bg-gray-900 [&.active].dark:after:bg-gray-50'
            prefetch={false}
          >
            testimonials
          </Link>
          <Link
            href='#contact'
            className='relative text-sm dark:text-gray-300 font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50 [&.active]:after:absolute [&.active]:after:-bottom-1 [&.active]:after:left-0 [&.active]:after:h-0.5 [&.active]:after:w-full [&.active]:after:bg-gray-900 [&.active].dark:after:bg-gray-50'
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className='flex items-center gap-2'>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button variant='outline' size='icon'>
                <Assets.icons.Settings className='w-6 h-6  dark:fill-white' />
                <span className='sr-only'>Settings</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[220px] flex flex-col gap-5 p-4'>
              <div className='flex flex-col gap-1'>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <LanguageSwitcher />
              </div>
              <div className='flex flex-col gap-1'>
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <ThemeSwitcher />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href='/dashboard'
            className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
            border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-3'
            prefetch={false}
          >
            My Shop
          </Link>
        </div>
      </div>
    </header>
  );
}
