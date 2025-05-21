
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Robert Thompson",
    company: "Thompson Real Estate Group",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    text: "Working with this construction team was an absolute pleasure. Their attention to detail and commitment to quality exceeded our expectations. Our commercial property was completed on time and within budget.",
    rating: 5
  },
  {
    id: 2,
    name: "Emma Chen",
    company: "Chen Properties Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    text: "The architectural designs were innovative and practical. The team was responsive to our feedback and made adjustments quickly. Our residential development has received numerous compliments because of their work.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Johnson",
    company: "Johnson & Partners LLC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    text: "From concept to completion, the team demonstrated professionalism and expertise. Their engineering solutions for our complex project were ingenious, saving us both time and resources.",
    rating: 4
  },
  {
    id: 4,
    name: "Sophia Williams",
    company: "Williams Healthcare Services",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150",
    text: "The landscape architects transformed our hospital grounds into a healing garden that patients and staff love. Their understanding of how outdoor spaces affect wellbeing was impressive.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section id="testimonials" className="section-padding bg-construction-muted relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-construction-accent opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-construction-accent opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Client <span className="text-construction-accent">Testimonials</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's what our clients have to say about our services and expertise
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-construction-dark p-8 md:p-10 rounded-lg border border-construction-border">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < testimonial.rating ? 'fill-construction-accent text-construction-accent' : 'text-gray-500'
                          }`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl font-light italic text-gray-300 mb-6">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-10 gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-construction-border flex items-center justify-center hover:border-construction-accent hover:text-construction-accent transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-construction-border flex items-center justify-center hover:border-construction-accent hover:text-construction-accent transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeIndex === index 
                    ? 'bg-construction-accent w-6' 
                    : 'bg-construction-border'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
