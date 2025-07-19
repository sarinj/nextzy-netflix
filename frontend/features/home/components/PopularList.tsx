'use client'

import { useEffect, useRef } from 'react'
import SeriesCard from './SeriesCard'

export default function PopularList() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()
      scrollElement.scrollLeft += e.deltaY
    }

    scrollElement.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      scrollElement.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="space-y-3 py-8">
      <h2 className="font-bold text-xl">Popular on Netflix</h2>
      <div
        className="flex gap-[10px] overflow-x-auto scrollbar-hide"
        ref={scrollRef}
      >
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
        <SeriesCard />
      </div>
    </div>
  )
}
