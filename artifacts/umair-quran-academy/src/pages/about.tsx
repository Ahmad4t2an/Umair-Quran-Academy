import { SEO } from '@/components/SEO';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { GoldDivider, CrescentStar } from '@/components/ui/IslamicMotifs';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="About Us" 
        description="Learn about Umair Quran Academy's mission to make authentic Quran education accessible to Muslim families worldwide." 
      />

      {/* Page Header */}
      <section className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">About the Academy</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Preserving tradition, embracing modern convenience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none text-foreground/80 leading-relaxed">
              <p className="text-xl text-foreground font-medium mb-8 text-center">
                Umair Quran Academy was founded with a singular, sincere purpose: to make authentic, high-quality Quran education accessible to Muslim families living in the diaspora, particularly in the USA, Australia, and Europe.
              </p>
              
              <p>
                In today's fast-paced world, finding a qualified and trustworthy Quran teacher locally can be challenging for families living far from Islamic centers. We bridge this gap by bringing certified, experienced educators directly into your home through interactive online sessions.
              </p>
              
              <p>
                Our foundation is built upon <strong>Ikhlas (sincerity)</strong>, <strong>Discipline</strong>, and a deep respect for Islamic tradition. We do not believe in compromising the quality of sacred knowledge for convenience. Instead, we use modern technology to deliver the timeless teachings of the Holy Quran with the exactness and reverence they demand.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoldDivider />

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <StaggerItem className="bg-card p-10 rounded-2xl shadow-sm border border-card-border relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CrescentStar className="w-32 h-32 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-primary mb-4 relative z-10">Our Vision</h3>
              <p className="text-foreground/80 relative z-10">
                To be the most trusted online platform for Quranic education globally, recognized for preserving the authentic chain of transmission (Sanad) and fostering a deep, enduring love for the Book of Allah in the hearts of the next generation.
              </p>
            </StaggerItem>

            <StaggerItem className="bg-card p-10 rounded-2xl shadow-sm border border-card-border relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CrescentStar className="w-32 h-32 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-serif text-primary mb-4 relative z-10">Our Mission</h3>
              <p className="text-foreground/80 relative z-10">
                To provide structured, personalized, and Tajweed-focused Quran classes to students of all ages. We strive to instill discipline, correct pronunciation, and foundational Islamic values through patient, one-on-one instruction.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold font-serif text-primary mb-8">Our Approach to Teaching</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-lg text-primary mb-2">Tajweed-Focused</h4>
                <p className="text-foreground/70 text-sm">Correct pronunciation is not optional; it is the core of our curriculum from day one.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-2">Personalized Pace</h4>
                <p className="text-foreground/70 text-sm">Every student learns differently. We adapt our speed to ensure mastery before moving forward.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg text-primary mb-2">Respectful Environment</h4>
                <p className="text-foreground/70 text-sm">We maintain Adab (etiquette) in our virtual classrooms, treating the Quran with the highest respect.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Credentials Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-primary mb-4">Officially Recognized Excellence</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Our academy is led by educators with verified, formal qualifications from respected national and international Islamic authorities.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <StaggerItem className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-border mb-6 w-full relative group">
                <div className="absolute inset-0 border-2 border-accent/30 rounded-xl m-2 pointer-events-none"></div>
                <img src="/assets/hifz-certificate.png" alt="Hifz Certificate" className="w-full h-auto rounded object-cover" />
              </div>
              <p className="text-center text-sm font-medium text-primary">Certified Ijazah in Hifz-ul-Quran</p>
              <p className="text-center text-xs text-foreground/60 mt-1">Issued by Wafaq ul Madaris Al-Arabia, Pakistan</p>
            </StaggerItem>

            <StaggerItem className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-border mb-6 w-full relative group">
                <div className="absolute inset-0 border-2 border-accent/30 rounded-xl m-2 pointer-events-none"></div>
                <img src="/assets/hec-certificate.png" alt="HEC Certificate" className="w-full h-auto rounded object-cover" />
              </div>
              <p className="text-center text-sm font-medium text-primary">HEC Equivalence Certificate</p>
              <p className="text-center text-xs text-foreground/60 mt-1">Recognizing qualification equivalent to M.A. Arabic/Islamic Studies</p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
