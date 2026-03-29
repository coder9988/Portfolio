import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  ArrowRight,
} from "lucide-react";

const tabs = ["Training", "Internship Project", "Education", "Skills"] as const;
type Tab = (typeof tabs)[number];

const ResumeSection = () => {
  const [active, setActive] = useState<Tab>("Training");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabClick = (tab: Tab) => {
    setActive(tab);
    if (tab === "Education") {
      scrollToSection("education");
    } else if (tab === "Skills") {
      scrollToSection("skills");
    }
  };

  return (
    <section id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h2 className="text-center font-heading text-3xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">
              Resume
            </span>
          </h2>

          {/* Contact bar */}
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 rounded-full border border-border bg-secondary/50 px-6 py-2.5 text-xs text-muted-foreground">
            <a
              href="mailto:jainmudit616@gmail.com"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail size={12} className="text-green-400" />{" "}
              jainmudit616@gmail.com
            </a>
            <a
              href="tel:+918288895903"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone size={12} className="text-blue-400" /> +91-8288895903
            </a>
            <a
              href="https://www.linkedin.com/in/jamudit"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Linkedin size={12} className="text-primary" /> LinkedIn
            </a>
            <a
              href="https://github.com/coder9988"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github size={12} className="text-green-400" /> GitHub
            </a>
          </div>

          {/* Tab navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-body">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`rounded-full px-5 py-2 font-medium transition-all flex items-center gap-1.5 ${
                  active === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
                {(tab === "Education" || tab === "Skills") && (
                  <ArrowRight size={14} />
                )}
              </button>
            ))}
          </div>

          {/* Content cards */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {active === "Training" && (
                  <div className="rounded-lg border border-dashed border-border p-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      Summer Training
                    </p>
                    <div className="mt-2 flex items-baseline justify-between">
                      <h3 className="font-heading text-lg font-bold">
                        Data Structures & Algorithms
                      </h3>
                      <span className="text-xs text-primary">LPU</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Lovely Professional University
                    </p>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li>Covered DSA concepts from basic to advanced level</li>
                      <li>Solved numerous DSA-based coding problems</li>
                      <li>
                        Built a web-based{" "}
                        <span className="text-foreground font-medium">
                          Grade Analyzer
                        </span>{" "}
                        for automatic GPA/CGPA calculation
                      </li>
                      <li>
                        Implemented structured grading logic, reducing manual
                        errors
                      </li>
                      <li>
                        Strengthened problem-solving and real-world DSA
                        application skills
                      </li>
                    </ul>
                  </div>
                )}

                {active === "Internship Project" && (
                  <div className="rounded-lg border border-dashed border-border p-6">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      Internship
                    </p>
                    <div className="mt-2 flex items-baseline justify-between">
                      <h3 className="font-heading text-lg font-bold">
                        VanillaKart – Digital Solutions
                      </h3>
                      <span className="text-xs text-primary">
                        Sep – Nov 2025
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Software Development Intern
                    </p>
                    <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-muted-foreground leading-relaxed">
                      <li>
                        Delivered a PR marketing agency website using the MERN
                        stack
                      </li>
                      <li>
                        Converted the web app into a hybrid Android app via
                        WebView
                      </li>
                      <li>
                        Implemented basic SEO techniques to improve visibility
                      </li>
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "ReactJS",
                        "NodeJS",
                        "ExpressJS",
                        "MongoDB",
                        "Android Studio",
                        "WebView",
                        "HTML",
                        "CSS",
                      ].map((t) => (
                        <span
                          key={t}
                          className="rounded border border-border bg-secondary px-2 py-1 font-mono text-[10px] text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {active === "Education" && (
                  <div className="rounded-lg border border-dashed border-border p-6 text-center">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
                      More Details
                    </p>
                    <h3 className="font-heading text-lg font-bold mb-3">
                      View Your Education Details
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Click the button below to navigate to your complete
                      education information
                    </p>
                    <button
                      onClick={() => scrollToSection("education")}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                    >
                      Go to Education Section <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {active === "Skills" && (
                  <div className="rounded-lg border border-dashed border-border p-6 text-center">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
                      More Details
                    </p>
                    <h3 className="font-heading text-lg font-bold mb-3">
                      View Your Skills
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Click the button below to navigate to your complete skills
                      section with colored icons
                    </p>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
                    >
                      Go to Skills Section <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Download button */}
          <div className="mt-10 flex justify-center">
            <a
              href="/Resume_mudit.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
