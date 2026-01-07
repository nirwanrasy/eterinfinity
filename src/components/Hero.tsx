import { Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-blue-600 w-8 h-8 animate-pulse" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              EterInfinity
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Platform Pelatihan & Riset AI untuk<br />Startup dan Talenta Gen Z
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Pelatihan startup berbasis portofolio bisnis nyata, didukung mentoring,
            riset pasar, dan teknologi AI sesuai kebutuhan industri.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#services')}
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Explore Programs
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
