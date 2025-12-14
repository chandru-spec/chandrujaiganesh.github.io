import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SolutionsSection } from "@/components/solutions-section"
import { ProjectsSection } from "@/components/projects-section"
import { ValueSection } from "@/components/value-section"
import { TechSection } from "@/components/tech-section"
import { VisionSection } from "@/components/vision-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ProjectsSection />
        <ValueSection />
        <TechSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
