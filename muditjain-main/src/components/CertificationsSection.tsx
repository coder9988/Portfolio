import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Eye } from "lucide-react";
import profileImg from "@/assets/profile.png";
const certificates = [
  {
    title: "Cloud Computing",
    issuer: "Nptel",
    date: "2025",
    image: "/certificates/nptel.png",
  },
  {
    title: "Generative AI",
    issuer: "Outskill",
    date: "2026",
    image: "/certificates/outskill.png",
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "LPU",
    date: "2025",
    image: "/certificates/lpu.png",
  },
  {
    title: "Python Programming",
    issuer: "LallyInfosys",
    date: "2024",
    image: "/certificates/lally.png",
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    date: "2024",
    image: "/certificates/mongodb.png",
  },
  {
    title: "Applied Artificial Intelligence",
    issuer: "IBMSkillsBuild",
    date: "2025",
    image: "/certificates/csrbox.png",
  },
  {
    title: "Computer Programming",
    issuer: "IAmNeo",
    date: "2024",
    image: "/certificates/iamneo.png",
  },
  {
    title: "React Certification",
    issuer: "Hackerank",
    date: "2026",
    image: "/certificates/react.png",
  },
  {
    title: "Software Engineer",
    issuer: "Hackerank",
    date: "2026",
    image: "/certificates/software.png",
  },
  {
    title: "Computer Networking",
    issuer: "Google",
    date: "2024",
    image: "/certificates/google.png",
  },
];

const CertificationsSection = () => {
  const [current, setCurrent] = useState(0);
  const [viewing, setViewing] = useState<number | null>(null);
  const visibleCount = 3;
  const maxIndex = certificates.length - visibleCount;

  const next = () => setCurrent((p) => Math.min(p + 1, maxIndex));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-primary">#</span> Certifications
          </h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-primary" />

          <div className="mt-12 relative">
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                disabled={current === 0}
                className="shrink-0 rounded-full border border-border bg-secondary p-2 text-foreground transition-colors hover:border-primary disabled:opacity-30"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="overflow-hidden flex-1">
                <motion.div
                  className="flex gap-4"
                  animate={{ x: `-${current * (100 / visibleCount + 1.5)}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {certificates.map((cert, i) => (
                    <div
                      key={i}
                      className="min-w-[calc(33.333%-11px)] shrink-0 rounded-xl border border-border card-elevated p-5 transition-all hover:border-primary/40"
                    >
                      <div className="h-48 rounded-lg bg-secondary/50 border border-dashed border-border flex items-center justify-center mb-4 overflow-hidden">
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="font-mono text-xs text-muted-foreground">
                            Certificate
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-sm font-bold">
                        {cert.title}
                      </h3>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        {cert.issuer} · {cert.date}
                      </p>
                      <button
                        onClick={() => setViewing(i)}
                        className="mt-3 flex items-center gap-1.5 text-xs text-primary hover:underline"
                      >
                        <Eye size={14} /> View Certificate
                      </button>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button
                onClick={next}
                disabled={current >= maxIndex}
                className="shrink-0 rounded-full border border-border bg-secondary p-2 text-foreground transition-colors hover:border-primary disabled:opacity-30"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Dots */}
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {viewing !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
            onClick={() => setViewing(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full rounded-xl border border-border card-elevated p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setViewing(null)}
                className="absolute top-4 right-4 rounded-full border border-border p-1.5 text-muted-foreground hover:text-foreground"
              >
                <X size={16} />
              </button>
              <h3 className="font-heading text-lg font-bold">
                {certificates[viewing].title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {certificates[viewing].issuer} · {certificates[viewing].date}
              </p>
              <div className="mt-4 aspect-[4/3] rounded-lg bg-secondary/50 border border-dashed border-border flex items-center justify-center">
                {certificates[viewing].image ? (
                  <img
                    src={certificates[viewing].image}
                    alt={certificates[viewing].title}
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <span className="font-mono text-sm text-muted-foreground">
                    Certificate image placeholder
                  </span>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
