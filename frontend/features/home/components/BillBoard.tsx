import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import Image from 'next/image'

export default function BillBoard() {
  return (
    <div className="absolute top-0 left-0 w-full z-2">
      <Image
        alt="cover"
        src="/images/billboardImage.png"
        width={600}
        height={400}
        className="w-full h-auto object-cover"
      />
      <div className="absolute bottom-[20%] px-[4%] z-10 flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <span>
            <Icons name="Top10" className="size-11" />
          </span>
          <h2 className="font-medium text-4xl">#1 in TV Shows Today</h2>
        </div>
        <p className="text-xl w-[45%]">
          Determined to protect a young patient who escaped a mysterious cult, a
          psychiatrist takes the girl in, putting her own family — and life — in
          danger.
        </p>
        <div className="flex gap-5">
          <Button
            className="font-medium text-3xl"
            iconName="Play"
            iconClassName="size-8"
          >
            Play
          </Button>
          <Button
            className="font-medium text-3xl text-white"
            variant="secondary"
            iconName="Info"
            iconClassName="size-8"
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  )
}
