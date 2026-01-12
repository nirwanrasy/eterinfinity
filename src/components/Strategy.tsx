import { Route, UsersRound, Map } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GridDots from './GridDots';

export default function Strategy() {
  const { ref, isVisible } = useScrollReveal();

  const strategies = [
    {
      icon: Route,
      title: 'Product Journey Strategy',
      description: 'Membimbing startup dari ide hingga validasi pasar dan scale-up.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=180&fit=crop',
    },
    {
      icon: UsersRound,
      title: 'Community-Based Branding',
      description: 'Kolaborasi dengan BIM, GEKRAFS, dan kampus di Jawa Barat.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=180&fit=crop',
    },
    {
      icon: Map,
      title: 'Startup Mapping',
      description: 'Pemetaan startup pemula untuk menangkap peluang industri potensial.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=180&fit=crop',
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <GridDots count={25} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="highlight-stabilo">Our Strategy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-white/15 hover:bg-white/15"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src={strategy.image}
                  alt={strategy.title}
                  className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="bg-gradient-to-r from-indigo-600 to-violet-500 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <strategy.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 hover:text-violet-300 transition-colors">
                {strategy.title}
              </h3>
              <p className="text-blue-200 leading-relaxed">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
