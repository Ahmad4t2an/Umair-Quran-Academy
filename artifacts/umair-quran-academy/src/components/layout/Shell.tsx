import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[100dvh] flex-col relative bg-background text-foreground">
      <Header />
      <main className="flex-1 w-full relative">{children}</main>
      <Footer />
    </div>
  );
}
