import { TrendingDown, Target, Zap, Scale, Shield } from "lucide-react"

const values = [
  {
    icon: TrendingDown,
    title: "Reduce Manual Work",
    description: "Eliminate repetitive tasks that consume valuable human time and resources.",
  },
  {
    icon: Target,
    title: "Increase Accuracy",
    description: "AI systems that deliver consistent, error-free results at scale.",
  },
  {
    icon: Zap,
    title: "Improve Speed",
    description: "Process in seconds what previously took hours or days.",
  },
  {
    icon: Scale,
    title: "Scale Operations",
    description: "Systems designed to grow with your business without linear cost increases.",
  },
  {
    icon: Shield,
    title: "Enterprise-Ready",
    description: "Production-grade architecture with security, reliability, and compliance built-in.",
  },
]

export function ValueSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Why This Matters</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
            Business Impact
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every system is designed with measurable outcomes in mind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center lg:text-left">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto lg:mx-0">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
