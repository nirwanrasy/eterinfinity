import { Brain, BarChart3, User, Database } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GridDots from './GridDots';

export default function AIRoadmap() {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      icon: BarChart3,
      text: 'Analisis kebutuhan pasar',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&h=160&fit=crop',
    },
    {
      icon: User,
      text: 'Personalisasi pembelajaran',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=280&h=160&fit=crop',
    },
    {
      icon: Database,
      text: 'Pengambilan keputusan bisnis berbasis data',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=280&h=160&fit=crop',
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <GridDots count={20} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
              <Brain className="w-10 h-10 text-violet-400" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="highlight-stabilo">AI Roadmap 2026</span>
          </h2>
          <p className="text-xl text-violet-300 font-semibold mb-4">
            AI-Integrated Education & Business Platform
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-300 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12 text-blue-100">
            Pengembangan sistem berbasis AI untuk:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/15 hover:bg-white/15"
              >
                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={feature.image}
                    alt={feature.text}
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-gradient-to-r from-indigo-600 to-violet-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl">
              🚀 Coming Soon in 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
