import { motion } from "framer-motion";
import { Trophy, Star, Award } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "50 Days Code Badge",
    description: "Attained 50 days coding badge on LeetCode through consistent daily problem solving.",
  },
  {
    icon: Star,
    title: "4★ on HackerRank",
    description: "Achieved 4-star rating in Python, C++, and Problem Solving on HackerRank.",
  },
  {
    icon: Award,
    title: "HackSmart Hackathon Finalist",
    description: "Finalist at HackSmart hackathon — Top 34 out of 1,000+ participating teams.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-primary">#</span> Achievements
          </h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-primary" />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group rounded-xl border border-border card-elevated p-6 text-center transition-all hover:border-primary/40 hover:glow-border"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <a.icon size={28} />
                </div>
                <h3 className="font-heading text-base font-bold group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                  {a.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
