export type NavMenu = {
  title: string
  href: string
  icon?: React.ReactNode
}

export const NavMenus: NavMenu[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'TV Shows',
    href: '/browse/tv',
  },
  {
    title: 'Movies',
    href: '/browse/movies',
  },
  {
    title: 'New & Popular',
    href: '/latest',
  },
  {
    title: 'My List',
    href: '/my-list',
  },
  {
    title: 'Browse by Languages',
    href: '/browse/languages',
  },
]
