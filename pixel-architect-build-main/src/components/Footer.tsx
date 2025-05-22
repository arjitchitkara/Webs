import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-dark border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Logo variant="footer" />
            <p className="text-gray-400 mt-6">
              Premium construction company with architects, engineers, draughtsmen,
              valuers, and landscape architects providing top-quality construction services.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home','About','Services','Projects','Team','Contact'].map((name) => (
                <li key={name}>
                  <Link
                    to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {[
                'Architectural Design',
                'Engineering Consultation',
                'Construction Management',
                'Property Valuation',
                'Interior Design',
                'Site Supervision'
              ].map((svc) => (
                <li key={svc}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                    {svc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block">123 Construction Avenue</span>
                <span className="block">Business District</span>
                <span className="block">New York, NY 10001</span>
              </li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@chitkaraconstructions.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-construction-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Chitkara Constructions. All rights reserved.
          </div>
          <div className="flex space-x-4">
            {/* social icons... */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
