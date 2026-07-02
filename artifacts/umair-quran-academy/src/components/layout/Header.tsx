import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/teachers', label: 'Teachers' },
  { href: '/credentials', label: 'Credentials' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
          : ''
      }`}
      style={{ backgroundColor: '#133F2D' }}
    >
      {/* Subtle geometric pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 pattern-islamic" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/assets/logo-green.png"
              alt="Umair Quran Academy"
              className="h-14 w-auto object-contain"
              style={{  }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location === link.href
                    ? 'text-[#C9A227]'
                    : 'text-white/85 hover:text-[#C9A227]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/923047634342"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200"
              style={{
                backgroundColor: '#C9A227',
                color: '#0E4B3A',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#b8911f')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#C9A227')}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#0e3324' }}
      >
        <div className="container mx-auto px-4 pb-6 pt-2 flex flex-col gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 px-3 rounded-md text-base font-medium transition-colors ${
                location === link.href
                  ? 'text-[#C9A227] bg-white/5'
                  : 'text-white/80 hover:text-[#C9A227] hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/923047634342"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 py-3 px-4 rounded-md text-sm font-semibold text-center transition-colors"
            style={{ backgroundColor: '#C9A227', color: '#0E4B3A' }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  );
}
