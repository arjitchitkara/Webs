// src/components/Services.tsx
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

const servicesList = [
  {
    id: 1,
    title: "Architecture & Landscape",
    description:
      "Context-sensitive design marrying modern elegance with Himalayan vernacular.",
    icon: "🏢",
    details:
      "Our team crafts buildings that respect their setting in the Himalayas, balancing cutting-edge form with regional materials and techniques."
  },
  {
    id: 2,
    title: "Structural Engineering",
    description:
      "Zone-IV earthquake-resistant detailing, fully NBC-2016 compliant.",
    icon: "📐",
    details:
      "We engineer for safety and longevity, using best-in-class analysis and detailing to exceed national seismic codes."
  },
  {
    id: 3,
    title: "Valuation & Advisory",
    description:
      "Income-Tax approved valuations and turnkey feasibility for banks & PPP hubs.",
    icon: "💰",
    details:
      "Certified valuers with deep market insight ensure you have the data and reports you need for investment, lending, or legal proceedings."
  },
  {
    id: 4,
    title: "Interior Design",
    description:
      "Stylish and functional interior designs that maximize space and reflect your unique preferences.",
    icon: "🪑",
    details:
      "Our interior design services transform indoor spaces to maximize functionality, aesthetic appeal, and user experience. From space planning and material selection to furniture and lighting design, we create interior environments that inspire and delight."
  },
  {
    id: 5,
    title: "Site Supervision",
    description:
      "Dedicated on-site supervision ensuring construction quality and safety.",
    icon: "👷‍♂️",
    details:
      "Our site supervision services ensure every phase of construction is executed to the highest standards. We coordinate trades, enforce safety protocols, and perform quality checks to keep your project on track and within specification."
  },
  {
  id: 6,
  title: "Project Feasibility & Planning",
  description:
    "Assessing project viability, budgeting, approvals, and phasing before construction begins.",
  icon: "📝",
  details:
    "We guide you from idea to implementation—through site analysis, regulatory checks, cost planning, and timeline structuring. Our feasibility services help you make informed decisions with full clarity before you build."
}
];

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={`bg-construction-muted p-8 rounded-lg 
                      border border-white/20 transition-all duration-500 
                      cursor-grow hover:border-white/30 transform 
                      ${isHovered ? '-translate-y-1' : 'translate-y-0'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            opacity: 100,
            animation: 'fade-in 0.5s ease-out forwards',
            animationDelay: `${index * 150}ms`
          }}
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="heading-md mb-2 text-white">{service.title}</h3>
          <p className="text-gray-400 mb-4">{service.description}</p>
          <div className="inline-flex items-center text-white font-medium group">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-construction-muted border border-white/20 text-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {service.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 text-gray-300">{service.details}</div>
      </DialogContent>
    </Dialog>
  );
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-construction-dark relative">
      {/* subtle overlay so cards pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/[0.15] to-black/0" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="heading-lg text-white">Services</h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
