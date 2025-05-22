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

/* -------------------------------------------------
   1)  list every picture in /public/images/services
       (or move them and change the glob below)
   ------------------------------------------------- */
const allServicePics = [
  
  '/images/arch.jpg',
  '/images/structure.jpg',
  '/images/valuation.jpg',
  '/images/interior.jpg',
  '/images/shimla-1.jpg',
  '/images/shimla-2.jpg'
];

/* ------------------------------------------------- */
const servicesList = [
  {
    id: 1,
    title: 'Architecture & Landscape',
    description:
      'Context-sensitive design marrying modern elegance with Himalayan vernacular.',
    icon: '🏢',
    // bg is OPTIONAL – if you omit it we’ll pick a random one
    bg: '/images/arch.jpg',
    details:
      'Our team crafts buildings that respect their setting in the Himalayas, balancing cutting-edge form with regional materials and techniques.'
  },
  {
    id: 2,
    title: 'Structural Engineering',
    description:
      'Zone-IV earthquake-resistant detailing, fully NBC-2016 compliant.',
    icon: '📐',
    details:
      'We engineer for safety and longevity, using best-in-class analysis and detailing to exceed national seismic codes.'
  },
  {
    id: 3,
    title: 'Valuation & Advisory',
    description:
      'Income-Tax approved valuations and turnkey feasibility for banks & PPP hubs.',
    icon: '💰',
    details:
      'Certified valuers with deep market insight ensure you have the data and reports you need for investment, lending, or legal proceedings.'
  },
  {
    id: 4,
    title: 'Interior Design',
    description:
      'Stylish and functional interiors that maximise space and reflect your unique preferences.',
    icon: '🪑',
    details:
      'From space planning and material selection to lighting design, we create interior environments that inspire and delight.'
  },
  {
    id: 5,
    title: 'Site Supervision',
    description:
      'Dedicated on-site supervision ensuring construction quality and safety.',
    icon: '👷‍♂️',
    details:
      'We coordinate trades, enforce safety protocols, and perform quality checks to keep your project on track and within specification.'
  },
  {
    id: 6,
    title: 'Project Feasibility & Planning',
    description:
      'Assessing viability, budgeting, approvals, and phasing before construction begins.',
    icon: '📝',
    details:
      'We guide you from idea to implementation through site analysis, regulatory checks, cost planning, and realistic scheduling.'
  }
];

/* ─────────────────────────────────────────────── */

function ServiceCard({
  service,
  index
}: {
  service: (typeof servicesList)[0];
  index: number;
}) {
  const [hover, setHover] = useState(false);

  /* pick a photo – explicit one if supplied, otherwise a pseudo-random one */
  const bgPhoto =
    service.bg ?? allServicePics[index % allServicePics.length];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundImage: `url(${bgPhoto})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          className={`relative overflow-hidden rounded-xl p-8
                      border border-white/20 cursor-pointer
                      transition-all duration-500
                      ${hover ? '-translate-y-1 shadow-lg' : ''}
                      before:absolute before:inset-0 before:bg-black/60
                      before:transition-opacity
                      ${hover ? 'before:opacity-40' : 'before:opacity-60'}`}
        >
          <div className="relative z-10 space-y-4 text-white">
            <div className="text-4xl">{service.icon}</div>
            <h3 className="font-semibold text-lg leading-snug">
              {service.title}
            </h3>
            <p className="text-sm text-gray-300">{service.description}</p>

            <span className="inline-flex items-center font-medium">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="bg-construction-muted border border-white/20 rounded-lg text-white backdrop-blur">
        <DialogHeader>
          <DialogTitle>{service.title}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {service.description}
          </DialogDescription>
        </DialogHeader>
        <p className="mt-4 text-gray-300">{service.details}</p>
      </DialogContent>
    </Dialog>
  );
}

/* ─────────────────────────────────────────────── */

export default function Services() {
  return (
    <section id="services" className="section-padding bg-construction-dark relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/0" />

      <div className="container-custom relative z-10">
        <h2 className="heading-lg text-center text-white mb-12">Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((svc, i) => (
            <ServiceCard key={svc.id} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
