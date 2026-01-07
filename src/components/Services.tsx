import { Megaphone, Code, GraduationCap, Lightbulb } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Strategi pemasaran digital berbasis data: SEO, SEM, media sosial, ads, dan content marketing.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Code,
      title: 'Website Development & System Analysis',
      description: 'Pembuatan website, analisis sistem, dan solusi digital sesuai kebutuhan bisnis.',
      gradient: 'from-cyan-500 to-blue-400',
    },
    {
      icon: GraduationCap,
      title: 'Pelatihan dan Pendidikan',
      description: 'Program pelatihan praktis berbasis portofolio untuk individu, mahasiswa, startup, dan UMKM.',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Startup & Entrepreneur Impact Program',
      description: 'Pendampingan Technopreneur, Sociopreneur, dan Startupreneur untuk menciptakan bisnis berdampak.',
      gradient: 'from-cyan-600 to-blue-500',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
