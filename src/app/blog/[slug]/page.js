// src/app/blog/[slug]/page.js
import { getBlogPost, getAllBlogPosts } from '@/utils/getBlogPosts';
import { marked } from 'marked';

// Bu fonksiyon Next.js için gerekli
export async function generateStaticParams() {
  try {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
      slug: post.id,
    }));
  } catch (error) {
    // Eğer henüz blog yazısı yoksa boş array döndür
    return [];
  }
}

export default function BlogPost({ params }) {
  try {
    const post = getBlogPost(params.slug);
    const htmlContent = marked(post.content);

    return (
      <div className="container">
        <article className="blog-post">
          {post.featuredImage && (
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="blog-post-image"
            />
          )}
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <time>{new Date(post.date).toLocaleDateString('tr-TR')}</time>
            {post.tags && post.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </div>
    );
  } catch (error) {
    return <div>Blog yazısı bulunamadı</div>;
  }
}