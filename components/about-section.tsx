import { GraduationCap, Briefcase, Target, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">About</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
                AI Engineer
              </h2>
            </div>

            {/* Our Work highlights */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold text-foreground">Our Work</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Target className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">End-to-End AI Solutions</p>
                    <p className="text-muted-foreground text-sm">From concept to production deployment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Automation First</p>
                    <p className="text-muted-foreground text-sm">Reducing manual work by up to 80%</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Enterprise Ready</p>
                    <p className="text-muted-foreground text-sm">Scalable systems for real business impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Our Work section */}

          <div className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am an AI Engineer focused on building practical AI systems, automation, and intelligent workflows that
              solve real-world business problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My work involves designing and deploying production-ready AI solutions — from document intelligence
              systems to conversational AI and agent-based automation — that businesses can use to improve efficiency
              and scale operations.
            </p>

            <div className="pt-5 border-t border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Bachelor of Technology in Artificial Intelligence and Data Science
                  </h3>
                  <p className="text-muted-foreground">Nehru Institute of Engineering and Technology, Coimbatore</p>
                  <p className="text-sm text-muted-foreground mt-1">2021 – 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
