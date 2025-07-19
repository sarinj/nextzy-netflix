import { cn } from '@/lib/utils'

import NetflixLogo from '@/public/icons/NetflixLogo.svg'
import NetflixNLogo from '@/public/icons/NetflixLogoN.svg'
import DownArrow from '@/public/icons/DownArrow.svg'
import Search from '@/public/icons/Search.svg'
import Bell from '@/public/icons/Bell.svg'
import Top10 from '@/public/icons/Top10.svg'
import Play from '@/public/icons/Play.svg'
import Info from '@/public/icons/Info.svg'

const iconNames = {
  NetflixLogo,
  NetflixNLogo,
  DownArrow,
  Search,
  Bell,
  Top10,
  Play,
  Info,
}

export type IconNamesType = keyof typeof iconNames

type IconProps = {
  name: keyof typeof iconNames
} & React.SVGProps<SVGSVGElement>

const Icons: React.FC<IconProps> = ({ name, className, ...props }) => {
  const SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = iconNames[name]
  if (!SvgIcon) {
    return null
  }
  return <SvgIcon className={cn('w-[1.5rem]', className)} {...props} />
}

export { Icons, iconNames }
