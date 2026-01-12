import { AlertCircle, CheckCircle, ArrowRight, Lightbulb, Target, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GridDots from './GridDots';

export default function Challenges() {
  const { ref, isVisible } = useScrollReveal();

  const challenges = [
    { text: 'Riset pasar yang tidak memadai', icon: Target },
    { text: 'Produk tidak sesuai kebutuhan pelanggan', icon: Lightbulb },
    { text: 'Kurangnya pendampingan dan ekosistem kolaboratif', icon: Zap },
  ];

  const solutions = [
    'Mentoring 1-on-1 dengan praktisi',
    'Pelatihan custom / by request',
    'Kolaborasi dan pembangunan ekosistem startup',
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <GridDots count={25} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="highlight-stabilo">Kami Memahami Tantangan Anda</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Challenges Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full border border-white/15">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <AlertCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Tantangan yang Sering Dihadapi Startup
                </h3>
              </div>

              {/* Challenge Image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=200&fit=crop"
                  alt="Startup Challenges Illustration"
                  className="w-full h-auto object-cover"
                />
              </div>

              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-4 bg-red-500/20 p-4 rounded-xl border border-red-400/30">
                    <div className="w-10 h-10 bg-red-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="text-white/90 text-lg font-medium">{challenge.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Arrow */}
            <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full flex items-center justify-center shadow-xl">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Solutions Card */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-xl h-full border border-white/15">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Solusi dari EterInfinity
              </h3>
            </div>

            {/* Solution Image */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=200&fit=crop"
                alt="EterInfinity Solutions Illustration"
                className="w-full h-auto object-cover"
              />
            </div>

            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-4 bg-indigo-500/20 p-4 rounded-xl border border-indigo-400/30">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90 text-lg font-medium">{solution}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              <span>Konsultasi Gratis</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
