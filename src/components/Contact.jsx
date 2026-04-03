import { useState } from "react";
import { FadeIn } from "./FadeIn";
import emailjs from "emailjs-com";

const CheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <FadeIn>
          <h2 className="section__title gradient-text">Let&apos;s Connect</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="contact-wrapper">
            <div className="card">
              {!isSubmitted ? (
                <>
                  <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "24px" }}>
                    I&apos;d love to hear from you! Fill out the form below.
                  </p>
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your Email"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Your Message..."
                      className="form-input form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    <button type="submit" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }}>
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="contact-success">
                  <div className="contact-success__icon">
                    <CheckIcon />
                  </div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent. I&apos;ll get back to you soon!</p>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
