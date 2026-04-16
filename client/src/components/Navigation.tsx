/*
 * Navigation — Swiss minimalist style
 * Fixed top nav, pure black on white
 * Logo left, links right, hamburger on mobile
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "Get Involved", href: "#contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="container flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#home"
          className="font-heading text-lg font-bold tracking-tight no-underline"
          style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            color: "#19498a",
          }}
        >
          shapers.ai
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200 no-underline"
              style={{
                fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                color: "rgba(25, 73, 138, 0.72)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#19498a";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "rgba(25, 73, 138, 0.72)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ color: "#19498a" }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 no-underline"
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  color: "rgba(25, 73, 138, 0.72)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#19498a";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "rgba(25, 73, 138, 0.72)";
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
