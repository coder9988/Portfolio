import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University, Phagwara, Punjab",
    year: "Since August 2023",
    grade: "CGPA: 8.45",
  },
  {
    degree: "Intermediate (12th)",
    institution: "MGN Public School, Adarsh Nagar, Jalandhar",
    year: "",
    grade: "Percentage: 85%",
  },
  {
    degree: "Matriculation (10th)",
    institution: "St. Joseph's Boys' School, Jalandhar",
    year: "",
    grade: "Percentage: 92%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-primary">#</span> Education
          </h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-primary" />

          <div className="mt-12 space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-elevated flex items-start gap-4 rounded-xl border border-border p-6"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold">{edu.degree}</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <div className="mt-1 flex gap-3">
                    {edu.year && (
                      <span className="font-mono text-xs text-primary">{edu.year}</span>
                    )}
                    <span className="font-mono text-xs text-muted-foreground">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
