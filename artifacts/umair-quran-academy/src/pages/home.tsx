import { SEO } from '@/components/SEO';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArchMotif, CrescentStar, GoldDivider } from '@/components/ui/IslamicMotifs';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { CheckCircle2, BookOpen, Clock, ShieldCheck, Star } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Online Quran Classes | USA & Australia" 
        description="Learn the Quran online with certified, experienced teachers. Specializing in Noorani Qaida, Tajweed, Nazra, and Hifz for Muslim families in the USA and Australia." 
        keywords="online Quran academy, learn Quran online USA, Quran classes online Australia, Hifz classes online"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20 pb-32">
        {/* Background Patterns */}
        <div className="absolute inset-0 pattern-islamic opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none z-10"></div>
        
        {/* Parallax Elements */}
        <motion.div style={{ y: y1 }} className="absolute -left-20 top-20 opacity-20 pointer-events-none text-accent">
          <ArchMotif className="w-96 h-auto" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute -right-20 top-40 opacity-10 pointer-events-none text-primary">
          <ArchMotif className="w-[30rem] h-auto" />
        </motion.div>

        <div className="container relative z-20 mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm border border-accent/20">
                <CrescentStar className="w-4 h-4" />
                Trusted by Families Worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-primary leading-tight mb-6">
              Learn the Quran Online with <span className="text-accent italic">Certified</span> Teachers
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Authentic Islamic education for the modern Muslim family. We bring structured, personalized, and engaging Quran classes to your home in the USA, Australia, and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="w-full sm:w-auto text-base h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                <Link href="/pricing">View Plans</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 border-accent/30 text-primary hover:bg-accent/5">
                <a href="https://wa.me/923047634342" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* TRUST BADGES STRIP */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <StaggerContainer className="flex flex-wrap justify-center gap-8 md:gap-16 items-center text-center opacity-80">
            {[
              { icon: ShieldCheck, text: "HEC Recognized" },
              { icon: Star, text: "Certified Hifz Ijazah" },
              { icon: BookOpen, text: "7+ Years Experience" },
              { icon: Clock, text: "Flexible Timezones" },
            ].map((badge, i) => (
              <StaggerItem key={i} className="flex items-center gap-3">
                <badge.icon className="w-6 h-6 text-accent" />
                <span className="font-serif font-medium text-primary text-lg">{badge.text}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">Why Choose Umair Quran Academy?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">We combine traditional teaching methods with modern convenience, ensuring your journey with the Quran is disciplined, sincere, and rewarding.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Certified Teachers", desc: "Our educators hold formal Ijazah and HEC recognized qualifications." },
              { title: "One-on-One Classes", desc: "Dedicated attention to focus solely on your or your child's progress." },
              { title: "Male & Female Options", desc: "Comfortable learning environment with teacher choice available." },
              { title: "Structured Curriculum", desc: "From absolute beginner (Noorani Qaida) to Hifz-ul-Quran." },
              { title: "Flexible Scheduling", desc: "Classes adapted to USA, Australia, and European timezones." },
              { title: "Focus on Tajweed", desc: "Emphasis on beautiful and correct pronunciation from day one." }
            ].map((feature, i) => (
              <StaggerItem key={i} className="bg-card border border-card-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CrescentStar className="w-16 h-16 text-accent" />
                </div>
                <CheckCircle2 className="w-8 h-8 text-accent mb-6" />
                <h3 className="text-xl font-bold font-serif text-primary mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">Our Programs</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">Structured learning paths for all ages and proficiency levels.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Noorani Qaida", for: "Beginners", desc: "Foundation for Arabic pronunciation and basic rules." },
              { name: "Quran Nazra", for: "Intermediate", desc: "Fluent reading with correct Tajweed application." },
              { name: "Hifz-ul-Quran", for: "Advanced", desc: "Structured memorization program with revision." }
            ].map((course, i) => (
              <StaggerItem key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-2 block">{course.for}</span>
                <h3 className="text-2xl font-bold font-serif text-white mb-4">{course.name}</h3>
                <p className="text-primary-foreground/80 mb-6 min-h-[48px]">{course.desc}</p>
                <Link href="/courses" className="text-accent hover:text-white font-medium inline-flex items-center gap-2 transition-colors">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 hover:text-white bg-transparent">
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TEACHERS & CREDENTIALS PREVIEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-6">Expert Teachers, Formal Credentials</h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Our faculty consists of dedicated professionals who have devoted their lives to the study and teaching of the Holy Quran. With both male and female teachers available, we ensure a comfortable environment for all students.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span>Ijazah-certified Hafiz teachers</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span>Fluent in English for Western diaspora</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="text-accent w-5 h-5 flex-shrink-0" />
                  <span>Patient, encouraging methodology</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/teachers">Meet Our Teachers</Link>
                </Button>
                <Button asChild variant="secondary" className="bg-secondary/50 text-primary">
                  <Link href="/credentials">View Credentials</Link>
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="relative">
              <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-3"></div>
              <div className="bg-card border border-card-border p-6 rounded-3xl shadow-lg relative grid grid-cols-2 gap-4">
                <Link href="/credentials" className="block group">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted border border-border">
                    <img src="/assets/hifz-certificate.png" alt="Hifz Certificate Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </Link>
                <Link href="/credentials" className="block group mt-8">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted border border-border shadow-md">
                    <img src="/assets/hec-certificate.png" alt="HEC Certificate Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <FadeIn>
            <CrescentStar className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-6">Begin Your Journey Today</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Join families across the USA and Australia who trust Umair Quran Academy for their Islamic education.
            </p>
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/pricing">View Pricing & Enroll</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
