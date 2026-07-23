import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import ThreePillars from '@/components/home/ThreePillars'
import WhoWeAre from '@/components/home/WhoWeAre'
import CTABanner from '@/components/home/CTABanner'
import CertificationRibbon from '@/components/home/CertificationRibbon'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ThreePillars />
<WhoWeAre />
      <CTABanner />
      <CertificationRibbon />
    </>
  )
}
