
import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding bg-construction-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Get in <span className="text-construction-accent">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contact us to discuss your project or to learn more about our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-construction-muted p-8 rounded-lg border border-construction-border">
              <h3 className="heading-md mb-6">Send us a message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-construction-dark border border-construction-border rounded-md focus:outline-none focus:border-construction-accent text-white"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-construction-dark border border-construction-border rounded-md focus:outline-none focus:border-construction-accent text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-construction-dark border border-construction-border rounded-md focus:outline-none focus:border-construction-accent text-white"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-construction-dark border border-construction-border rounded-md focus:outline-none focus:border-construction-accent text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="Project Inquiry">Project Inquiry</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 bg-construction-dark border border-construction-border rounded-md focus:outline-none focus:border-construction-accent text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full md:w-auto">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-construction-muted p-8 rounded-lg border border-construction-border h-full">
              <h3 className="heading-md mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-construction-accent bg-opacity-10 rounded-full text-construction-accent">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                    <p className="text-white">+1 (555) 123-4567</p>
                    <p className="text-white">+1 (555) 765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-construction-accent bg-opacity-10 rounded-full text-construction-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email Address</p>
                    <p className="text-white">info@archicon.com</p>
                    <p className="text-white">sales@archicon.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-construction-accent bg-opacity-10 rounded-full text-construction-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Office Location</p>
                    <p className="text-white">123 Construction Avenue</p>
                    <p className="text-white">New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-construction-border">
                  <p className="text-sm text-gray-400 mb-4">Working Hours</p>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-white">Monday - Friday:</p>
                    <p className="text-white">9:00 AM - 6:00 PM</p>
                    <p className="text-white">Saturday:</p>
                    <p className="text-white">10:00 AM - 4:00 PM</p>
                    <p className="text-white">Sunday:</p>
                    <p className="text-white">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
