import React, { useState } from 'react';
import './Blog.css';
import Header from './Header'; 
import Footer from './Footer'; 


import Post1 from '../assets/image333.png';
import Post2 from '../assets/post-react.jpg';
import Post3 from '../assets/post2.jpg';
import Post4 from '../assets/post3.jpg';
import Post5 from '../assets/post4.jpg';
import Post6 from '../assets/post5.jpg';
import Post7 from '../assets/post6.jpg';
import Post8 from '../assets/post7.jpg';


const allBlogPosts = [
    // Featured Post
    { id: 1, title: 'The Rise of Hyper-Automation in Enterprise HR Software', category: 'HR Tech', date: 'Oct 28, 2024', image: Post1, summary: 'How businesses are leveraging automation tools to reduce manual intervention across the value chain, focusing on HR and logistics.', featured: true, author: 'Jane W.' },
    // Grid Posts
    { id: 2, title: 'Mastering React Hooks for State Management', category: 'Web Dev', date: 'Oct 25, 2024', image: Post2, summary: 'A deep dive into common React hooks and patterns for building scalable interfaces.', author: 'Alex V.' },
    { id: 3, title: 'Why Flutter is the Future of Cross-Platform Mobile Apps', category: 'Mobile Dev', date: 'Oct 20, 2024', image: Post3, summary: 'Comparing Flutter\'s performance and development speed against native platforms.', author: 'Mike R.' },
    { id: 4, title: 'Securing Your Cloud Infrastructure: Essential Practices', category: 'Security', date: 'Oct 15, 2024', image: Post4, summary: 'Essential steps for maintaining robust security in AWS and GCP environments.', author: 'Jane W.' },
    { id: 5, title: 'Data Analytics vs. Data Science: Understanding the Difference', category: 'Data & AI', date: 'Oct 10, 2024', image: Post5, summary: 'Clarifying the roles and tools used in data analysis versus advanced machine learning.', author: 'Mike R.' },
    { id: 6, title: 'Modernizing Legacy Systems with Microservices', category: 'Web Dev', date: 'Oct 5, 2024', image: Post6, summary: 'A guide to breaking monolithic applications into manageable, scalable services.', author: 'Alex V.' },
    { id: 7, title: 'Optimizing Workforce Allocation: The IT Staffing Advantage', category: 'IT Staffing', date: 'Sept 30, 2024', image: Post7, summary: 'Exploring strategies for rapid team scaling and optimizing technical hiring processes.', author: 'Jane W.' }, // NEW POST
    { id: 8, title: 'Beyond the Toolset: Crafting a Digital Transformation Roadmap', category: 'IT Consulting', date: 'Sept 25, 2024', image: Post8, summary: 'How strategic IT consultation aligns technology investment with long-term business goals.', author: 'Alex V.' }, // NEW POST
];

const categories = [
    'Web Dev', 
    'Mobile Dev', 
    'HR Tech', 
    'Data & AI', 
    'Security', 
    'Strategy',
    'IT Consulting', // NEW
    'IT Staffing',   // NEW
];

// --------------------------------------------------------
// CORE COMPONENT
// --------------------------------------------------------

const BlogPage = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    
    const featuredPost = allBlogPosts.find(p => p.featured);
    const gridPosts = allBlogPosts.filter(p => !p.featured && (activeFilter === 'All' || p.category === activeFilter));
    const recentPosts = allBlogPosts.slice(0, 4);

    return (
        <div className="blog-page">
            
            <Header /> 
            
            {/* --- 1. Blog Header & Search --- */}
            <section className="blog-hero-header">
                <div className="container">
                    <h1>Our  Insights Hub </h1>
                    <p className="subtitle animate-fade-in-up">The latest in digital transformation, software engineering, and industry strategy from Shimi-Infotech.</p>
                    
                    <div className="search-bar animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <input type="text" placeholder="Search articles, categories, or authors..." />
                        <button className="primary-btn pulse-on-hover">Search</button>
                    </div>
                </div>
            </section>

            {/* --- 2. Featured Post --- */}
            {featuredPost && (
                <section className="featured-post-section">
                    <div className="container">
                        <div className="featured-post-card animate-zoom-in">
                            <div className="post-image-wrapper">
                                <img src={featuredPost.image} alt={featuredPost.title} className="featured-post-image" />
                            </div>
                            <div className="post-content-wrapper">
                                <span className="post-category">{featuredPost.category}</span>
                                <h2>{featuredPost.title}</h2>
                                <p>{featuredPost.summary}</p>
                                <div className="post-meta">
                                    <span>By {featuredPost.author}</span>
                                    <span>{featuredPost.date}</span>
                                </div>
                                <button className="primary-btn bounce-on-hover">Read Article &rarr;</button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* --- 3. Main Grid & Sidebar --- */}
            <section className="blog-main-content">
                <div className="container content-grid-wrapper">
                    
                    {/* A. Post Grid */}
                    <div className="post-grid-area">
                        <h3 className="section-subtitle">Latest Articles</h3>
                        <div className="category-filters">
                            <button
                                className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                                onClick={() => setActiveFilter('All')}
                            >
                                All ({allBlogPosts.length - 1})
                            </button>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        
                        <div className="blog-post-grid">
                            {gridPosts.map((post, index) => (
                                <div 
                                    className="blog-card animate-fade-in-up" 
                                    key={post.id}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="blog-image-wrapper">
                                        <img src={post.image} alt={post.title} className="blog-image" />
                                    </div>
                                    <div className="blog-content">
                                        <span className="post-category">{post.category}</span>
                                        <h4>{post.title}</h4>
                                        <p>{post.summary}</p>
                                        <div className="post-meta">
                                            <span>By {post.author}</span>
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {gridPosts.length === 0 && <p className="no-results">No articles match the current filter.</p>}
                    </div>

                    {/* B. Sidebar */}
{/*                     <div className="blog-sidebar animate-slide-in-right">
                        
                        <div className="sidebar-widget">
                            <h4>Categories</h4>
                            <ul className="category-list">
                              
                                <li onClick={() => setActiveFilter('All')}>
                                    All <span>({allBlogPosts.length - 1})</span>
                                </li>
                                {categories.map(cat => (
                                    <li key={cat} onClick={() => setActiveFilter(cat)}>
                                        {cat} <span>({allBlogPosts.filter(p => p.category === cat).length})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="sidebar-widget">
                           
                        </div>

                        <div className="sidebar-widget newsletter-widget">
                            
                        </div>

                    </div> */}
                </div>
            </section>


            {/* --- 4. Final CTA --- */}
{/*             <section className="cta-banner cta-blog-page">
                <div className="container cta-content">
                    <h2>Got a Topic Idea?</h2>
                    <p>Suggest an article or contribute your expertise to our community.</p>
                    <button className="primary-btn dark-btn pulse-on-hover">Submit Idea</button>
                </div>
            </section> */}

            <Footer />
        </div>
    );
};

export default BlogPage;