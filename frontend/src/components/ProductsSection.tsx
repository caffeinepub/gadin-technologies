import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Premium Grade A & B Foxnuts',
  'Roasted & Raw Variants Available',
  'Custom Packaging & Private Labeling',
  'Bulk & Retail Export Quantities',
  'FSSAI, APEDA & Organic Certified',
  'Shelf Life: 12–18 Months',
];

const specs = [
  { label: 'Moisture', value: '≤ 12%' },
  { label: 'Protein', value: '9.7g / 100g' },
  { label: 'Calories', value: '347 kcal / 100g' },
  { label: 'Min. Order', value: '500 kg' },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Our Products
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Premium Foxnuts (Makhana)
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Sourced from the finest lotus ponds of India, our foxnuts are celebrated for their
            exceptional taste, nutritional richness, and superior quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-warm-lg border border-border">
              <img
                src="/assets/generated/foxnut-product.dim_800x600.png"
                alt="Premium Foxnuts (Makhana) — Gadin Technologies"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-2xl px-5 py-3 shadow-warm-lg">
              <p className="font-serif text-lg font-bold">100%</p>
              <p className="font-sans text-xs font-medium">Natural & Pure</p>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="font-sans text-xs px-3 py-1 rounded-full">Gluten Free</Badge>
              <Badge variant="secondary" className="font-sans text-xs px-3 py-1 rounded-full">Vegan</Badge>
              <Badge variant="secondary" className="font-sans text-xs px-3 py-1 rounded-full">Non-GMO</Badge>
              <Badge variant="secondary" className="font-sans text-xs px-3 py-1 rounded-full">Export Quality</Badge>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              The Superfood of the East
            </h3>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-6">
              Foxnuts, known as Makhana or Lotus Seeds, are a nutrient-dense superfood prized
              across Asia for centuries. Rich in protein, magnesium, and antioxidants, they are
              a sought-after ingredient in health foods, snacks, and traditional cuisines worldwide.
            </p>

            {/* Features List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 font-sans text-sm text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {specs.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-card rounded-xl p-4 text-center border border-border shadow-xs"
                >
                  <p className="font-serif text-lg font-bold text-primary">{value}</p>
                  <p className="font-sans text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
