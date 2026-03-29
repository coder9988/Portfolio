import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Proxima Automation",
    date: "December 2025",
    description:
      "Full-stack platform for real-time industrial machine health monitoring with predictive maintenance and alert management system featuring severity levels and email notifications.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/coder9988",
    demo: "",
  },
  {
    title: "Quick Response Coordinate System",
    date: "Feb 2025 – May 2025",
    description:
      "Analyzed high-severity incident patterns and formulated a 3-tier incident escalation architecture for severity-based routing. Prototyped a functional escalation solution improving workflow clarity.",
    tech: ["JavaScript", "Tailwind CSS", "PHP", "MySQL"],
    github: "https://github.com/coder9988",
    demo: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-primary">#</span> Projects
          </h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-primary" />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group card-elevated rounded-xl border border-border p-6 transition-all hover:border-primary/40 hover:glow-border"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-mono text-xs text-muted-foreground">
                      {p.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground transition-colors hover:text-primary"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      title="Source Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="mt-4 font-body text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary hover:text-primary"
                  >
                    <Github size={14} /> Source Code
                  </a>
                  {p.demo ? (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 font-mono text-xs text-primary-foreground transition-all hover:opacity-90"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-border px-4 py-1.5 font-mono text-xs text-muted-foreground/50">
                      <ExternalLink size={14} /> Demo Soon
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
