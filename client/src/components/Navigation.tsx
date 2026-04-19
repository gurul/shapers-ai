/*
 * Navigation — Swiss minimalist style
 * Fixed top nav, pure black on white
 * Logo left, links right, hamburger on mobile
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  APP_BACKGROUND,
  ACCENT_FOREST_GREEN,
  ACCENT_FOREST_GREEN_MUTED,
} from "@/const";

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
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-background"
      style={{ backgroundColor: APP_BACKGROUND }}
    >
      <div className="container flex items-center justify-between h-14">
        {/* Logo */}
        <a
          href="#home"
          className="font-serif text-lg font-medium tracking-tight no-underline"
          style={{ color: ACCENT_FOREST_GREEN }}
        >
          Shapers AI
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200 no-underline"
              style={{ color: ACCENT_FOREST_GREEN_MUTED }}
              onMouseEnter={e => {
                e.currentTarget.style.color = ACCENT_FOREST_GREEN;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = ACCENT_FOREST_GREEN_MUTED;
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
          style={{ color: ACCENT_FOREST_GREEN }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border bg-background"
          style={{ backgroundColor: APP_BACKGROUND }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200 no-underline"
                style={{
                  fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
                  color: ACCENT_FOREST_GREEN_MUTED,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = ACCENT_FOREST_GREEN;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = ACCENT_FOREST_GREEN_MUTED;
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
