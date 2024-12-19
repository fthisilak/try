// src/app/blog/page.js
import { getAllBlogPosts } from '@/utils/getBlogPosts';
import Link from 'next/link';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="blog-section">
      <div className="container">
        <h1>Blog Yazıları</h1>
        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card">
              {post.featuredImage && (
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="blog-card-image"
                />
              )}
              <div className="blog-card-content">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <div className="blog-card-meta">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.tags && post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <Link href={`/blog/${post.id}`} className="btn">
                  Devamını Oku
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}