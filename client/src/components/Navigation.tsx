import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Asterisk, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Our story", href: "#about" },
  { label: "Our work", href: "#projects" },
  { label: "Our team", href: "#team" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="container nav-inner">
        <a
          href="#home"
          className="brand"
          onClick={() => setMobileOpen(false)}
          aria-label="Shapers AI home"
        >
          <Asterisk size={35} strokeWidth={1.7} aria-hidden="true" />
          <span>
            shapers<span className="brand-ai"> ai</span>
          </span>
        </a>
        <div className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="button button-small">
            Get involved <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <div id="mobile-navigation" className="mobile-nav" hidden={!mobileOpen}>
        <div className="container">
          {[...navLinks, { label: "Get involved", href: "#contact" }].map(
            link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
}
