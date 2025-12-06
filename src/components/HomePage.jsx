import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// Import separated components
import Header from './Header'; 
import Footer from './Footer'; 
import FacebookIcon from "../assets/social/fb.png";
import InstagramIcon from "../assets/social/insta.png";
import TwitterIcon from "../assets/social/x.png";
import LinkedinIcon from "../assets/social/in.png";

// --------------------------------------------------------
// 1. IMAGE IMPORTS (Assuming assets are in 'src/assets/')
// --------------------------------------------------------
import HeroMainImage from '../assets/hero-main.jpg';
import FeatureGroupImage from '../assets/feature-group.jpg';
import ApproachTeamImage from '../assets/approach-team.jpg';



// Blog Post Images
import Blog1 from '../assets/blog-1.jpg';
import Blog2 from '../assets/blog-2.jpg';
import Blog3 from '../assets/blog-3.jpg';

// --------------------------------------------------------
// 2. DATA ARRAYS
// --------------------------------------------------------

const services = [
  {
    icon: '💡', 
    title: 'Design-Led Innovation',
    description: 'We blend design thinking with agile development to create impactful solutions.',
    backContent: 'Our design thinking workshops help you identify user needs and pivot quickly. We deliver MVPs in record time.',
  },
  {
    icon: '⚙️', 
    title: 'Technology Implementation',
    description: 'Leveraging cutting-edge technologies to build scalable and robust products.',
    backContent: 'From cloud architecture to custom API development, we build robust backend systems that scale with your business.',
  },
  {
    icon: '📈', 
    title: 'Data-Driven Strategy',
    description: 'Using analytics and research to inform decisions and accelerate growth.',
    backContent: 'Harness the power of big data and machine learning to predict trends and personalize user experiences.',
  },
  {
    icon: '🔗', 
    title: 'System Integration',
    description: 'Seamlessly connecting disparate systems to optimize business processes.',
    backContent: 'We specialize in integrating legacy systems with modern platforms to ensure seamless data flow and process automation.',
  },
  // --- NEW SERVICES ADDED HERE ---
  {
    icon: '💼', 
    title: 'IT Consulting',
    description: 'Strategic guidance to optimize your IT infrastructure and drive digital transformation.',
    backContent: 'Our expert consultants provide tailored roadmaps, technology assessments, and cloud migration strategies to maximize efficiency.',
  },
  {
    icon: '👥', 
    title: 'IT Staffing',
    description: 'Connecting you with top-tier technical talent for short-term projects or long-term roles.',
    backContent: 'Rapidly scale your team with pre-vetted engineers, developers, and IT professionals that fit your culture and project needs.',
  },
  // -------------------------------
];

const expertiseData = [
    { title: '4 Years', subtitle: 'of Experience', detail: 'In various industries, delivering top-tier solutions globally.' },
    { title: '98%', subtitle: 'Success Rate', detail: 'Of projects delivered on time and within budget.' },
    { title: '24/7', subtitle: 'Support', detail: 'Our dedicated team is always ready to assist you.' },
    { title: '50+', subtitle: 'Team Members', detail: 'A global network of experts ready for your next project.' },
    { title: '120+', subtitle: 'Clients', detail: 'Satisfied customers ranging from startups to large enterprises.' },
    { title: '100%', subtitle: 'Client Retention', detail: 'Our commitment to excellence ensures long-term partnerships.' },
];





const blogPosts = [
  { title: 'The Future of AI in Design', author: 'Anna B.', date: 'Oct 23, 2024', image: Blog1 },
  { title: 'Agile vs. Waterfall: Which to Choose?', author: 'John Doe', date: 'Oct 15, 2024', image: Blog2 },
  { title: '5 Principles of Good UX', author: 'Jane S.', date: 'Oct 10, 2024', image: Blog3 },
];

