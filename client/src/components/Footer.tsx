import Image from "next/image";
import { ArrowUpRight, Asterisk } from "lucide-react";
const links = [
  { label: "Instagram", href: "https://www.instagram.com/shapers.ai/" },
  { label: "Seattle Shapers", href: "https://www.seattleshapers.org/" },
  { label: "Global Shapers", href: "https://www.globalshapers.org/home" },
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#home" className="brand">
              <Asterisk size={32} strokeWidth={1.7} aria-hidden="true" />
              <span>
                shapers<span className="brand-ai"> ai</span>
              </span>
            </a>
            <p>Small teams. Useful tools. Stronger communities.</p>
          </div>
          <nav aria-label="Social links">
            {links.map(link => (
              <a
                href={link.href}
                key={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            Made with care in Seattle.<span> A Global Shapers initiative.</span>
          </p>
          <Image
            src="/footer-global-shapers.png"
            alt="Global Shapers Community"
            width={1080}
            height={1080}
            className="footer-logo"
          />
        </div>
      </div>
    </footer>
  );
}
