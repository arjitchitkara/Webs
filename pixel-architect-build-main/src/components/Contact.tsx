/*  src/components/Contact.tsx  */
import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const COMPANY_PHONE = '+91 9816031144';
const COMPANY_MAIL  = 'chitkarashimla@gmail.com';

export default function Contact() {
  /* ----------------------- form state ----------------------- */
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  /* open mail client with all fields pre-filled */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const qs = new URLSearchParams({
      subject: formData.subject || 'Website enquiry',
      body:
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n${formData.message}`
    }).toString();

    window.location.href = `mailto:${COMPANY_MAIL}?${qs}`;
  };

  /* shorthand for every input style */
  const baseInput =
    'w-full p-3 bg-construction-dark border border-construction-border rounded-md ' +
    'focus:outline-none focus:border-construction-accent text-white';

  return (
    <section id="contact" className="section-padding bg-construction-dark">
      <div className="container-custom">

        {/* heading --------------------------------------------------------- */}
        <header className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Get in&nbsp;<span className="text-construction-accent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contact us to discuss your project or to learn more about our services.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ------------------------- FORM ------------------------------- */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-construction-muted p-8 rounded-lg border border-construction-border"
            >
              <h3 className="heading-md mb-6">Send us a message</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    name="name" required placeholder="Enter your name"
                    value={formData.name} onChange={handleChange} className={baseInput}
                  />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email" name="email" required placeholder="Enter your email"
                    value={formData.email} onChange={handleChange} className={baseInput}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel" name="phone" placeholder="Enter your phone number"
                    value={formData.phone} onChange={handleChange} className={baseInput}
                  />
                </div>
                <div>
                  <label className="form-label">Subject *</label>
                  <select
                    name="subject" required value={formData.subject} onChange={handleChange}
                    className={baseInput + ' pr-8'}
                  >
                    <option value="">Select a subject</option>
                    <option>Project Inquiry</option>
                    <option>Consultation</option>
                    <option>Partnership</option>
                    <option>General Question</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="form-label">Your Message *</label>
                <textarea
                  name="message" rows={5} required placeholder="Tell us about your project…"
                  value={formData.message} onChange={handleChange}
                  className={baseInput + ' resize-none'}
                />
              </div>

              <Button type="submit" className="btn-primary w-full md:w-auto">
                Send Message <ArrowRight className="ml-2 h-4 w-4"/>
              </Button>
            </form>
          </div>

          {/* ------------------ CONTACT INFORMATION ------------------------ */}
          <aside className="bg-construction-muted p-8 rounded-lg border border-construction-border h-full">
            <h3 className="heading-md mb-6">Contact Information</h3>

            <InfoItem icon={Phone} label="Phone Number">
              <a href={`tel:${COMPANY_PHONE}`} className="hover:underline text-white">
                {COMPANY_PHONE}
              </a>
            </InfoItem>

            <InfoItem icon={Mail} label="Email Address">
              <a href={`mailto:${COMPANY_MAIL}`} className="hover:underline text-white">
                {COMPANY_MAIL}
              </a>
            </InfoItem>

            <InfoItem icon={MapPin} label="Office Location">
              <p className="text-white">
                1, Commercial Building, Near DC Office Rd,<br/>
                below City Point 1, The Mall, Shimla,<br/>
                Himachal Pradesh 171001
              </p>
            </InfoItem>

            {/* quick-action buttons */}
            <div className="pt-6 border-t border-construction-border space-y-4">
              <Button asChild variant="outline" className="justify-center w-full">
                <a href={`tel:${COMPANY_PHONE}`}><Phone className="mr-2 h-4 w-4"/>Call Us</a>
              </Button>

              <Button asChild variant="outline" className="justify-center w-full">
                <a href={`sms:${COMPANY_PHONE}?body=${encodeURIComponent('Hello, I would like to discuss a project.')}`}>
                  <MessageCircle className="mr-2 h-4 w-4"/>Text Us
                </a>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* small helper component */
function InfoItem({
  icon: Icon, label, children
}: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start mb-6 last:mb-0">
      <span className="mr-4 p-3 bg-construction-accent/10 rounded-full text-construction-accent">
        <Icon className="h-5 w-5"/>
      </span>
      <div>
        <p className="text-sm text-gray-400 mb-1">{label}</p>
        {children}
      </div>
    </div>
  );
}

/* add once to index.css (optional) */
