import { useMangaData } from '@/hooks/useMangaData'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/home/HeroSection'
import LatestReleasesGrid from '@/components/home/LatestReleasesGrid'
import PopularSection from '@/components/home/PopularSection'
import GenreBrowser from '@/components/home/GenreBrowser'

export default function Home() {
  const { manga: latestManga, loading: loadingLatest } = useMangaData({ limit: 10 })
  const { manga: popularManga, loading: loadingPopular } = useMangaData({ limit: 25 })

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main>
        <HeroSection />
        <LatestReleasesGrid manga={latestManga} loading={loadingLatest} />
        <PopularSection manga={popularManga} loading={loadingPopular} />
        <GenreBrowser />
      </main>

      <Footer />
    </div>
  )
}
