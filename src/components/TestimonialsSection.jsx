// This component should be in ./TestimonialsSection.jsx
import React from 'react';

// Card component - used the global ScrollTrigger staggering effect
const TestimonialCard = ({ feedback, name, company }) => (
    <div className="testimonial-card">
        <div className="rating">⭐⭐⭐⭐⭐</div>
        <p className="feedback-text">"{feedback}"</p>
        <p className="client-info">
            <span className="client-name">{name}</span>, {company}
        </p>
    </div>
);

const TestimonialsSection = ({ className }) => {
    const testimonials = [
        { feedback: 'Amazing UI and fast delivery! Loved working with the team.', name: 'Alice J.', company: 'Startup XYZ' },
        { feedback: 'The web app is incredibly clean and scalable. Truly world-class engineering.', name: 'Ben K.', company: 'Tech Corp' },
        { feedback: 'Our digital marketing saw immediate results after they revamped our strategy.', name: 'Clara D.', company: 'E-Commerce Retail' },
    ];

    return (
        <section className={`${className} testimonials-section`}>
            <h2 className="testimonials-heading">What Our Clients Say</h2>
            <div className="testimonials-grid">
                {/* These cards will animate via the global ScrollTrigger setup in HomePage.jsx */}
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
        </section>
    );
};
export default TestimonialsSection;