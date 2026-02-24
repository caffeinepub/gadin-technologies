import { SiLinkedin, SiInstagram, SiFacebook } from 'react-icons/si';
import { Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: SiInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: SiFacebook, href: 'https://facebook.com', label: 'Facebook' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'gadin-technologies');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/gadin-logo-icon.dim_256x256.png"
                alt="Gadin Technologies"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-serif font-semibold text-lg text-background">Gadin Technologies</p>
                <p className="font-sans text-xs text-background/50 tracking-widest uppercase">Premium Foxnut Exports</p>
              </div>
            </div>
            <p className="font-sans text-sm text-background/65 leading-relaxed max-w-xs">
              Bridging India's finest foxnut farms with global markets. Quality, trust, and
              excellence in every shipment.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-background/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-background/50 mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-sans text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-widest uppercase text-background/50 mb-4">
              Products
            </p>
            <ul className="flex flex-col gap-2">
              {['Raw Foxnuts', 'Roasted Foxnuts', 'Flavored Makhana', 'Bulk Export', 'Private Label'].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm text-background/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-background/50">
            © {year} Gadin Technologies. All rights reserved.
          </p>
          <p className="font-sans text-xs text-background/50 flex items-center gap-1">
            Built with{' '}
            <Heart className="w-3 h-3 text-accent fill-accent" aria-label="love" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
