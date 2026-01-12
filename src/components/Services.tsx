import { Megaphone, Code, GraduationCap, Lightbulb, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GridDots from './GridDots';

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategi pemasaran digital berbasis data: SEO, SEM, media sosial, ads, dan content marketing.',
      gradient: 'from-indigo-600 to-violet-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop',
      features: ['SEO Optimization', 'Social Media Strategy', 'Paid Advertising'],
    },
    {
      icon: Code,
      title: 'Website Development & System Analysis',
      description: 'Pembuatan website, analisis sistem, dan solusi digital sesuai kebutuhan bisnis.',
      gradient: 'from-violet-600 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=240&fit=crop',
      features: ['Custom Website', 'System Analysis', 'Digital Solutions'],
    },
    {
      icon: GraduationCap,
      title: 'Pelatihan dan Pendidikan',
      description: 'Program pelatihan praktis berbasis portofolio untuk individu, mahasiswa, startup, dan UMKM.',
      gradient: 'from-blue-600 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=240&fit=crop',
      features: ['Hands-on Training', 'Portfolio Based', 'Industry Ready'],
    },
    {
      icon: Lightbulb,
      title: 'Startup & Entrepreneur Impact Program',
      description: 'Pendampingan Technopreneur, Sociopreneur, dan Startupreneur untuk menciptakan bisnis berdampak.',
      gradient: 'from-indigo-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=240&fit=crop',
      features: ['Mentorship', 'Business Incubation', 'Investor Connect'],
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="services" className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <GridDots count={30} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="highlight-stabilo">Our Services</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Layanan komprehensif untuk membantu bisnis Anda tumbuh dan berkembang di era digital
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-300 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-md shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden p-1"
              style={{ background: 'linear-gradient(135deg, #e9d5ff 0%, #a78bfa 50%, #6d28d9 100%)' }}
            >
              <div
                className="rounded-md overflow-hidden h-full"
                style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 50%, #312e81 100%)' }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="bg-white/20 text-white px-4 py-2 rounded-md text-base font-medium border border-white/30">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="flex items-center gap-2 text-white text-lg font-semibold group/btn hover:text-violet-200 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
