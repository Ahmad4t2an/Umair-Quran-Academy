import { Link } from 'wouter';
import { CrescentStar } from '@/components/ui/IslamicMotifs';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden mt-20">
      <div className="absolute inset-0 pattern-islamic opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block bg-background/10 p-2 rounded-lg w-fit">
              <img src="/assets/logo.png" alt="Umair Quran Academy" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/80 mt-2 font-serif">
              Learn the Quran Online with Certified, Experienced Teachers.
            </p>
            <div className="flex gap-4 mt-2">
              <CrescentStar className="text-accent h-6 w-6" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Pricing', 'Teachers', 'Credentials'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">Courses</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/courses" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Noorani Qaida
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Quran Nazra (Reading)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Hifz-ul-Quran
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Tajweed Rules
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex flex-col">
                <span className="text-accent text-sm font-medium">WhatsApp / Phone</span>
                <a href="https://wa.me/923047634342" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">
                  +92 304 7634342
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-accent text-sm font-medium">Email</span>
                <a href="mailto:umairquranacademy.pk@gmail.com" className="text-primary-foreground/80 hover:text-white transition-colors">
                  umairquranacademy.pk@gmail.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-accent text-sm font-medium">Address</span>
                <span className="text-primary-foreground/80">
                  Bahawalpur, Punjab, Pakistan
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-accent/30 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Umair Quran Academy. All rights reserved.</p>
          <p>Serving families worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
