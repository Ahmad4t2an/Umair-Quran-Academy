import { SEO } from '@/components/SEO';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';

export default function Credentials() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Our Credentials" 
        description="View the official certifications and recognized qualifications of the educators at Umair Quran Academy." 
      />

      <section className="bg-primary pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">Official Credentials</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Transparency and trust through verified qualifications.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="mb-12 text-center max-w-3xl mx-auto">
            <p className="text-lg text-foreground/80 leading-relaxed">
              We believe families have the right to know who is teaching their children. These credentials confirm that our teachers are formally qualified, possessing an unbroken chain of recitation (Sanad) and official academic recognition by Pakistan's national academic authority.
            </p>
          </FadeIn>

          <StaggerContainer className="flex flex-col gap-16">
            <StaggerItem>
              <div className="bg-card rounded-2xl border border-card-border p-6 md:p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="bg-muted p-4 rounded-xl shadow-lg border border-border relative">
                    <div className="absolute inset-0 border-2 border-accent/30 rounded-xl m-2 pointer-events-none"></div>
                    <img 
                      src="/assets/hifz-certificate.png" 
                      alt="Hifz Certificate" 
                      className="w-full h-auto rounded object-cover" 
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-4">Certified Ijazah in Hifz-ul-Quran</h2>
                    <div className="inline-block bg-accent/10 text-accent font-medium px-4 py-1.5 rounded-full mb-6 border border-accent/20">
                      Wafaq ul Madaris Al-Arabia, Pakistan
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      This Ijazah represents the formal permission to teach and transmit the memorization of the Holy Quran. Issued by Wafaq ul Madaris Al-Arabia, the largest federation of Islamic seminaries in Pakistan, it guarantees the teacher's memorization is flawless and linked to traditional scholarly standards.
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-card rounded-2xl border border-card-border p-6 md:p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary mb-4">HEC Equivalence Certificate</h2>
                    <div className="inline-block bg-accent/10 text-accent font-medium px-4 py-1.5 rounded-full mb-6 border border-accent/20">
                      Higher Education Commission, Pakistan
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      The Higher Education Commission (HEC) is the national academic authority in Pakistan. This certificate officially equates our teachers' specialized Islamic qualifications to a Master of Arts (M.A.) in Arabic and Islamic Studies, validating their academic rigor on a state level.
                    </p>
                  </div>
                  <div className="bg-muted p-4 rounded-xl shadow-lg border border-border relative order-1 md:order-2">
                    <div className="absolute inset-0 border-2 border-accent/30 rounded-xl m-2 pointer-events-none"></div>
                    <img 
                      src="/assets/hec-certificate.png" 
                      alt="HEC Certificate" 
                      className="w-full h-auto rounded object-cover" 
                    />
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
