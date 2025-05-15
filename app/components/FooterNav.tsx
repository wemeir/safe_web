'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  MessageCircle,
  Puzzle,
  User
} from 'lucide-react'

const navItems = [
  { href: '/home', icon: Home },
  { href: '/chat', icon: MessageCircle },
]

export default function FooterNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#2C2F3A] border-t border-gray-700 px-6 py-2 flex justify-between items-center z-50">
      {navItems.map(({ href, icon: Icon }) => {
        const isActive = pathname === href
        return (
          <Link href={href} key={href} className="flex-1 flex justify-center">
            <Icon
              size={28}
              className={isActive ? 'text-blue-400' : 'text-gray-400'}
            />
          </Link>
        )
      })}
    </nav>
  )
}
