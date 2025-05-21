import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { 
  Dialog, 
  DialogContent,
  DialogDescription, 
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

const servicesList = [
  {
    id: 1,
    title: "Architectural Design",
    description: "Innovative and functional architectural designs tailored to your specific needs and requirements.",
    icon: "🏢",
    details: "Our architectural design services encompass everything from conceptual sketches to detailed construction drawings. We blend artistic vision with technical expertise to create spaces that are not only aesthetically pleasing but also functional and sustainable."
  },
  {
    id: 2,
    title: "Engineering Consultation",
    description: "Expert engineering solutions for structural, civil, mechanical, and electrical systems.",
    icon: "📐",
    details: "Our engineering consultation services provide comprehensive solutions for complex technical challenges. With expertise in structural, civil, mechanical, and electrical engineering, we ensure that every aspect of your project is built on sound technical principles."
  },
  {
    id: 3,
    title: "Construction Management",
    description: "Comprehensive management of construction projects from inception to completion.",
    icon: "🔨",
    details: "Our construction management services ensure that your project is delivered on time, within budget, and to the highest quality standards. We coordinate all aspects of the construction process, from scheduling and procurement to quality control and site safety."
  },
  {
    id: 4,
    title: "Property Valuation",
    description: "Accurate property valuation services by certified valuers with extensive market knowledge.",
    icon: "💰",
    details: "Our certified property valuers provide accurate and reliable valuations based on extensive market knowledge and analytical expertise. Whether for investment, insurance, or legal purposes, our valuations give you confidence in your property decisions."
  },
  {
    id: 5,
    title: "Landscape Architecture",
    description: "Creating beautiful and sustainable outdoor spaces that enhance the built environment.",
    icon: "🌳",
    details: "Our landscape architecture services create harmonious connections between buildings and their surroundings. We design outdoor spaces that are not only beautiful but also sustainable, functional, and aligned with the overall architectural vision of the project."
  },
  {
    id: 6,
    title: "Interior Design",
    description: "Stylish and functional interior designs that maximize space and reflect your unique preferences.",
    icon: "🪑",
    details: "Our interior design services transform indoor spaces to maximize functionality, aesthetic appeal, and user experience. From space planning and material selection to furniture and lighting design, we create interior environments that inspire and delight."
  },
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div 
          className={`bg-construction-muted p-8 rounded-lg border border-white/10 transition-all duration-500 cursor-grow
                     hover:border-white/30 transform ${isHovered ? 'translate-y-[-5px]' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            opacity: 0,
            animation: 'fade-in 0.5s ease-out forwards',
            animationDelay: `${index * 100}ms`
          }}
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="heading-sm mb-3 text-white">{service.title}</h3>
          <p className="text-gray-400 mb-6">{service.description}</p>
          <div className="inline-flex items-center text-white hover:underline group">
            Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-construction-muted border-white/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-display">{service.title}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-gray-300">{service.details}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-construction-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-construction-dark/0 via-white/[0.02] to-construction-dark/0"></div>
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our <span className="text-white">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a comprehensive range of services to meet all your construction and architectural needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/services" className="btn-outline inline-flex items-center group">
            View All Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
