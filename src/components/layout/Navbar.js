// src/components/layout/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          Diyetisyen Adı
        </Link>
        <div className="nav-links">
          <Link href="/" className="nav-link">Ana Sayfa</Link>
          <Link href="/about" className="nav-link">Hakkımda</Link>
          <Link href="/services" className="nav-link">Hizmetler</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">İletişim</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
