import { useState } from 'react';
import { Mail, Instagram, Phone, Send, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GridDots from './GridDots';

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="contact" className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <GridDots count={30} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="highlight-stabilo">Contact Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-300 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/15">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-indigo-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">Email</h3>
                <a href="mailto:eterinfinityindonesia@gmail.com" className="text-sm sm:text-base text-violet-200 hover:text-white transition-colors break-all">eterinfinityindonesia@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/15">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-indigo-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">Instagram</h3>
                <a href="https://instagram.com/eterinvinity" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-violet-200 hover:text-white transition-colors">@eterinvinity</a>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/15">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-indigo-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">Contact Person</h3>
                <a href="tel:081223246200" className="text-sm sm:text-base text-violet-200 hover:text-white transition-colors">081223246200</a>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 bg-white/10 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-white/15">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-indigo-600" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">Location</h3>
                <p className="text-sm sm:text-base text-violet-200">Bandung, Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50 text-sm sm:text-base" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50 text-sm sm:text-base" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none bg-gray-50 text-sm sm:text-base" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" disabled={submitted} className="w-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 text-sm sm:text-base">
                {submitted ? 'Message Sent! ✓' : <><Send className="w-4 h-4 sm:w-5 sm:h-5" />Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
