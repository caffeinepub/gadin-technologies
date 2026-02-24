import { Leaf, Globe, Award } from 'lucide-react';

const highlights = [
  {
    icon: Leaf,
    title: 'Farm-to-Export',
    description: 'We work directly with trusted farmers in Bihar and Madhya Pradesh, ensuring traceability from harvest to shipment.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Our foxnuts reach buyers across North America, Europe, the Middle East, and Southeast Asia with reliable logistics.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'Every batch undergoes rigorous quality checks and meets international food safety and export standards.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-3">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              A Legacy of Trust in{' '}
              <span className="text-primary">Foxnut Exports</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Gadin Technologies was founded with a singular mission: to bring the world's finest
              foxnuts (makhana) to global markets. Rooted in India's rich agricultural heritage,
              we bridge the gap between premium-quality producers and discerning international buyers.
            </p>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              With deep expertise in agricultural export, cold-chain logistics, and international
              trade compliance, we ensure that every shipment reflects our commitment to excellence.
              Our team of specialists handles everything from sourcing and grading to packaging and
              customs clearance — so our clients receive only the best.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">10+</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">25+</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Countries Served</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-serif text-3xl font-bold text-primary">500+</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="flex flex-col gap-5">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-5 items-start bg-card rounded-2xl p-6 shadow-warm border border-border hover:shadow-warm-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
