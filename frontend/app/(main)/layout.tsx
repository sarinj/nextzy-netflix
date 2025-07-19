import Navbar from '@/components/navigation/Navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      {children}
    </div>
  )
}