const faqData = [
  {
    question: "What types of solutions does Shimi-Infotech specialize in?",
    answer: "We specialize in end-to-end digital solutions, including custom web development, scalable mobile application development (iOS/Android), and robust HR and enterprise software solutions."
  },
  {
    question: "How long does a typical custom software project take?",
    answer: "The timeline varies significantly based on complexity, but a standard MVP (Minimum Viable Product) for a web or mobile app typically ranges from 3 to 6 months after the discovery phase is complete."
  },
  {
    question: "What is your development process?",
    answer: "We follow a highly collaborative Agile methodology, including phases for Discovery (Strategy & UX), Design, Iterative Development, Quality Assurance (QA), Deployment, and post-launch Maintenance & Support."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive ongoing support packages, including bug fixes, security updates, feature enhancements, and system monitoring to ensure long-term stability."
  }
];


// --------------------------------------------------------
// FAQ Component (Local helper component for accordion logic)
// --------------------------------------------------------
const FAQItem = ({ question, answer, index, activeIndex, setActiveIndex }) => {
  const isActive = index === activeIndex;

  const toggleAccordion = () => {
    setActiveIndex(isActive ? null : index);
  };

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
      <button className="faq-question">
        <span className="question-text">{question}</span>
        <span className="toggle-icon">{isActive ? '−' : '+'}</span>
      </button>
      <div className="faq-answer-container">
        <p className="faq-answer">{answer}</p>
      </div>
    </div>
  );
};

// --------------------------------------------------------
// New Animated Text Component
// --------------------------------------------------------
const AnimatedServiceHighlight = () => {
    const highlights = [
        'Web Solutions',
        'HR Solutions',
        'Mobile Apps',
        'IT Consulting', // NEW
        'IT Staffing',   // NEW
    ];
    const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHighlightIndex((prevIndex) => (prevIndex + 1) % highlights.length);
        }, 2000); // Change highlight every 2 seconds

        return () => clearInterval(interval);
    }, [highlights.length]);

    return (
        <div className="quote-highlights">
            {/* The animated service highlight */}
            <span className="animated-highlight-text">
                - {highlights[currentHighlightIndex]}
            </span>
            {/* You might want to show some static ones too, or make the animation cover all */}
            {/* For this example, let's keep one animated */}
        </div>
    );
};


// --------------------------------------------------------
// 3. REACT COMPONENT
// --------------------------------------------------------

