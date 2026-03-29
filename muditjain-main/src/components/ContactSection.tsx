import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/coder9988", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jamudit",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:jainmudit616@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+918288895903", label: "Phone" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:jainmudit616@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-primary">#</span> Contact
          </h2>
          <div className="mt-1 h-1 w-16 rounded-full bg-primary" />

          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="font-mono text-xs text-muted-foreground mb-2 block">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-2 block">
                  Subject
                </label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-heading text-sm font-bold text-primary-foreground transition-all hover:opacity-90"
              >
                <Send size={16} /> Send Message
              </button>
            </form>

            {/* Info sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-xl border border-border card-elevated p-6">
                <h3 className="font-heading text-base font-bold mb-4">
                  Get in touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-primary flex-shrink-0" />
                    <a
                      href="mailto:jainmudit616@gmail.com"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      jainmudit616@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-primary flex-shrink-0" />
                    <a
                      href="tel:+918288895903"
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 8288895903
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border card-elevated p-6">
                <h3 className="font-heading text-base font-bold mb-4">
                  Socials
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        s.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="rounded-lg border border-border bg-secondary/50 p-3 text-muted-foreground transition-all hover:border-primary/40 hover:text-primary"
                    >
                      <s.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
