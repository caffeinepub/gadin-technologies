import { ShieldCheck, Truck, Handshake, FlaskConical, PackageCheck, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    description:
      'Every batch is tested for moisture, purity, and grade before export. We maintain strict quality control at every stage of the supply chain.',
  },
  {
    icon: Truck,
    title: 'Reliable Global Logistics',
    description:
      'We partner with leading freight forwarders to ensure timely, safe delivery to ports worldwide — with full documentation and tracking.',
  },
  {
    icon: FlaskConical,
    title: 'Lab-Tested & Certified',
    description:
      'Our products carry FSSAI, APEDA, and organic certifications. Third-party lab reports are available for every shipment on request.',
  },
  {
    icon: PackageCheck,
    title: 'Flexible Packaging',
    description:
      'From bulk sacks to retail-ready private-label packaging, we accommodate your specific requirements with custom branding options.',
  },
  {
    icon: Handshake,
    title: 'Transparent Pricing',
    description:
      'We believe in fair, transparent pricing with no hidden costs. Our quotes include all charges from farm to port of destination.',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description:
      'Our export specialists are available to guide you through every step — from sampling and quotation to customs clearance and delivery.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-primary-foreground/60 mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Your Trusted Export Partner
          </h2>
          <p className="font-sans text-base md:text-lg text-primary-foreground/75 max-w-2xl mx-auto">
            We combine deep agricultural expertise with world-class export capabilities to deliver
            an experience that sets us apart in the global foxnut market.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-primary-foreground/8 backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-7 hover:bg-primary-foreground/12 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-3">{title}</h3>
              <p className="font-sans text-sm text-primary-foreground/70 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
