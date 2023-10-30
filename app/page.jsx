import Blog from '@/components/Blog'
import Download from '@/components/Download'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main>
      <Hero />
      <Blog />
      <Stats />
      <Features />
      <Download />
    </main>
  )
}
