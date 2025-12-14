import { FileText, Workflow, MessageSquare, Bot, Code, Mail } from "lucide-react"

const solutions = [
  {
    icon: FileText,
    title: "Invoice & Document Intelligence",
    description: "Automated extraction, processing, and analysis of business documents with enterprise-grade accuracy.",
  },
  {
    icon: Workflow,
    title: "AI Automation Workflows",
    description: "End-to-end automation pipelines that eliminate repetitive tasks and scale operations efficiently.",
  },
  {
    icon: MessageSquare,
    title: "Business Chatbots (RAG / LLM)",
    description: "Intelligent conversational AI powered by your data, delivering accurate and contextual responses.",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Autonomous AI agents that execute complex multi-step tasks with human-like reasoning.",
  },
  {
    icon: Code,
    title: "Python Automation Systems",
    description:
      "Robust, scalable automation solutions built with Python for seamless integration with existing infrastructure.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "AI-powered email automation to send personalized messages to single or multiple users via simple prompts.",
  },
]

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Solutions</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
            Enterprise AI Solutions
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Production-ready systems designed for real-world business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group p-5 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <solution.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
