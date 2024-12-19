// src/app/page.js
import Header from '@/components/layout/Header';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main>
      <Header />
      <Services />
      <About />
      <Contact />
    </main>
  );
}