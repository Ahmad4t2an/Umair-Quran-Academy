import { SEO } from '@/components/SEO';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Check } from 'lucide-react';
import PageBanner from '@/components/PageBanner';

const PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: 80,
    features: [
      "4 classes/week (Mon–Fri)",
      "30-min one-on-one sessions",
      "Noorani Qaida or Nazra",
      "Flexible timezone scheduling",
      "Monthly progress tracking",
      "WhatsApp teacher support"
    ]
  },
  {
    id: "standard",
    name: "Standard",
    price: 100,
    popular: true,
    features: [
      "Everything in Basic, plus:",
      "45-min extended sessions",
      "Deep Tajweed correction",
      "Monthly detailed progress report",
      "Choice of male or female teacher",
      "Priority make-up classes"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    price: 150,
    features: [
      "Everything in Standard, plus:",
      "60-min intensive sessions",
      "Hifz-ul-Quran memorization program",
      "Dedicated senior Hafiz teacher",
      "Priority scheduling",
      "Monthly parent consultation call"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Pricing Plans" 
        description="Affordable, high-quality online Quran classes. View our pricing plans for Noorani Qaida, Nazra, and Hifz." 
      />

      <PageBanner title="Simple, Transparent Pricing" subtitle="Invest in your family's Islamic education. All prices in USD — advance payment required." />

      <section className="pt-12 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan) => (
              <StaggerItem 
                key={plan.id} 
                className={`bg-card rounded-2xl border ${
                  plan.popular ? 'border-accent shadow-lg scale-100 md:scale-105 z-10' : 'border-card-border shadow-sm'
                } p-8 flex flex-col relative`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-serif text-primary mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center font-bold text-primary">
                    <span className="text-3xl">$</span>
                    <span className="text-5xl tracking-tight">{plan.price}</span>
                    <span className="text-foreground/60 ml-2 text-lg font-normal">/ mo</span>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  asChild 
                  className={`w-full h-12 text-base ${
                    plan.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary text-primary hover:bg-secondary/80'
                  }`}
                >
                  <Link href={`/contact?plan=${plan.id}`}>Choose This Plan</Link>
                </Button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl font-bold font-serif text-primary text-center mb-10">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-card-border shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">What payment methods do you accept?</h4>
                <p className="text-foreground/70">We accept international Bank Transfers, PayPal, and Wise (TransferWise). Payment details are provided upon enrollment.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-card-border shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">How does scheduling work across timezones?</h4>
                <p className="text-foreground/70">We specifically cater to students in the USA and Australia. Upon enrollment, you provide your preferred local time, and we assign a teacher whose schedule aligns with yours.</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-card-border shadow-sm">
                <h4 className="font-bold text-lg text-primary mb-2">What is the cancellation & rescheduling policy?</h4>
                <p className="text-foreground/70">You can cancel your subscription at any time with a 7-day notice before the next billing cycle. If you need to reschedule a specific class, please notify your teacher at least 24 hours in advance to arrange a make-up session.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
