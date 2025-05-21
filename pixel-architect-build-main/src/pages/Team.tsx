
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamMembers from '../components/TeamMembers';

const TeamPage = () => {
  useEffect(() => {
    document.title = "Our Team - Chitkara Constructions";
  }, []);

  return (
    <div className="min-h-screen bg-construction-dark">
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 relative">
        <div className="noise-bg"></div>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-xl text-white mb-8">Our <span className="text-construction-accent">Team</span></h1>
            <p className="text-gray-300 text-lg">
              Meet the talented professionals behind Chitkara Constructions
            </p>
          </div>
        </div>
      </section>
      
      <TeamMembers />
      
      <Footer />
    </div>
  );
};

export default TeamPage;
