// src/app/layout.js
import Navbar from '@/components/layout/Navbar';
import '@/styles/globals.css';

export const metadata = {
  title: 'Diyetisyen Web Sitesi',
  description: 'Profesyonel diyetisyen hizmetleri',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}