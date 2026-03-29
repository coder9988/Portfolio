import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "VanilaKart",
    role: "MERN Stack Developer Intern",
    description:
      "Built a full-stack web application using the MERN stack. Converted the web app into a hybrid Android app using WebView for cross-platform deployment.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Android Studio"],
  },
  {
    company: "Orbiosisglobal",
    role: "WordPress Developer Intern",
    description:
      "Created custom WordPress plugins using PHP. Deployed responsive websites with SEO optimization for improved performance and visibility.",
    tech: ["WordPress", "PHP", "SEO", "CSS"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-primary">#</span> Experience
          </h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-primary" />

          <div className="relative mt-12 ml-4 border-l border-border pl-8 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                {/* dot */}
                <div className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary bg-background">
                  <Briefcase size={12} className="text-primary" />
                </div>

                <h3 className="font-heading text-lg font-bold">{exp.role}</h3>
                <p className="font-body text-sm text-primary">{exp.company}</p>
                <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-border bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
