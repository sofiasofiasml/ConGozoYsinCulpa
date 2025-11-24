import { Calendar, Tag, User, ArrowRight } from 'lucide-react';
import './Blog.css';

interface BlogPost {
    id: number;
    title: string;
    date: string;
    author: string;
    categories: string[];
    tags: string[];
    excerpt: string;
    image: string;
    likes: number;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Sesión Desbloqueo Sexualidad y Tantra',
        date: '20 Feb 2024',
        author: 'Monica H. Rosety',
        categories: ['Desbloqueo Sexualidad', 'Tantra', 'TNDR'],
        tags: ['bloqueo', 'chakras', 'desbloqueo', 'desbloqueo sexualidad', 'masaje', 'masaje tántrico', 'respiración', 'sexualidad', 'tantra', 'terapia tántrica'],
        excerpt: 'En las sesiones de Desbloqueo que ofrezco en Barcelona y Mataró, toda mi clientela coincide en que el cuerpo se siente aliviado y relajado "por fin me están tocando donde y como lo necesitaba..."',
        image: '/img/blog/sesion-desbloqueo.jpg',
        likes: 1
    }
];

const categories = ['Desbloqueo Sexualidad', 'Tantra', 'TNDR'];

const tags = [
    'bloqueo', 'chakras', 'desbloqueo', 'desbloqueo sexualidad',
    'masaje', 'masaje tántrico', 'respiración', 'sexualidad',
    'tantra', 'terapia tántrica'
];

const Blog = () => {
    return (
        <div className="page-container blog-page">
            <section className="blog-hero">
                <h1>Blog</h1>
                <p className="blog-subtitle">
                    Artículos sobre desbloqueo, sexualidad, tantra y bienestar
                </p>
            </section>

            <div className="blog-layout">
                <main className="blog-main">
                    <div className="blog-posts">
                        {blogPosts.map((post) => (
                            <article key={post.id} className="blog-post-card">
                                <div className="post-image">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        onError={(e) => {
                                            e.currentTarget.src = '/img/monicahrosety.jpg';
                                        }}
                                    />
                                    <div className="post-date-badge">
                                        <Calendar size={16} />
                                        <span>{post.date}</span>
                                    </div>
                                </div>

                                <div className="post-content">
                                    <div className="post-categories">
                                        {post.categories.map((category, index) => (
                                            <span key={index} className="category-badge">
                                                {category}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="post-title">{post.title}</h2>

                                    <div className="post-meta">
                                        <span className="post-author">
                                            <User size={16} />
                                            {post.author}
                                        </span>
                                        <span className="post-likes">
                                            {post.likes} Like{post.likes !== 1 ? 's' : ''}
                                        </span>
                                    </div>

                                    <p className="post-excerpt">{post.excerpt}</p>

                                    <button className="read-more-btn">
                                        Leer más
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {blogPosts.length === 0 && (
                        <div className="no-posts">
                            <p>No hay artículos publicados todavía. ¡Vuelve pronto!</p>
                        </div>
                    )}
                </main>

                <aside className="blog-sidebar">
                    <div className="sidebar-section">
                        <h3>Entradas Recientes</h3>
                        <ul className="recent-posts">
                            {blogPosts.slice(0, 5).map((post) => (
                                <li key={post.id}>
                                    <a href={`#post-${post.id}`}>
                                        <span className="recent-post-title">{post.title}</span>
                                        <span className="recent-post-date">{post.date}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h3>Categorías</h3>
                        <ul className="categories-list">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <a href={`#category-${category}`}>
                                        <Tag size={16} />
                                        {category}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sidebar-section">
                        <h3>Etiquetas</h3>
                        <div className="tags-cloud">
                            {tags.map((tag, index) => (
                                <a key={index} href={`#tag-${tag}`} className="tag-item">
                                    {tag}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="sidebar-section cta-section">
                        <h3>¿Te gustaría una sesión?</h3>
                        <p>Descubre cómo puedo ayudarte a mejorar tu bienestar</p>
                        <a href="/contacto" className="sidebar-cta-btn">
                            Contactar ahora
                        </a>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Blog;
