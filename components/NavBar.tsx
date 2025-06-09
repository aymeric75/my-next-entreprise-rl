'use client';
import Link from 'next/link';

export default function NavBar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">MySite</Link>
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
                  className="text-gray-700 hover:text-gray-900">
              {l.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu: toggle button */}
        <div className="md:hidden">

          import * as Popover from '@radix-ui/react-popover';

          <Popover.Root>
            <Popover.Trigger aria-label="Open menu">
              <svg className="w-6 h-6" /* icon */>…</svg>
            </Popover.Trigger>
          
            <Popover.Content className="bg-white shadow-lg rounded-md p-4">
              <div className="flex flex-col space-y-2">
                {links.map((l) => (
                  <Link key={l.href}
                        href={l.href}
                        className="text-gray-700 hover:text-gray-900">
                    {l.label}
                  </Link>
                ))}
              </div>
            </Popover.Content>
          </Popover.Root>


          
        </div>
      </div>
    </nav>
  );
}
