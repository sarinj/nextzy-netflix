import Image from 'next/image'
import BillBoard from './components/BillBoard'
import PopularList from './components/PopularList'

export default function HomePage() {
  return (
    <div className="relative">
      <BillBoard />
      <div className="relative z-20 pt-[calc(100vh-50px)] px-[4%]">
        <PopularList />
      </div>
    </div>
  )
}
