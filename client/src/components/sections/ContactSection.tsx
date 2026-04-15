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
    )}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
    window.location.href = mailtoLink;

    toast.success("Opening your email client...");
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <div className="w-full">
          <div className="text-center">
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              Work With Us
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Whether you&apos;re a business owner looking for help or a
              professional looking to contribute, this is where it starts.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 grid w-full max-w-4xl gap-x-10 gap-y-8 md:grid-cols-2"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required
                placeholder="What's this about?"
                className="w-full border-b border-border bg-transparent py-2 text-sm text-foreground transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Tell us how we can help, or how you'd like to contribute."
                className="w-full resize-none border-b border-border bg-transparent py-2 text-sm text-foreground transition-colors duration-200 placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:bg-black/85 md:col-span-2 md:justify-self-center"
              style={{ fontFamily: "'IBM Plex Sans', system-ui, sans-serif" }}
            >
              Send message
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
