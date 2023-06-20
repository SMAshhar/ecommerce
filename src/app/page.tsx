import Slideshow from '@/components/main/slideShow'
import Promotion from '@/components/main/promotion/promotion'
import Subscribe from '@/components/main/subscribe'
import Hero from '@/components/main/hero'
import Intro from '@/components/main/middle'

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <Promotion />
      <Slideshow />
      <Subscribe />
      <div>

      </div>
    </div>
  )
}
