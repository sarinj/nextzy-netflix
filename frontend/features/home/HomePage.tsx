import Image from 'next/image'
import BillBoard from './components/BillBoard'
import PopularList from './components/PopularList'

export default function HomePage() {
  return (
    <div className="relative">
      <BillBoard />
      <div className="relative z-4 pt-[calc(100vh+8rem)] pl-[4%]">
        <PopularList />
      </div>
    </div>
  )
}
