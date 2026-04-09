import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { AnimatedSection } from "../ui/AnimatedSection";
import { CheckCircleIcon, SendIcon } from "../icons/Icons";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setIsSubmitting(false);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="w-full max-w-5xl mx-auto px-5">
        <SectionHeading>Let&apos;s Connect</SectionHeading>

        <AnimatedSection delay={0.1}>
          <div className="max-w-lg mx-auto">
            <Card hover={false} padding="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p
                      className="text-center text-sm mb-6"
                      style={{ color: "var(--text-muted)" }}
                    >
                      I&apos;d love to hear from you! Fill out the form below.
                    </p>

                    <form
                      className="flex flex-col gap-4"
                      onSubmit={handleSubmit}
                    >
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Your Message..."
                        className="form-input resize-y min-h-[120px]"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                          w-full flex items-center justify-center gap-2
                          py-3.5 rounded-xl font-semibold text-sm text-white
                          transition-all duration-300
                          bg-[rgb(var(--accent-rgb))]
                          hover:bg-[rgb(var(--accent-hover-rgb))]
                          hover:shadow-[0_8px_25px_rgb(var(--accent-rgb)/0.35)]
                          disabled:opacity-60 disabled:cursor-not-allowed
                          active:scale-[0.98]
                        "
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <SendIcon size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        delay: 0.1,
                      }}
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{
                        background: "rgba(16, 185, 129, 0.1)",
                        color: "#10b981",
                      }}
                    >
                      <CheckCircleIcon />
                    </motion.div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Thank You!
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Your message has been sent. I&apos;ll get back to you soon!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
