import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/ScrollToTop';

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col relative bg-background text-foreground overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-1 w-full relative">{children}</main>
      <Footer />
    </div>
  );
}
