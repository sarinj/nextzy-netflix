import Image from 'next/image'
import { Icons } from '../ui/icons'

interface AccountMenuProps {
  imageUrl?: string
}

export default function AccountMenu({ imageUrl = '' }: AccountMenuProps) {
  return (
    <div className="flex gap-4">
      <Image
        className="rounded-[5px]"
        alt="accountImg"
        src={imageUrl}
        width={48}
        height={48}
      />
      <button>
        <Icons name="DownArrow" className="h-[7px] w-auto" />
      </button>
    </div>
  )
}
