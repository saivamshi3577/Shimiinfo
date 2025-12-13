import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import Header from './Header'; 
import Footer from './Footer'; 

import Project1 from '../assets/icon-web.png';
import Project2 from '../assets/icon-mobile.png';
import Project3 from '../assets/post1.jpg';
import Project4 from '../assets/feature-group.jpg';
import Project5 from '../assets/post5.jpg';
import Project6 from '../assets/post7.jpg';
import Project7 from '../assets/post4.jpg'; 
import Project8 from '../assets/service-hero.jpg'; 
import Project9 from '../assets/digitalmarketing.png'
import CaseStudyFocusImage from '../assets/process-image.jpg'; 

const allProjects = [
  { id: 1, title: 'Enterprise CRM Platform', category: 'Web', tags: ['SaaS', 'React', 'Node.js'], image: Project1, description: 'Developed a robust, scalable CRM to manage sales pipelines and customer relations.' },
  { id: 2, title: 'Fitness Tracker App', category: 'Mobile', tags: ['ReactNative', 'UX/UI', 'Fitness'], image: Project2, description: 'A cross-platform mobile application for tracking workouts and nutrition.' },
  { id: 3, title: 'Global Talent Portal', category: 'HR', tags: ['HR Tech', 'AI Matching', 'GCP'], image: CaseStudyFocusImage, description: 'AI-powered recruitment and talent matching system.' },
  { id: 4, title: 'Data Visualization Dashboard', category: 'Web', tags: ['Analytics', 'D3.js', 'Python'], image: Project4, description: 'Real-time business intelligence dashboard.' },
  { id: 5, title: 'B2B E-Commerce Solution', category: 'Web', tags: ['E-Commerce', 'Next.js', 'Stripe'], image: Project5, description: 'High-performance e-commerce gateway.' },
  { id: 6, title: 'Logistics Optimization Tool', category: 'HR', tags: ['Logistics', 'Automation', 'Cloud'], image: Project6, description: 'Tool to optimize route planning and resources.' },
  { id: 7, title: 'Scale-up Team Placement', category: 'Staffing', tags: ['Direct Hire', 'DevOps', 'Contract-to-Hire'], image: Project7, description: 'Placed a full-stack team for a fintech project.' },
  { id: 8, title: 'Cloud Migration Strategy', category: 'Consulting', tags: ['AWS', 'Strategy', 'Optimization'], image: Project8, description: 'Roadmap for migrating legacy infrastructure to AWS.' },
  { id: 9, title: 'Global SEO and Content Strategy', category: 'Digital Marketing', tags: ['SEO', 'Content', 'Analytics'], image: Project9, description: 'Executed a strategy increasing traffic by 60%.' },
];

const clientTestimonials = [
  "Shimi-Infotech transformed our supply chain management. Highly recommend!",
  "Mobile UX design doubled our adoption rate within weeks.",
  "HR portal reduced manual processing by 40%. Truly expert team!",
  "Staffing team quickly delivered skilled engineers perfectly fit for culture."
];

const caseStudyFocus = {
  title: "Warehouse Transformation Case Study",
  subtitle: "How We Optimized Logistics for a Global Retailer",
  keyResults: [
    { metric: "25%", description: "Faster inventory cycles" },
    { metric: "15%", description: "Fewer operational errors" },
    { metric: "30%", description: "Increased picking efficiency" }
  ],
  details: "We designed a cloud-native WMS integrating AI algorithms for real-time pathfinding, dynamic inventory allocation, and analytics dashboards. The project helped the client reduce operational bottlenecks and achieve measurable efficiency gains across multiple warehouses.",
  image: CaseStudyFocusImage
};

const impactMetrics = [
  { metric: '35%', detail: 'Reduction in operational cost' },
  { metric: '100%', detail: 'Uptime guarantee for all deployments' },
  { metric: '5', detail: 'Star Average user satisfaction score' },
  { metric: '60+', detail: 'Successful project launches last year' },
];

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const categories = ['All', 'Web', 'Mobile', 'HR', 'Staffing', 'Consulting', 'Digital Marketing'];
  const filteredProjects = activeFilter === 'All'
      ? allProjects
      : allProjects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % clientTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="portfolio-page">
      <Header />

      {/* Hero Section */}
      <section className="portfolio-hero-header animate-fade-in-up">
        <div className="container">
          <h1>Our Digital Portfolio</h1>
          <p className="subtitle">Innovation, measurable results, and strategic excellence across Web, Mobile, IT Staffing, Digital Marketing & Consulting.</p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-bar">
        <div className="container">
          <p className="testimonial-text">{clientTestimonials[currentTestimonial]}</p>
        </div>
      </section>

      {/* Project Filter */}
      <section className="project-filter-section">
        <div className="container">
          <div className="filter-buttons">
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

          <div className="project-grid">
            {filteredProjects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="card-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
                <div className="card-content">
                  <span className="project-category">{project.category}</span>
                  <h4>{project.title}</h4>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                  </div>
                </div>
                <div className="card-overlay">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                  {/* <button className="secondary-btn">View Project</button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {/* <section className="case-study-focus-section">
        <div className="container focus-content-wrapper">
          <div className="focus-text">
            <span className="section-subtitle">Case Study Spotlight</span>
            <h2>{caseStudyFocus.title}</h2>
            <h4>{caseStudyFocus.subtitle}</h4>
            <p>{caseStudyFocus.details}</p>
            <div className="case-study-results">
              {caseStudyFocus.keyResults.map((item, idx) => (
                <div key={idx} className="case-study-metric">
                  <span className="metric-value">{item.metric}</span>
                  <span className="metric-desc">{item.description}</span>
                </div>
              ))}
            </div>
            <button className="primary-btn">Read Full Case Study</button>
          </div>
          <div className="focus-image-container">
            <img src={caseStudyFocus.image} alt={caseStudyFocus.title} className="focus-image" />
          </div>
        </div>
      </section> */}

      {/* Impact Metrics */}
      <section className="metrics-section">
        <div className="container">
          <h2 className="section-title">Impact and Results</h2>
          <div className="metrics-grid">
            {impactMetrics.map((item, idx) => (
              <div key={idx} className="metric-card">
                <div className="metric-value">{item.metric}</div>
                <p className="metric-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
