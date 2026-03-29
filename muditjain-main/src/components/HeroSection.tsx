import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="font-mono text-sm text-primary mb-3">Hi, I'm</p>
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Mudit <span className="text-gradient">Jain</span>
          </h1>
          <p className="mt-4 font-body text-lg text-muted-foreground max-w-lg">
            Full Stack Developer specializing in the MERN stack, building modern
            and scalable web applications. Turning ideas into real-world
            solutions.
          </p>

          <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/coder9988"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_-3px_hsl(185_80%_55%/0.3)]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jamudit"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_-3px_hsl(185_80%_55%/0.3)]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jainmudit616@gmail.com"
              className="rounded-lg border border-border p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_15px_-3px_hsl(185_80%_55%/0.3)]"
            >
              <Mail size={20} />
            </a>
          </div>

          <a
            href="#contact"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_25px_-5px_hsl(185_80%_55%/0.4)]"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-shrink-0"
        >
          <div className="glow-border h-64 w-64 overflow-hidden rounded-full border-2 border-primary/30 sm:h-80 sm:w-80">
            <img
              src={profileImg}
              alt="Mudit Jain"
              width={320}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
