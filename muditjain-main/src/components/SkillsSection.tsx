import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Database,
  Wrench,
  FolderOpen,
  Boxes,
  Server,
  Palette,
  FileJson,
  GitBranch,
  Shield,
  Smartphone,
  Search,
} from "lucide-react";

const skillsWithIcons = {
  // Languages
  JavaScript: { icon: Code2, color: "#F7DF1E", bgColor: "#FFF8E1" },
  TypeScript: { icon: Code2, color: "#3178C6", bgColor: "#E3F2FD" },
  "C++": { icon: Code2, color: "#00599C", bgColor: "#E1F5FE" },
  Python: { icon: Code2, color: "#3776AB", bgColor: "#E3F2FD" },
  PHP: { icon: Code2, color: "#777BB4", bgColor: "#F3E5F5" },
  // Frontend
  React: { icon: Zap, color: "#61DAFB", bgColor: "#E0F7FA" },
  "Tailwind CSS": { icon: Palette, color: "#06B6D4", bgColor: "#CFFAFE" },
  HTML5: { icon: FileJson, color: "#E34C26", bgColor: "#FFEBEE" },
  CSS3: { icon: Palette, color: "#1572B6", bgColor: "#E3F2FD" },
  Vite: { icon: Zap, color: "#646CFF", bgColor: "#EEE5FF" },
  // Backend
  "Node.js": { icon: Server, color: "#68A063", bgColor: "#E8F5E9" },
  "Express.js": { icon: Server, color: "#90C53F", bgColor: "#F1F8E9" },
  MongoDB: { icon: Database, color: "#00ED64", bgColor: "#E8F5E9" },
  MySQL: { icon: Database, color: "#00758F", bgColor: "#E0F7FA" },
  JWT: { icon: Shield, color: "#000000", bgColor: "#F5F5F5" },
  // Tools
  Git: { icon: GitBranch, color: "#F1502F", bgColor: "#FFEBEE" },
  Docker: { icon: Boxes, color: "#2496ED", bgColor: "#E3F2FD" },
  WordPress: { icon: Wrench, color: "#21759B", bgColor: "#E1F5FE" },
  "Android Studio": { icon: Smartphone, color: "#3DDC84", bgColor: "#E8F5E9" },
  SEO: { icon: Search, color: "#4285F4", bgColor: "#E8EAF6" },
};

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "C++", "Python", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "Docker", "WordPress", "Android Studio", "SEO"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-primary">#</span> Skills
          </h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-primary" />

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated rounded-xl border border-border p-6"
              >
                <h3 className="font-heading text-sm font-bold text-primary mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((s) => {
                    const skillInfo =
                      skillsWithIcons[s as keyof typeof skillsWithIcons];
                    const IconComponent = skillInfo?.icon || Code2;
                    return (
                      <motion.div
                        key={s}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 transition-all"
                        style={{
                          backgroundColor: skillInfo?.bgColor || "#f5f5f5",
                          border: `2px solid ${skillInfo?.color || "#ccc"}`,
                        }}
                      >
                        <IconComponent
                          size={16}
                          style={{ color: skillInfo?.color || "#666" }}
                        />
                        <span
                          className="font-mono text-xs font-semibold"
                          style={{ color: skillInfo?.color || "#666" }}
                        >
                          {s}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
