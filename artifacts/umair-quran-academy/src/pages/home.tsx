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
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#133F2D' }}
      >
        {/* Islamic geometric tile pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cpath d='M40 0 L48 16 L64 8 L56 24 L72 32 L56 40 L64 56 L48 48 L40 64 L32 48 L16 56 L24 40 L8 32 L24 24 L16 8 L32 16 Z' fill='%23C9A227' fill-opacity='0.08'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }} />

        {/* Radial gold glow center */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,162,39,0.18) 0%, transparent 65%)',
        }} />

        {/* Large decorative arch left */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -left-24 top-0 bottom-0 flex items-center pointer-events-none"
        >
          <svg viewBox="0 0 200 300" width="320" height="480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.18 }}>
            <path d="M30 290 L30 120 Q30 20 100 20 Q170 20 170 120 L170 290" stroke="#C9A227" strokeWidth="3" />
            <path d="M50 290 L50 125 Q50 50 100 50 Q150 50 150 125 L150 290" stroke="#C9A227" strokeWidth="1.5" />
            <path d="M70 290 L70 130 Q70 80 100 80 Q130 80 130 130 L130 290" stroke="#C9A227" strokeWidth="1" />
            <circle cx="100" cy="20" r="8" fill="#C9A227" />
            <ellipse cx="100" cy="8" rx="5" ry="8" fill="#C9A227" />
          </svg>
        </motion.div>

        {/* Large decorative arch right */}
        <motion.div
          style={{ y: y2 }}
          className="absolute -right-24 top-0 bottom-0 flex items-center pointer-events-none"
        >
          <svg viewBox="0 0 200 300" width="320" height="480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.18, transform: 'scaleX(-1)' }}>
            <path d="M30 290 L30 120 Q30 20 100 20 Q170 20 170 120 L170 290" stroke="#C9A227" strokeWidth="3" />
            <path d="M50 290 L50 125 Q50 50 100 50 Q150 50 150 125 L150 290" stroke="#C9A227" strokeWidth="1.5" />
            <path d="M70 290 L70 130 Q70 80 100 80 Q130 80 130 130 L130 290" stroke="#C9A227" strokeWidth="1" />
            <circle cx="100" cy="20" r="8" fill="#C9A227" />
            <ellipse cx="100" cy="8" rx="5" ry="8" fill="#C9A227" />
          </svg>
        </motion.div>

        {/* Floating crescent stars */}
        {[
          { top: '12%', left: '15%', size: 28, delay: 0 },
          { top: '20%', right: '18%', size: 20, delay: 0.4 },
          { top: '70%', left: '10%', size: 16, delay: 0.8 },
          { top: '65%', right: '12%', size: 24, delay: 0.2 },
          { top: '40%', left: '5%', size: 14, delay: 1.0 },
          { top: '35%', right: '6%', size: 18, delay: 0.6 },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none"
            style={{ top: s.top, left: (s as any).left, right: (s as any).right, opacity: 0.35 }}
            animate={{ y: [0, -8, 0], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
          >
            <svg viewBox="0 0 24 24" width={s.size} height={s.size} fill="#C9A227">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
            </svg>
          </motion.div>
        ))}

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, transparent, #FBF8F1)',
        }} />

        {/* Hero content */}
        <div className="container relative z-20 mx-auto px-4 text-center max-w-5xl py-24">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-10"
          >
            <div style={{
              borderRadius: '16px',
              border: '2px solid rgba(201,162,39,0.55)',
              padding: '10px 24px',
              boxShadow: '0 0 0 1px rgba(201,162,39,0.15), 0 8px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
              backgroundColor: 'rgba(14,75,58,0.85)',
              backdropFilter: 'blur(4px)',
            }}>
              <img
                src="/assets/logo-green.png"
                alt="Umair Quran Academy"
                className="h-24 md:h-32 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 2px 12px rgba(201,162,39,0.4))' }}
              />
            </div>
          </motion.div>

          {/* Gold line ornament */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-[1px] w-24 md:w-40" style={{ background: 'linear-gradient(90deg, transparent, #C9A227)' }} />
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#C9A227">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
            </svg>
            <div className="h-[1px] w-24 md:w-40" style={{ background: 'linear-gradient(90deg, #C9A227, transparent)' }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight mb-6"
            style={{ textShadow: '0 2px 30px rgba(0,0,0,0.4)' }}
          >
            Learn the Quran Online with{' '}
            <span style={{ color: '#C9A227' }} className="italic">Certified</span> Teachers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.82)' }}
          >
            Authentic Islamic education for the modern Muslim family. Structured, personalized one-on-one Quran classes for families in the USA, Australia, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/pricing">
              <span
                className="inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-semibold cursor-pointer transition-all duration-200 shadow-lg"
                style={{ backgroundColor: '#C9A227', color: '#0E4B3A' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b8911f')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C9A227')}
              >
                View Plans
              </span>
            </Link>
            <a
              href="https://wa.me/923047634342"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md text-base font-semibold transition-all duration-200"
              style={{ backgroundColor: 'transparent', color: '#C9A227', border: '2px solid #C9A227' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(201,162,39,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {['Certified Ijazah', '7+ Years Experience', 'USA & Australia Families', 'Male & Female Teachers'].map((pill) => (
              <span
                key={pill}
                className="px-4 py-1.5 rounded-full text-sm font-medium"
                style={{ backgroundColor: 'rgba(201,162,39,0.15)', color: '#C9A227', border: '1px solid rgba(201,162,39,0.3)' }}
              >
                {pill}
              </span>
            ))}
          </motion.div>
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
              <div className="bg-card border border-card-border p-5 rounded-2xl shadow-lg relative">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/credentials" className="block group">
                    <div className="rounded-lg overflow-hidden border border-border bg-muted">
                      <img
                        src="/assets/hifz-certificate.png"
                        alt="Hifz Certificate"
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs text-center text-foreground/60 mt-2 font-medium">Ijazah in Hifz-ul-Quran</p>
                  </Link>
                  <Link href="/credentials" className="block group">
                    <div className="rounded-lg overflow-hidden border border-border bg-muted">
                      <img
                        src="/assets/hec-certificate.png"
                        alt="HEC Certificate"
                        className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs text-center text-foreground/60 mt-2 font-medium">HEC Equivalence Certificate</p>
                  </Link>
                </div>
                <p className="text-center text-xs text-accent font-semibold mt-4">Click to view full credentials →</p>
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
