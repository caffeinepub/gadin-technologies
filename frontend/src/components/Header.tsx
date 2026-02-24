import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-card/95 backdrop-blur-md shadow-warm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo + Brand */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
            aria-label="Gadin Technologies - Home"
          >
            <img
              src="/assets/generated/gadin-logo-icon.dim_256x256.png"
              alt="Gadin Technologies Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-warm"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-semibold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                Gadin Technologies
              </span>
              <span className="text-xs text-muted-foreground font-sans tracking-widest uppercase">
                Premium Foxnut Exports
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium font-sans text-foreground/80 hover:text-primary rounded-md hover:bg-primary/8 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="ml-4 bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-sm px-5 rounded-full shadow-warm"
            >
              Get in Touch
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-b border-border shadow-warm-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-base font-medium font-sans text-foreground/80 hover:text-primary hover:bg-primary/8 rounded-md transition-all"
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('#contact')}
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-sans rounded-full shadow-warm"
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
