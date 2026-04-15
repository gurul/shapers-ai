/*
 * ContactSection — Swiss minimalist
 * Simple contact form: email, subject, message
 * Uses mailto: as a lightweight approach (no backend)
 */

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Open mailto link
    const mailtoLink = `mailto:contact@shapers.ai?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `From: ${email}\n\n${message}`
    )}`;
    window.location.href = mailtoLink;

    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <span className="section-number">05 — Get Involved</span>

        <h2
          className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          Work With Us
        </h2>

        <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed">
          Whether you're a business owner looking for help or a professional
          looking to contribute, this is where it starts.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-lg space-y-6"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder="What's this about?"
              className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors duration-200"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              placeholder="Tell us how we can help, or how you'd like to contribute."
              className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none transition-colors duration-200 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium tracking-wide hover:bg-black/85 transition-colors duration-200"
            style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}
          >
            Send message
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
