import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

// Decorative mosque dome silhouette SVG
function MosqueSilhouette() {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Minaret left */}
      <rect x="80" y="60" width="28" height="200" fill="#C9A227" rx="4" />
      <ellipse cx="94" cy="60" rx="14" ry="24" fill="#C9A227" />
      <ellipse cx="94" cy="38" rx="6" ry="10" fill="#C9A227" />
      {/* Minaret right */}
      <rect x="1330" y="60" width="28" height="200" fill="#C9A227" rx="4" />
      <ellipse cx="1344" cy="60" rx="14" ry="24" fill="#C9A227" />
      <ellipse cx="1344" cy="38" rx="6" ry="10" fill="#C9A227" />
      {/* Main dome */}
      <ellipse cx="720" cy="180" rx="200" ry="180" fill="#C9A227" />
      {/* Sub domes */}
      <ellipse cx="420" cy="240" rx="100" ry="90" fill="#C9A227" />
      <ellipse cx="1020" cy="240" rx="100" ry="90" fill="#C9A227" />
      {/* Base */}
      <rect x="100" y="256" width="1240" height="70" fill="#C9A227" />
      {/* Arch windows */}
      <path d="M680 220 Q720 170 760 220 L760 260 L680 260 Z" fill="#0E4B3A" />
      <path d="M360 255 Q400 225 440 255 L440 270 L360 270 Z" fill="#0E4B3A" />
      <path d="M1000 255 Q1040 225 1080 255 L1080 270 L1000 270 Z" fill="#0E4B3A" />
    </svg>
  );
}

// Islamic geometric star pattern
function GeometricStar({ size = 80, opacity = 0.12 }: { size?: number; opacity?: number }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ opacity }}>
      <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" fill="#C9A227" />
      <polygon points="50,20 57,40 79,40 63,52 69,72 50,60 31,72 37,52 21,40 43,40" fill="#0E4B3A" />
    </svg>
  );
}

// Arch frame decorative element
function ArchFrame() {
  return (
    <svg viewBox="0 0 200 240" className="absolute opacity-15 pointer-events-none" width="240" height="290" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 230 L20 100 Q20 20 100 20 Q180 20 180 100 L180 230" fill="none" stroke="#C9A227" strokeWidth="3" />
      <path d="M35 230 L35 105 Q35 40 100 40 Q165 40 165 105 L165 230" fill="none" stroke="#C9A227" strokeWidth="1.5" />
      {/* Ornamental details */}
      <circle cx="100" cy="20" r="6" fill="#C9A227" />
      <circle cx="20" cy="100" r="4" fill="#C9A227" />
      <circle cx="180" cy="100" r="4" fill="#C9A227" />
      {/* Top crescent */}
      <path d="M90 8 A12 12 0 1 1 110 8 A8 8 0 1 0 90 8" fill="#C9A227" />
    </svg>
  );
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section
      className="relative pt-28 pb-20 overflow-hidden"
      style={{ backgroundColor: '#0E4B3A' }}
    >
      {/* Islamic geometric pattern texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.07'%3E%3Cpath d='M30 0 L36 12 L48 6 L42 18 L54 24 L42 30 L48 42 L36 36 L30 48 L24 36 L12 42 L18 30 L6 24 L18 18 L12 6 L24 12 Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }} />

      {/* Mosque silhouette */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <MosqueSilhouette />
      </div>

      {/* Decorative arch frames */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none">
        <ArchFrame />
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none scale-x-[-1]">
        <ArchFrame />
      </div>

      {/* Geometric stars scattered */}
      <div className="absolute top-4 left-1/4 pointer-events-none">
        <GeometricStar size={56} opacity={0.15} />
      </div>
      <div className="absolute top-8 right-1/4 pointer-events-none">
        <GeometricStar size={40} opacity={0.10} />
      </div>
      <div className="absolute bottom-4 left-1/3 pointer-events-none">
        <GeometricStar size={48} opacity={0.12} />
      </div>
      <div className="absolute bottom-6 right-1/3 pointer-events-none">
        <GeometricStar size={36} opacity={0.09} />
      </div>

      {/* Gold gradient radial glow behind text */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,162,39,0.12) 0%, transparent 70%)',
      }} />

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-[1px] w-16" style={{ background: 'linear-gradient(90deg, transparent, #C9A227)' }} />
          <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: '#C9A227' }} />
          <div className="h-[1px] w-16" style={{ background: 'linear-gradient(90deg, #C9A227, transparent)' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4"
          style={{ color: '#FFFFFF', textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'rgba(201,162,39,0.9)' }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative bottom ornament */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mt-6"
        >
          <div className="h-[1px] w-20" style={{ background: 'linear-gradient(90deg, transparent, #C9A227)' }} />
          <svg viewBox="0 0 24 24" width="20" height="20" fill="#C9A227" style={{ opacity: 0.8 }}>
            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
          </svg>
          <div className="h-[1px] w-20" style={{ background: 'linear-gradient(90deg, #C9A227, transparent)' }} />
        </motion.div>
      </div>

      {/* Bottom gradient fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, transparent, #FBF8F1)',
      }} />
    </section>
  );
}
