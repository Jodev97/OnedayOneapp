import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/home/HeroSection'
import LatestReleasesGrid from '@/components/home/LatestReleasesGrid'
import PopularSection from '@/components/home/PopularSection'
import GenreBrowser from '@/components/home/GenreBrowser'
import { mockManga, popularManga } from '@/data/mockManga'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main>
        <HeroSection />
        <LatestReleasesGrid manga={mockManga} />
        <PopularSection manga={popularManga} />
        <GenreBrowser />
      </main>

      <Footer />
    </div>
  )
}
