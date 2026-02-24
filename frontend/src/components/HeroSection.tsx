import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1440x700.png')" }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 text-accent-foreground rounded-full px-4 py-1.5 mb-6 text-sm font-sans font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          Premium Quality · Globally Trusted
        </div>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-black leading-tight mb-4 drop-shadow-lg">
          Gadin Technologies
        </h1>

        <p className="font-serif text-xl sm:text-2xl md:text-3xl text-black italic mb-4 drop-shadow">
          Nature's Finest Foxnuts, Delivered Worldwide
        </p>

        <p className="font-sans text-base sm:text-lg text-black max-w-2xl mx-auto mb-10 leading-relaxed">
          We source and export premium-grade foxnuts (makhana) from the heartlands of India,
          bringing the finest quality to international markets with uncompromising standards.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => handleScroll('#products')}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold px-8 py-3 rounded-full shadow-warm-lg text-base"
          >
            Explore Our Products
          </Button>
          <Button
            onClick={() => handleScroll('#contact')}
            size="lg"
            variant="outline"
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm font-sans font-semibold px-8 py-3 rounded-full text-base"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs font-sans tracking-widest uppercase">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
