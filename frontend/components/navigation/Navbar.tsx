'use client'

import Link from 'next/link'
import { Icons } from '../ui/icons'
import { NavMenus } from './NavMenus'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import AccountMenu from './AccountMenu'

export default function Navbar() {
  const currentPath = usePathname()

  return (
    <div className="fixed top-0 left-0 flex w-full justify-between py-8 px-[4%] bg-gradient-to-b from-black via-black/30 to-transparent z-20">
      <div className="flex items-center">
        <Icons name="NetflixLogo" className="h-[38px] w-auto" />
        <ul className="flex items-center gap-8 ml-8">
          {NavMenus.map((menu, i) => (
            <li key={menu.title + i}>
              <NavMenuLink
                title={menu.title}
                href={menu.href}
                icon={menu.icon}
                isActive={currentPath === menu.href}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <Icons name="Search" className="size-6" />
        <NavMenuLink title="Kids" />
        <Icons name="Bell" className="size-6" />
        <AccountMenu imageUrl="https://placehold.co/48" />
      </div>
    </div>
  )
}

interface NavMenuLinkProps {
  title: string
  href?: string
  icon?: React.ReactNode
  isActive?: boolean
  className?: string
}

function NavMenuLink({
  title,
  href,
  icon,
  isActive,
  className,
}: NavMenuLinkProps) {
  return (
    <Link
      href={href || '#'}
      className={cn('flex items-center gap-2 text-sm', className, {
        'font-semibold': isActive,
      })}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {title}
    </Link>
  )
}
