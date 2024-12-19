// src/app/blog/[slug]/page.js
import { getBlogPost, getAllBlogPosts } from '@/utils/getBlogPosts';
import { marked } from 'marked';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);
  const htmlContent = marked(post.content);

  return (
    <div className="blog-post">
      {post.featuredImage && (
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="blog-post-image"
        />
      )}
      <h1>{post.title}</h1>
      <div className="blog-post-meta">
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
      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}