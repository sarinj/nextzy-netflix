import Image from 'next/image'

export default function SeriesCard() {
  return (
    <div className="rounded-[5px] w-[calc(20vw)] flex-shrink-0">
      <Image
        alt="poster"
        src="https://placehold.co/389x219"
        width={389}
        height={219}
      />
    </div>
  )
}
