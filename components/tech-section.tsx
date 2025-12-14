/* Updated technologies list with user's skills */
const technologies = [
  "Machine Learning",
  "Deep Learning (Basics)",
  "Natural Language Processing",
  "Generative AI",
  "Retrieval-Augmented Generation (RAG)",
  "LangChain",
  "LangGraph",
  "Agentic Orchestration Systems",
  "Prompt Engineering",
  "AI Automation",
  "Chatbot Systems",
  "Microsoft Copilot Studio",
  "Docker",
  "Git",
  "Google Cloud Platform",
]

export function TechSection() {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary mb-4 tracking-wide uppercase">Skills</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Core competencies in AI and automation technologies.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="px-5 py-4 bg-background border border-border rounded-lg hover:border-primary/40 transition-colors"
            >
              <span className="text-sm font-medium text-foreground">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
