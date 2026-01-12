import { Target, Users, TrendingUp, Award, Calendar } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GridDots from './GridDots';
import aboutImage from '../img/image1.png';

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: '2020', label: 'Berdiri Sejak', icon: Calendar, image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop' },
    { value: '100+', label: 'Peserta Terlatih', icon: Users, image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop' },
    { value: '20+', label: 'Startup Binaan', icon: TrendingUp, image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop' },
    { value: '15+', label: 'Mitra Kolaborasi', icon: Award, image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop' },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="about" className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <GridDots count={35} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="highlight-stabilo">About Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image with Enhanced Frame */}
          <div className="relative">
            {/* Outer offset frame - high contrast violet */}
            <div className="absolute -top-5 -left-5 w-full h-full rounded-3xl border-4 border-violet-400 shadow-lg shadow-violet-400/40"></div>

            {/* Second offset frame - high contrast fuchsia */}
            <div className="absolute -top-2 -left-2 w-full h-full rounded-3xl border-2 border-fuchsia-300"></div>

            {/* Main image container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-purple-500">
              <img
                src={aboutImage}
                alt="Tim EterInfinity bekerja sama"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
            </div>

            {/* Typography overlay - top right - solid white */}
            <div className="absolute -top-6 -right-6 z-20">
              <div className="bg-white rounded-2xl px-6 py-4 shadow-2xl shadow-violet-500/30">
                <span className="text-violet-600 text-sm font-bold tracking-widest uppercase">Since</span>
                <div className="text-violet-900 text-4xl font-black">2020</div>
              </div>
            </div>

            {/* Typography overlay - bottom left - solid gradient violet */}
            <div className="absolute -bottom-4 -left-4 z-20">
              <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl px-6 py-3 shadow-2xl shadow-fuchsia-500/40">
                <span className="text-white text-lg font-bold">EterInfinity</span>
                <div className="text-violet-100 text-xs font-medium">Indonesia</div>
              </div>
            </div>

            {/* Grid dots decoration - bottom transition - violet palette */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 grid grid-cols-12 gap-2">
              {[...Array(36)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-violet-400' : i % 3 === 1 ? 'bg-fuchsia-400' : 'bg-purple-300'}`}
                  style={{ opacity: 0.7 + Math.random() * 0.3 }}
                ></div>
              ))}
            </div>

            {/* Decorative dots - right side - violet palette */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-violet-400' : 'bg-fuchsia-300'}`}
                ></div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-blue-100 leading-relaxed">
                Didirikan sejak <span className="font-semibold text-cyan-300">Januari 2020</span>,
                EterInfinity adalah platform pendidikan dan pendampingan bisnis yang berfokus
                pada pengembangan <span className="font-semibold text-white">StartUpreneur, Sociopreneur,
                  Technopreneur, dan UMKM muda</span>.
              </p>
              <p className="text-lg text-blue-100 leading-relaxed">
                Kami menyediakan layanan pelatihan, konsultasi, dan mentoring yang inklusif,
                terintegrasi, dan berbasis praktik, dengan tujuan membantu bisnis bertumbuh
                secara berkelanjutan dan relevan dengan kebutuhan pasar.
              </p>
            </div>

            {/* Fokus Utama Subtitle */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                <span className="highlight-stabilo">Fokus Utama</span>
              </h3>
            </div>

            {/* Value Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all flex items-start gap-4">
                <div className="w-12 h-12 bg-transparent border-2 border-violet-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400 transition-colors">
                  <Target className="w-6 h-6 text-violet-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Mission-Driven</h3>
                  <p className="text-blue-200 text-sm">
                    Membantu startup dan UMKM bertumbuh dengan pendekatan praktis dan terukur
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all flex items-start gap-4">
                <div className="w-12 h-12 bg-transparent border-2 border-fuchsia-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400 transition-colors">
                  <Users className="w-6 h-6 text-fuchsia-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Community-Based</h3>
                  <p className="text-blue-200 text-sm">
                    Membangun ekosistem kolaboratif dengan berbagai mitra dan institusi
                  </p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-all flex items-start gap-4">
                <div className="w-12 h-12 bg-transparent border-2 border-purple-400 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-cyan-400 transition-colors">
                  <TrendingUp className="w-6 h-6 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Growth-Oriented</h3>
                  <p className="text-blue-200 text-sm">
                    Fokus pada hasil nyata dan pertumbuhan berkelanjutan untuk setiap klien
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          {/* Connecting Text */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white">Pencapaian Kami</h3>
          </div>

          {/* Full-width Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative py-12 px-6 group hover:brightness-110 transition-all cursor-pointer overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-900/70 via-fuchsia-900/60 to-purple-900/70 group-hover:opacity-80 transition-opacity"></div>
                </div>

                {/* Icon Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <stat.icon className="w-full h-full object-cover" style={{ strokeWidth: 0.5 }} />
                </div>

                {/* Content inside image */}
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-black text-white mb-2 drop-shadow-lg group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-lg text-white font-bold drop-shadow-md">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