const HomePage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);



  return (
    <div className="homepage">
      
      {/* ------------------- 1. HEADER (NAV BAR) ------------------- */}
      <Header />

   
      <section className="hero-section">
        
        {/* Animated Bubble Elements */}
        <div className="hero-bubble bubble-1"></div>
        <div className="hero-bubble bubble-2"></div>
        <div className="hero-bubble bubble-3"></div>
        <div className="hero-bubble bubble-4"></div>

        <div className="container hero-content">
          <div className="hero-left animate-slide-left">
            <span className="hero-pre-title-alt">\ Future-Proof Your Business \</span>
            <h2>Unlock Better Insights For Sustainable Business Growth </h2>
            
            {/* --- NEW SENTENCE ADDED HERE --- */}
            <p className="hero-sub-text">
                Empower your enterprise with scalable technology solutions and strategic IT partnerships designed for the digital era.
            </p>
            {/* --- /NEW SENTENCE --- */}

            <div className="quote-box">
                <p>We deliver comprehensive IT solutions, specializing in:</p>
                {/* Replaced static list with Animated Component */}
                <AnimatedServiceHighlight />
            </div>

            <button className="primary-btn pulse-on-hover">View Our Solutions</button>
          </div>

          <div className="hero-right">
            <img src={HeroMainImage} alt="Professional smiling woman" className="hero-image animate-fade-in" />
          </div>
        </div>
      </section>

      {/* ------------------- 3. SUB-HERO/FEATURE GROUP ------------------- */}
      <section className="sub-hero-section">
        <div className="container sub-hero-group">
          <div className="sub-hero-image">
            <img src={FeatureGroupImage} alt="A diverse group of people collaborating" className="feature-group-image" />
          </div>
          <div className="sub-hero-text">
            <span className="section-subtitle"> \ About us \ </span>
            <h2>One of the  Fastest Way  to  Develop Your Business </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <ul>
              <li>Strategy & Consulting</li>
              <li>Product Design & Delivery</li>
              <li>Digital Transformation</li>
            </ul>
            <button className="secondary-btn bounce-on-hover">Learn More</button>
          </div>
        </div>
      </section>

      {/* ------------------- 4. OUR SERVICES SECTION ------------------- */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card-container" key={index}>
                <div className="service-card-flipper">
                    {/* Front Side */}
                    <div className="service-card card-face card-front">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span className="read-more-link">
                          Hover to Discover &rarr;
                        </span>
                    </div>
                    {/* Back Side */}
                    <div className="service-card card-face card-back">
                        <h3>In Detail: {service.title}</h3>
                        <p>{service.backContent}</p>
                        <a href="#" className="read-more-link back-link">
                          Get a Quote
                        </a>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- 5. OUR APPROACH/PROCESS SECTION ------------------- */}
      <section className="approach-section">
        <div className="container approach-content">
          <div className="approach-text">
            <h2 className="section-subtitle">Our Solution</h2>
            <h2>We Deliver  Exceptional Product  That is Built to Last</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="rating-stars">
              ⭐⭐⭐⭐⭐
            </div>
            <p className="rating-text"> 5.0 Rating  on all our projects from our clients.</p>
            <button className="primary-btn pulse-on-hover">Get Started</button>
          </div>
          <div className="approach-image">
             <img src={ApproachTeamImage} alt="A diverse team collaborating around a table" className="approach-image-img" />
          </div>
        </div>
      </section>

      {/* ------------------- 6. OUR EXPERTISE SECTION ------------------- */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <div className="expertise-grid">
            {expertiseData.map((item, index) => (
                <div className="expertise-card-container" key={index}>
                    <div className="expertise-item expertise-card">
                        <h3> {item.title} </h3>
                        <h4>{item.subtitle}</h4>
                        <p>{item.detail}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>


  
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                activeIndex={activeFaqIndex}
                setActiveIndex={setActiveFaqIndex}
              />
            ))}
          </div>
        </div>
      </section>


     <section className="contact-section">
  <div className="container contact-container">

    <div className="contact-form-wrapper">
      <h2>Hey! Let's Talk</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Tell us about your project..." rows="4" required></textarea>
        <button type="submit" className="primary-btn pulse-on-hover">
          Send Message
        </button>
      </form>
    </div>

    <div className="contact-info-wrapper">
      <h3>Contact Information</h3>

      <div className="info-item">
        <span className="info-icon"><FaMapMarkerAlt /></span>
        <p>776-778 Barking Road London E13 9PJ</p>
      </div>

      <div className="info-item">
        <span className="info-icon"><FaPhoneAlt /></span>
        <p>+44-208 637 3036</p>
      </div>

      <div className="info-item">
        <span className="info-icon"><FaEnvelope /></span>
        <p>contact@shimi-infotech.com</p>
      </div>

      <div className="social-links">
        <a href="#">
          <img src={FacebookIcon} alt="Facebook" />
        </a>
        <a href="#">
          <img src={InstagramIcon} alt="Instagram" />
        </a>
        <a href="#">
          <img src={TwitterIcon} alt="Twitter" />
        </a>
        <a href="#">
          <img src={LinkedinIcon} alt="LinkedIn" />
        </a>
      </div>

    </div>
    
  </div>
</section>


      {/* ------------------- 11. LATEST BLOG SECTION ------------------- */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">Latest Blog</h2>
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div className="blog-card blog-card-animated" key={index}>
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={`Blog Post: ${post.title}`} className="blog-image" />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="author">{post.author}</span>
                    <span className="date">{post.date}</span>
                  </div>
                  <h4>{post.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- 12. CTA BANNER ------------------- */}
      <section className="cta-banner">
        <div className="container cta-content">
          <h2>Ready to Start Your  Next Project ?</h2>
          <p>Talk to our experts today and turn your vision into reality.</p>
          <button className="primary-btn dark-btn bounce-on-hover">Schedule a Call</button>
        </div>
      </section>

      {/* ------------------- 13. FOOTER ------------------- */}
      <Footer />
    </div>
  );
};

export default HomePage;