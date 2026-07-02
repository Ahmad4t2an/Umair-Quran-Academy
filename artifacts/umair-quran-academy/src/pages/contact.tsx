import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { FadeIn } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { useLocation } from 'wouter';
import PageBanner from '@/components/PageBanner';

export default function Contact() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const initialPlan = searchParams.get('plan') || '';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/f/xpwzglyb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Umair Quran Academy to enroll in online Quran classes or ask any questions." 
      />

      <PageBanner title="Contact Us" subtitle="We're here to help you begin your Quranic journey." />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">Get in Touch</h2>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                Whether you're ready to enroll or just have a few questions about our classes, scheduling, or teachers, please don't hesitate to reach out. We respond fastest via WhatsApp.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">WhatsApp / Phone</h3>
                    <p className="text-foreground/70 mb-2">+92 304 7634342</p>
                    <Button asChild variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-white">
                      <a href="https://wa.me/923047634342" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a href="mailto:umairquranacademy.pk@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">
                      umairquranacademy.pk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Location</h3>
                    <p className="text-foreground/70">
                      Bahawalpur, Punjab, Pakistan<br/>
                      <span className="text-sm opacity-80">(Office Hours: Mon–Fri)</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="bg-card border border-card-border p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold font-serif text-primary mb-6">Send us a Message</h3>
                
                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Message Sent Successfully!</h4>
                    <p className="text-sm">JazakAllah Khair for reaching out. We will get back to you shortly.</p>
                    <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
                        <Input id="name" name="name" required placeholder="Your name" className="bg-background" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                        <Input id="email" name="email" type="email" required placeholder="you@example.com" className="bg-background" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone / WhatsApp *</label>
                      <Input id="phone" name="phone" required placeholder="Include country code" className="bg-background" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="plan" className="text-sm font-medium text-foreground">Preferred Plan</label>
                      <Select name="plan" defaultValue={initialPlan || "undecided"}>
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a plan (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undecided">Not sure yet / General inquiry</SelectItem>
                          <SelectItem value="basic">Basic ($80/month)</SelectItem>
                          <SelectItem value="standard">Standard ($100/month)</SelectItem>
                          <SelectItem value="premium">Premium ($150/month)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-foreground">Message *</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        placeholder="Tell us about the student's current level, timezone, or any specific requirements..."
                        className="min-h-[120px] bg-background"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-md border border-destructive/20">
                        There was an error sending your message. Please try again or contact us via WhatsApp.
                      </div>
                    )}

                    <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-base">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
