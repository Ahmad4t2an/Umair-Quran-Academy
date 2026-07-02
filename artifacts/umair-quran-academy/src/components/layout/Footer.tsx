import { Link } from 'wouter';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-20" style={{ backgroundColor: '#133F2D' }}>
      {/* Islamic pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 pattern-islamic" />

      {/* Gold top border */}
      <div className="w-full h-[3px]" style={{ background: 'linear-gradient(90deg, transparent, #C9A227, transparent)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <img
                src="/assets/logo-green.png"
                alt="Umair Quran Academy"
                className="h-16 w-auto object-contain"
                style={{  }}
              />
            </Link>
            <p className="text-white/70 font-serif text-sm leading-relaxed mt-2">
              Bringing authentic Quranic education to Muslim families in the USA, Australia, and beyond — with certified teachers, flexible timing, and sincere dedication.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61591791351959"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#C9A227]/40 text-[#C9A227]/60 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
              >
                <FaFacebookF size={14} />
              </a>
              <a
                href="https://www.instagram.com/umairquranacademy?igsh=djl2cmRxamR1dnds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#C9A227]/40 text-[#C9A227]/60 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
              >
                <FaInstagram size={14} />
              </a>
              <a
                href="https://www.youtube.com/@umairquranacademy-d2n"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full flex items-center justify-center border border-[#C9A227]/40 text-[#C9A227]/60 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
              >
                <FaYoutube size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5" style={{ color: '#C9A227' }}>Quick Links</h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Courses', href: '/courses' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Teachers', href: '/teachers' },
                { label: 'Credentials', href: '/credentials' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-white/70 hover:text-[#C9A227] transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: '#C9A227' }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5" style={{ color: '#C9A227' }}>Our Courses</h3>
            <ul className="flex flex-col gap-2.5">
              {['Noorani Qaida', 'Quran Nazra (Reading)', 'Hifz-ul-Quran', 'Tajweed Rules'].map(course => (
                <li key={course}>
                  <Link href="/courses" className="text-white/70 hover:text-[#C9A227] transition-colors text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full inline-block flex-shrink-0" style={{ backgroundColor: '#C9A227' }} />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5" style={{ color: '#C9A227' }}>Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#C9A227' }}>WhatsApp / Phone</span>
                <a href="https://wa.me/923047634342" target="_blank" rel="noopener noreferrer" className="block text-sm text-white/80 hover:text-white transition-colors mt-0.5">
                  +92 304 7634342
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#C9A227' }}>Email</span>
                <a href="mailto:umairquranacademy.pk@gmail.com" className="block text-sm text-white/80 hover:text-white transition-colors mt-0.5">
                  umairquranacademy.pk@gmail.com
                </a>
              </li>
              <li>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#C9A227' }}>Address</span>
                <span className="block text-sm text-white/80 mt-0.5">Bahawalpur, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40" style={{ borderTop: '1px solid rgba(201,162,39,0.25)' }}>
          <p>© {new Date().getFullYear()} Umair Quran Academy. All rights reserved.</p>
          <p>Serving Muslim families in USA, Australia & worldwide.</p>
        </div>
      </div>
    </footer>
  );
}