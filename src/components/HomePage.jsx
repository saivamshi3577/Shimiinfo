import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FaLightbulb, FaCogs, FaChartLine, FaLink,  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn, FaBriefcase,FaStar, FaUsers ,FaLaptopCode, FaSearch, FaMobileAlt, FaCloud } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


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
import { RiH1 } from 'react-icons/ri';

// --------------------------------------------------------
// 2. DATA ARRAYS
// --------------------------------------------------------

const services = [
  {
    // Replaced '💡' (Light Bulb) with FaLightbulb
    icon: <FaLightbulb />, 
    title: 'Design-Led Innovation',
    description: 'We blend design thinking with agile development to create impactful solutions.',
    backContent: 'Our design thinking workshops help you identify user needs and pivot quickly. We deliver MVPs in record time.',
  },
  {
    // Replaced '⚙️' (Gear/Cog) with FaCogs (multiple gears for systems)
    icon: <FaCogs />, 
    title: 'Technology Implementation',
    description: 'Leveraging cutting-edge technologies to build scalable and robust products.',
    backContent: 'From cloud architecture to custom API development, we build robust backend systems that scale with your business.',
  },
  {
    // Replaced '📈' (Chart) with FaChartLine
    icon: <FaChartLine />, 
    title: 'Data-Driven Strategy',
    description: 'Using analytics and research to inform decisions and accelerate growth.',
    backContent: 'Harness the power of big data and machine learning to predict trends and personalize user experiences.',
  },
  {
    // Replaced '🔗' (Link) with FaLink
    icon: <FaLink />, 
    title: 'System Integration',
    description: 'Seamlessly connecting disparate systems to optimize business processes.',
    backContent: 'We specialize in integrating legacy systems with modern platforms to ensure seamless data flow and process automation.',
  },
  {
    // Replaced '💼' (Briefcase) with FaBriefcase (for Consulting/Professional Services)
    icon: <FaBriefcase />, 
    title: 'IT Consulting',
    description: 'Strategic guidance to optimize your IT infrastructure and drive digital transformation.',
    backContent: 'Our expert consultants provide tailored roadmaps, technology assessments, and cloud migration strategies to maximize efficiency.',
  },
  {
    // Replaced '👥' (Group) with FaUsers (for Staffing/People)
    icon: <FaUsers />, 
    title: 'IT Staffing',
    description: 'Connecting you with top-tier technical talent for short-term projects or long-term roles.',
    backContent: 'Rapidly scale your team with pre-vetted engineers, developers, and IT professionals that fit your culture and project needs.',
  },
];

const expertiseData = [
    { title: '5 Years', subtitle: 'of Experience', detail: 'In various industries, delivering top-tier solutions globally.' },
    { title: '100%', subtitle: 'Success Rate', detail: 'Of projects delivered on time and within budget.' },
    { title: '24/7', subtitle: 'Support', detail: 'Our dedicated team is always ready to assist you.' },
    { title: '50+', subtitle: 'Team Members', detail: 'A global network of experts ready for your next project.' },
    { title: '100+', subtitle: 'Clients', detail: 'Satisfied customers ranging from startups to large enterprises.' },
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
    answer: "We specialize in end-to-end digital solutions, including custom web development, scalable mobile application development (iOS/Android), robust HR and enterprise software solutions, as well as  professional Digital Marketing ,IT Staffing and expert IT Consulting services ."
  },
  {
    question: "Do you offer IT staffing services?",
    answer: "Yes. We provide flexible IT staffing solutions, including direct-hire placement, contract-to-hire, and temporary contract staffing for roles like Developers, QA Engineers, Project Managers, and System Administrators, helping businesses quickly scale their technical teams."
  },
  {
    question: "What does your IT Consulting service entail?",
    answer: "Our IT Consulting service provides strategic guidance on technology roadmaps, cloud strategy, digital transformation, security audits, and infrastructure optimization. We help clients align their technology investments with their business goals to maximize efficiency and innovation."
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
// --------------------------------------------------------
// 1. REACT COMPONENT
// --------------------------------------------------------

const AnimatedServiceHighlight = () => {
    // List of services to cycle through
    const highlights = [
        'Web Development', 
        'Mobile Applications',
        'IT  Staffing Services',      
        'IT  Consulting Services',     
        'Enterprise Software',
        'Digital Marketing'
    ];
    const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0);

    useEffect(() => {
        // Cycles the highlight index every 2 seconds (2000ms)
        const interval = setInterval(() => {
            setCurrentHighlightIndex((prevIndex) => (prevIndex + 1) % highlights.length);
        }, 2000); // Highlight changes every 2 seconds

        return () => clearInterval(interval);
    }, [highlights.length]);

    // Key has been removed. The CSS handles the animation timing.
    const animatedService = (
        <span 
            className="animated-service-text fade-animation"
        >
            {highlights[currentHighlightIndex]}
        </span>
    );
    

    // The main sentence structure
    return (
        <div className="animated-sentence-box">
            <h3 className="animated-sentence-p">
                Your partner for digital innovation and IT excellence, specializing in &nbsp; 
                {animatedService} 
                &nbsp; 
            </h3>
            
        </div>
    );
};

