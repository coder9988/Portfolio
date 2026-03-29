import { motion } from "framer-motion";
import { Code, Server, Globe } from "lucide-react";

const highlights = [
  { icon: Code, label: "Frontend", desc: "React, Tailwind CSS, responsive UIs" },
  { icon: Server, label: "Backend", desc: "Node.js, Express, MongoDB, APIs" },
  { icon: Globe, label: "WordPress", desc: "Custom plugins, PHP, SEO" },
];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-primary">#</span> About Me
          </h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-primary" />

          <p className="mt-8 max-w-2xl font-body text-muted-foreground leading-relaxed">
            I'm a Full Stack Developer specializing in the MERN stack, with
            experience building modern, scalable web applications. I also work
            with WordPress to develop dynamic and user-friendly websites. I
            enjoy turning ideas into real-world solutions and continuously
            improving my skills.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-elevated rounded-xl border border-border p-6 transition-all hover:border-primary/40 hover:glow-border"
              >
                <h.icon className="mb-3 text-primary" size={28} />
                <h3 className="font-heading text-sm font-bold">{h.label}</h3>
                <p className="mt-1 font-body text-xs text-muted-foreground">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
