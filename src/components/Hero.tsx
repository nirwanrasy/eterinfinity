import { Rocket, Sparkles, ArrowRight } from 'lucide-react';
import GridDots from './GridDots';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <GridDots count={40} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white drop-shadow-lg">
                ETERINFINITY
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 mb-6 leading-tight">
              Platform Pelatihan untuk{' '}
              <span className="text-cyan-300 font-extrabold">Startup</span> dan{' '}
              <span className="text-fuchsia-400 font-extrabold">Talenta Gen Z</span>
            </h2>

            <p className="text-lg sm:text-xl text-blue-100 max-w-xl mb-10 leading-relaxed">
              Pelatihan startup berbasis portofolio bisnis nyata, didukung mentoring,
              riset pasar, dan teknologi AI sesuai kebutuhan industri.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollToSection('#services')}
                className="group bg-white text-indigo-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Explore Programs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            {/* Outer offset frame - high contrast violet */}
            <div className="absolute -top-5 -right-5 w-full h-full rounded-3xl border-4 border-violet-400 shadow-lg shadow-violet-400/40"></div>

            {/* Second offset frame - high contrast fuchsia */}
            <div className="absolute -top-2 -right-2 w-full h-full rounded-3xl border-2 border-fuchsia-300"></div>

            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-500">
              <img
                src="/src/img/image1.jpeg"
                alt="EterInfinity AI Training Platform"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute left-0 sm:-left-4 lg:-left-8 top-1/4 bg-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl animate-bounce scale-75 sm:scale-90 lg:scale-100 origin-top-left" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-gray-800">Data-Driven</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">Learning System</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute right-0 sm:-right-2 lg:-right-4 bottom-1/4 bg-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl animate-bounce scale-75 sm:scale-90 lg:scale-100 origin-bottom-right" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-gray-800">Fast Track</div>
                  <div className="text-[10px] sm:text-xs text-gray-500">Startup Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
