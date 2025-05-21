
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300",
    description: "With over 15 years of experience, Sarah leads our architectural design team with innovative approaches to sustainable design."
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Chief Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300",
    description: "Michael specializes in structural engineering with expertise in designing resilient structures for challenging environments."
  },
  {
    id: 3,
    name: "Jennifer Lee",
    role: "Landscape Architect",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300",
    description: "Jennifer creates beautiful outdoor spaces that complement architectural designs while prioritizing sustainability."
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Senior Draughtsman",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&h=300",
    description: "David's attention to detail and technical expertise brings architectural concepts to life through precise technical drawings."
  }
];

const TeamMembers = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="section-padding bg-construction-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our <span className="text-construction-accent">Team</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our team of experienced professionals dedicated to bringing your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-construction-muted rounded-lg overflow-hidden border border-construction-border group cursor-grow"
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-construction-dark to-transparent opacity-80`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-construction-accent font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-construction-accent text-sm hover:underline"
                >
                  View profile <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="/team" className="btn-outline inline-flex items-center">
            Meet The Entire Team <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