// --------------------------------------------------------
// 3. REACT COMPONENT
// --------------------------------------------------------

const HomePage = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

const navigate = useNavigate();

  return (
    <div className="homepage">
      
      {/* ------------------- 1. HEADER (NAV BAR) ------------------- */}
      <Header />

   
   <section className="hero-section">
    
    {/* Animated Bubble Elements */}
    <div className="hero-bubble bubble-1"></div>
   
    <div className="hero-bubble bubble-3"></div>
    <div className="hero-bubble bubble-4"></div>

    <div className="container hero-content">
      <div className="hero-left animate-slide-left">
    <span className="hero-pre-title-alt">\ Future-Proof Your Business \</span>
    <h2>Unlock Better Insights For Sustainable Business Growth</h2>
    
    <p className="hero-sub-text">
        Empower your enterprise with scalable technology solutions and strategic IT partnerships designed for the digital era.
    </p>

    {/* --- NEW VISIONARY QUOTE SECTION --- */}
    <div className="visionary-quote-container">
        <p className="quote-main fade-in-up">
            To build a feature that is <span>visionary yet grounded</span>, 
            <span> futuristic yet timeless</span>, and 
            <span> global yet profoundly human</span>.
        </p>
        <div className="quote-manifesto">
            <span className="manifesto-line delay-1">The world is shifting</span>
            <span className="manifesto-line delay-2">the future is unfolding</span>
            <span className="manifesto-line delay-3">and we are not waiting for it</span>
            <span className="manifesto-line highlight delay-4">we are shaping it.</span>
        </div>
    </div>
    {/* ---------------------------------- */}

    <AnimatedServiceHighlight />

    <button
  className="primary-btn pulse-on-hover"
  onClick={() => navigate("/services")}
>
  View Our Solutions
</button>

</div>

        <div className="hero-right">
            {/* The image remains in the right column */}
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
             Shimi-Infotech is founded on the belief that digital transformation should be accessible, effective, and perfectly aligned with business goals. We are a team of strategic thinkers, designers, and developers dedicated to delivering robust Web, Mobile, and HR solutions that drive tangible growth..
            </p>
            <ul>
              <li>Strategy & Consulting</li>
              <li>Product Design & Delivery</li>
              <li>Digital Transformation</li>
            </ul>
            <button className="secondary-btn bounce-on-hover" onClick={() => navigate("/about")}>Learn More</button>
          </div>
        </div>
      </section>

      {/* ------------------- 4. OUR SERVICES SECTION ------------------- */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">OUR SERVICES</h2>
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
            <h1 className="section-subtitle">OUR SOLUTIONS</h1>
            <h2>We Deliver  Exceptional Product  That is Built to Last</h2>
            <p>
             We deliver exceptional products and comprehensive solutions. Our focus is on meticulous engineering and uncompromising quality, ensuring every result we provide is reliable, durable, and truly built to last for sustained performance.
            </p>
            <div className="rating-stars">
            {/* Replace the string of emojis with a mapped React Icon */}
         
                <FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" /><FaStar className="star-icon" />
            
        </div>
            <p className="rating-text"> 5.0 Rating  on all our projects from our clients.</p>
            <button className="primary-btn pulse-on-hover" onClick={() => navigate("/services")}>Get Started</button>
          </div>
          <div className="approach-image">
             <img src={ApproachTeamImage} alt="A diverse team collaborating around a table" className="approach-image-img" />
          </div>
        </div>
      </section>

      {/* ------------------- 6. OUR EXPERTISE SECTION ------------------- */}
      <section className="expertise-section">
        <div className="container">
          <h2 className="section-title">OUR EXPERTISE</h2>
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

    {/* ================= FORM ================= */}
    <div className="contact-form-wrapper animate-fade-up">
      <span className="contact-badge">Get In Touch</span>
      <h2>Let’s Build Something <span>Great</span> Together</h2>
      <p className="contact-subtitle">
        Tell us about your idea and we’ll turn it into a powerful digital solution.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Tell us about your project..." rows="4" required />
        <button type="submit" className="primary-btn pulse-on-hover">
          Send Message
        </button>
      </form>
    </div>

    {/* ================= INFO ================= */}
    <div className="contact-info-wrapper animate-slide-right">
      <h3>Contact Information</h3>

      <div className="info-item">
        <span className="info-icon"><FaMapMarkerAlt /></span>
        <p>776-778 Barking Road, London E13 9PJ</p>
      </div>

      <div className="info-item">
        <span className="info-icon"><FaPhoneAlt /></span>
        <p>+44-208 637 3036</p>
      </div>

      <div className="info-item">
        <span className="info-icon"><FaEnvelope /></span>
        <p>contact@shimi-infotech.com</p>
      </div>

      {/* SOCIAL ICONS */}
      <div className="social-links">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
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
{/*       <section className="cta-banner">
        <div className="container cta-content">
          <h2>Ready to Start Your  Next Project ?</h2>
          <p>Talk to our experts today and turn your vision into reality.</p>
          <button className="primary-btn dark-btn bounce-on-hover">Schedule a Call</button>
        </div>
      </section> */}

      {/* ------------------- 13. FOOTER ------------------- */}
      <Footer />
    </div>
  );
};

export default HomePage;