import { SEO } from '@/components/SEO';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { BookOpen, Book, BookMarked, AlignRight } from 'lucide-react';
import PageBanner from '@/components/PageBanner';

const COURSES = [
  {
    id: "qaida",
    title: "Noorani Qaida",
    icon: BookOpen,
    forWhom: "Children and adults with zero Arabic background.",
    duration: "3–6 months",
    frequency: "4 classes/week (Mon–Fri)",
    description: "The essential foundation for absolute beginners. This course teaches the correct Arabic letter pronunciation (Makharij) and basic Tajweed rules. It is the mandatory stepping stone before beginning to read the Quran.",
    details: [
      "Arabic alphabet recognition",
      "Correct pronunciation of letters (Makharij)",
      "Connecting letters and basic words",
      "Vowel marks (Harakat) and rules of recitation"
    ]
  },
  {
    id: "nazra",
    title: "Quran Nazra (Reading)",
    icon: Book,
    forWhom: "Students who have completed Noorani Qaida or have basic reading ability.",
    duration: "Ongoing",
    frequency: "4 classes/week (Mon–Fri)",
    description: "Learn to read the Holy Quran fluently while applying all Tajweed rules. We practice word-by-word, focusing on eliminating mistakes and building a beautiful, confident recitation.",
    details: [
      "Fluent reading of the entire Quran",
      "Application of Tajweed rules in practice",
      "Pacing and breath control",
      "Pronunciation correction and refinement"
    ]
  },
  {
    id: "hifz",
    title: "Hifz-ul-Quran (Memorization)",
    icon: BookMarked,
    forWhom: "Committed students ready for intensive study.",
    duration: "2-4 years (varies by student)",
    frequency: "4 classes/week (Mon–Fri)",
    description: "A structured memorization program taught by an Ijazah-certified Hafiz. We utilize a traditional, highly effective tripartite revision system to ensure the memorization is retained permanently.",
    details: [
      "Sabaq: New daily memorization lesson",
      "Sabqi: Revision of the recently memorized portion",
      "Manzil: Ongoing revision of older memorized chapters",
      "Strict adherence to Tajweed during memorization"
    ]
  },
  {
    id: "tajweed",
    title: "Tajweed Rules",
    icon: AlignRight,
    forWhom: "Included as a core component in Nazra and Hifz courses.",
    duration: "Integrated",
    frequency: "Integrated into regular classes",
    description: "Tajweed is the science of reading the Quran correctly according to the way it was revealed to Prophet Muhammad (PBUH). We do not treat Tajweed as a separate luxury; it is embedded in all our reading courses.",
    details: [
      "Rules of Noon and Meem Mushaddad",
      "Rules of Noon Sakinah and Tanween",
      "Rules of Meem Sakinah",
      "Madd (Elongation) and Waqf (Stopping) rules"
    ]
  }
];

export default function Courses() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SEO 
        title="Courses & Programs" 
        description="Detailed course offerings including Noorani Qaida, Quran Nazra, Hifz-ul-Quran, and Tajweed." 
      />

      <PageBanner title="Our Programs" subtitle="Structured learning paths for all ages and proficiency levels." />

      <section className="bg-primary pt-0 pb-0 hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">Our Programs</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Structured learning paths for all ages and proficiency levels.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="flex flex-col gap-12">
            {COURSES.map((course, index) => (
              <StaggerItem key={course.id} className="bg-card rounded-2xl border border-card-border overflow-hidden shadow-sm flex flex-col md:flex-row">
                <div className="bg-secondary/30 p-8 md:w-1/3 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-border">
                  <div className="bg-primary p-4 rounded-full mb-4">
                    <course.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold font-serif text-primary mb-2">{course.title}</h2>
                  <div className="text-sm text-foreground/60 space-y-1">
                    <p><strong>Frequency:</strong><br/>{course.frequency}</p>
                    <p className="mt-2"><strong>Duration:</strong><br/>{course.duration}</p>
                  </div>
                </div>
                
                <div className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent mb-1 block">Who is this for?</span>
                      <p className="text-primary font-medium">{course.forWhom}</p>
                    </div>
                    
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <div className="mb-8">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent mb-3 block">What you will learn</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {course.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                            <span className="text-accent mt-0.5">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <Button asChild className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/contact">Enroll Now</Link>
                    </Button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
