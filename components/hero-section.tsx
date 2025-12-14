import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Name and role */}
          <div>
            <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">AI Engineer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight">
              Chandru Jaiganesh
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Building intelligent AI systems and automation solutions for real-world problems.
            </p>
          </div>

          {/* Right side - Tagline and description */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground leading-snug">
              Building Intelligent AI Systems That Automate Work and Scale Businesses
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Production-ready AI automation solutions designed for enterprises. From document intelligence to
              agent-based systems, delivering measurable business impact.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="#solutions">
                  View Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
                <Link href="#contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
