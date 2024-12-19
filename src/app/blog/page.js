// src/app/blog/page.js
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="container">
      <h1>Blog Yazıları</h1>
      <div className="blog-grid">
        <article className="blog-card">
          <div className="blog-card-content">
            <h2>Hoş Geldiniz</h2>
            <p>Blog yazıları yakında burada olacak.</p>
          </div>
        </article>
      </div>
    </div>
  );
}