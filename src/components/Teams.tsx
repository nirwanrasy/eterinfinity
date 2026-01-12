import { Linkedin, Mail, Twitter } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GridDots from './GridDots';

export default function Teams() {
  const { ref, isVisible } = useScrollReveal();

  const team = [
    {
      name: 'Anton Arifin',
      role: 'CEO / Founder',
      description: 'Memimpin visi, strategi, kemitraan, dan scale-up bisnis.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      socials: { linkedin: '#', twitter: '#', email: 'mailto:anton@eterinfinity.com' },
    },
    {
      name: 'Jeanevianti',
      role: 'System Analyst',
      description: 'Perancangan sistem, LMS, dan arsitektur pelatihan digital.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      socials: { linkedin: '#', twitter: '#', email: 'mailto:jeane@eterinfinity.com' },
    },
    {
      name: 'Koswara',
      role: 'Trainer Digital Marketing (BNSP)',
      description: 'Pengembangan kurikulum dan mentoring siap industri.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      socials: { linkedin: '#', twitter: '#', email: 'mailto:koswara@eterinfinity.com' },
    },
    {
      name: 'Nabila Lailatanzila',
      role: 'AI Research',
      description: 'Riset AI untuk pendidikan & bisnis, analisis data, dan inovasi modul AI.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      socials: { linkedin: '#', twitter: '#', email: 'mailto:nabila@eterinfinity.com' },
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="teams" className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <GridDots count={25} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="highlight-stabilo">Our Teams</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Tim profesional yang berdedikasi untuk membantu kesuksesan bisnis Anda</p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-300 mx-auto rounded-full mt-6"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-indigo-600 to-violet-500"></div>
              <div className="relative z-10 mb-4">
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl mt-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{member.name}</h3>
              <p className="text-sm font-semibold text-indigo-600 mb-4 bg-indigo-50 inline-block px-3 py-1 rounded-full">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.description}</p>
              <div className="flex justify-center gap-3">
                <a href={member.socials.linkedin} className="w-10 h-10 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"><Linkedin className="w-4 h-4" /></a>
                <a href={member.socials.twitter} className="w-10 h-10 bg-indigo-50 hover:bg-violet-500 text-indigo-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"><Twitter className="w-4 h-4" /></a>
                <a href={member.socials.email} className="w-10 h-10 bg-indigo-50 hover:bg-indigo-500 text-indigo-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
