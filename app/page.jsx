import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Blog />
      <Stats />
    </main>
  )
}
