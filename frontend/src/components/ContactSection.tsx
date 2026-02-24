import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, CheckCircle2, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useSubmitContactForm } from '@/hooks/useQueries';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'exports@gadintechnologies.com',
    href: 'mailto:exports@gadintechnologies.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Gadin Technologies, Export House, New Delhi, India',
    href: undefined,
  },
];

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const { mutate, isPending, isError, error } = useSubmitContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    mutate(
      { name: name.trim(), email: email.trim(), message: message.trim() },
      {
        onSuccess: () => {
          setSuccessMsg("Thank you for reaching out! We'll get back to you within 24 hours.");
          setName('');
          setEmail('');
          setMessage('');
        },
      }
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-sans text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Contact Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Start a Conversation
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in sourcing premium foxnuts? Reach out to our export team and we'll
            provide you with samples, pricing, and all the information you need.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
              <h3 className="font-serif text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="font-sans text-sm text-primary-foreground/75 mb-8 leading-relaxed">
                Our export specialists are ready to assist you with inquiries, samples,
                and custom orders.
              </p>

              <div className="flex flex-col gap-6">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-foreground/80" />
                    </div>
                    <div>
                      <p className="font-sans text-xs text-primary-foreground/60 uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="font-sans text-sm text-primary-foreground hover:text-accent transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-primary-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <p className="font-serif text-lg font-semibold text-foreground mb-2">
                Request a Free Sample
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                We offer complimentary samples to qualified buyers. Mention "sample request"
                in your message and our team will arrange it promptly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 shadow-warm border border-border"
              noValidate
            >
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>

              {/* Success Alert */}
              {successMsg && (
                <Alert className="mb-6 border-primary/30 bg-primary/8">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <AlertDescription className="font-sans text-sm text-foreground">
                    {successMsg}
                  </AlertDescription>
                </Alert>
              )}

              {/* Error Alert */}
              {isError && (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="font-sans text-sm">
                    {error instanceof Error ? error.message : 'Something went wrong. Please try again.'}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="font-sans text-sm font-medium text-foreground">
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isPending}
                      className="font-sans rounded-xl border-border focus:ring-primary"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="font-sans text-sm font-medium text-foreground">
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isPending}
                      className="font-sans rounded-xl border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="font-sans text-sm font-medium text-foreground">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your requirements — product grade, quantity, destination, etc."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={isPending}
                    rows={5}
                    className="font-sans rounded-xl border-border focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending || !name.trim() || !email.trim() || !message.trim()}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-sans font-semibold py-3 rounded-xl shadow-warm text-base"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>

                <p className="font-sans text-xs text-muted-foreground text-center">
                  We typically respond within 24 business hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
