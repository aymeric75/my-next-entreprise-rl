'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Popover from '@radix-ui/react-popover';

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-900">
          MySite
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-gray-700 hover:text-gray-900 ${
                pathname === l.href ? 'font-semibold text-blue-600' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Popover.Root>
            <Popover.Trigger className="p-2 text-gray-700 hover:text-gray-900" aria-label="Menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content
                sideOffset={8}
                className="bg-white p-4 rounded-md shadow-lg flex flex-col space-y-3 w-40 z-50"
              >
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`text-gray-700 hover:text-gray-900 ${
                      pathname === l.href ? 'font-semibold text-blue-600' : ''
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>
    </nav>
  );
}
