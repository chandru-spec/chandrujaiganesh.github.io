import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    name: "InvoiceX",
    description:
      "AI-powered invoice extraction and document automation platform. Processes thousands of documents with 99%+ accuracy, reducing manual data entry by 90%.",
    tags: ["Document AI", "OCR", "Automation"],
    image: "/images/screenshot-202025-12-13-20003603.png",
    link: "https://www.linkedin.com/posts/chandru-jaiganesh_aiautomation-invoiceprocessing-documentai-activity-7405330815448121344-5AFm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADseWGIBYHLXCAujBP0mncgWOlUihdigYNQ",
  },
  {
    name: "Advanced Medibot",
    description:
      "Agent-based AI medical intelligence system with multilingual and voice support. Provides accurate health information with real-time RAG capabilities.",
    tags: ["RAG", "LLMs", "Healthcare"],
    image: "/images/medibot-agentic.png",
    link: "https://www.linkedin.com/posts/vikram-vm_ai-medicalai-healthcareinnovation-activity-7404732223381221376-5FJb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADseWGIBYHLXCAujBP0mncgWOlUihdigYNQ",
  },
  {
    name: "Email Automation System",
    description:
      "AI-driven email automation platform that sends personalized emails to single or multiple recipients using natural language prompts. Streamlines communication workflows.",
    tags: ["Email", "AI", "Automation", "NLP"],
    image: "/images/email-automation.png",
    link: "https://medium.com/@jpjchandru/how-i-built-an-ai-email-automator-that-cuts-manual-outreach-by-80-ffaf061c6cfd",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
            Products & Projects
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Real systems delivering measurable results for businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">{project.name.charAt(0)}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <Button asChild variant="ghost" size="sm" className="group/btn -ml-2 text-primary hover:text-primary">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowUpRight className="ml-1 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
                ) : (
                  <Button variant="ghost" size="sm" className="group/btn -ml-2 text-primary hover:text-primary">
                    Learn More
                    <ArrowUpRight className="ml-1 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
