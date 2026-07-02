import { SEO } from '@/components/SEO';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { ArchMotif } from '@/components/ui/IslamicMotifs';
import { Clock, Globe2 } from 'lucide-react';
import PageBanner from '@/components/PageBanner';

const TEACHERS = [
  {
    name: "Teacher Umair",
    role: "Senior Male Teacher",
    qualifications: "Hafiz-e-Quran • Ijazah in Hifz-ul-Quran",
    experience: "7+ years experience",
    description: "Teacher Umair is a dedicated educator specializing in Noorani Qaida, Nazra, and Hifz. With a patient and structured teaching style, he maintains a strong focus on Tajweed. He has successfully guided numerous students across the USA, Australia, and internationally, adapting seamlessly to family timezones.",
  },
  {
    name: "Mam Fatima",
    role: "Senior Female Teacher",
    qualifications: "Specialist in Noorani Qaida & Tajweed",
    experience: "7+ years experience",
    description: "Mam Fatima specializes in teaching children and women. She is known for her gentle, encouraging approach. Fluent in explaining complex Tajweed rules simply, she is exceptionally skilled at working with non-Arabic-speaking overseas families to build strong foundational reading skills.",
  }
];

export default function Teachers() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Our Teachers" 
        description="Meet the certified, experienced Quran teachers at Umair Quran Academy. Available for families worldwide." 
      />

      <PageBanner title="Our Teachers" subtitle="Qualified, patient, and dedicated to your family's Islamic education." />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TEACHERS.map((teacher, index) => (
              <StaggerItem key={index} className="bg-card rounded-3xl border border-card-border p-8 shadow-sm text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-accent/5 rounded-full blur-2xl pointer-events-none"></div>
                
                {/* SVG Avatar Replacement */}
                <div className="mx-auto w-32 h-32 mb-6 rounded-full bg-secondary/50 border border-secondary flex items-center justify-center relative shadow-inner">
                  <ArchMotif className="w-16 h-16 text-primary absolute" />
                </div>
                
                <h2 className="text-2xl font-bold font-serif text-primary mb-1">{teacher.name}</h2>
                <p className="text-accent font-medium text-sm tracking-wide uppercase mb-4">{teacher.role}</p>
                
                <div className="flex flex-col gap-2 mb-6 text-sm text-foreground/70">
                  <span className="inline-block bg-muted px-3 py-1 rounded-full w-fit mx-auto">{teacher.qualifications}</span>
                  <span className="inline-block bg-muted px-3 py-1 rounded-full w-fit mx-auto">{teacher.experience}</span>
                </div>
                
                <p className="text-foreground/80 leading-relaxed text-left">
                  {teacher.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.4} className="mt-16 bg-secondary/30 rounded-2xl p-8 border border-secondary text-center max-w-3xl mx-auto">
            <h3 className="font-serif text-xl text-primary font-bold mb-4">Global Reach & Scheduling</h3>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              Both our teachers have successfully helped families across the USA, Australia, Europe, and worldwide. Standard scheduling includes 4 classes per week with Saturdays and Sundays off. Class timings are set according to the student's local timezone at the time of enrollment.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-primary font-medium">
                <Globe2 className="w-5 h-5 text-accent" />
                USA & Australia Timezones
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <Clock className="w-5 h-5 text-accent" />
                4 Days / Week (Mon-Fri)
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
