import { Award, TrendingUp, Eye, ShoppingBag, Coffee, Share2, Rocket, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GridDots from './GridDots';

export default function Reviews() {
  const { ref, isVisible } = useScrollReveal();

  const reviews = [
    {
      icon: Award,
      title: 'Easy Waste',
      subtitle: 'TOP 5 StartUp Sampah 2022',
      description: 'CORE LPIK ITB',
      color: 'from-green-500 to-emerald-400',
      activityImage: new URL('../img/Easy_Waste.png', import.meta.url).href,
      category: 'Startup Award',
    },
    {
      icon: TrendingUp,
      title: 'Usaha Ternak',
      subtitle: 'Business Model Development',
      description: 'Dari tanpa modal hingga memahami business model',
      color: 'from-indigo-500 to-violet-400',
      activityImage: new URL('../img/Usaha_Ternak.png', import.meta.url).href,
      category: 'Business Growth',
    },
    {
      icon: Eye,
      title: 'PetaNetra',
      subtitle: 'Assistive Technology',
      description: 'Solusi navigasi untuk tunanetra',
      color: 'from-purple-500 to-pink-400',
      activityImage: new URL('../img/Petra_Netra.png', import.meta.url).href,
      category: 'Social Impact',
    },
    {
      icon: ShoppingBag,
      title: 'Pelatihan DISKUK Jawa Barat 2025',
      subtitle: 'Digital Marketing Training',
      description: 'Website, SEO, SEM, Marketplace, Ads, dll',
      color: 'from-orange-500 to-red-400',
      activityImage: new URL('../img/Pelatihan_DISKUK JaBar_2025.png', import.meta.url).href,
      category: 'Training Program',
    },
    {
      icon: Coffee,
      title: 'Kopi Masagi dan Tas',
      subtitle: 'Business Innovation',
      description: 'Inovator teknologi, pemasaran, dan perencanaan bisnis',
      color: 'from-amber-600 to-yellow-500',
      activityImage: new URL('../img/Usaha_Kopi_Masagi&Tas.png', import.meta.url).href,
      category: 'UMKM Success',
    },
    {
      icon: Share2,
      title: 'UMKM Scarlet Media Sosial',
      subtitle: 'Social Media Strategy',
      description: 'Pemanfaatan media sosial untuk wirausaha',
      color: 'from-pink-500 to-rose-400',
      activityImage: new URL('../img/UMKM_Scarlet_Media_Sosial.png', import.meta.url).href,
      category: 'Digital Marketing',
    },
    {
      icon: Rocket,
      title: 'Akselerasi Entrepreneur Bootcamp',
      subtitle: 'Full Program',
      description: 'Ide bisnis, model bisnis, pitching, go live',
      color: 'from-indigo-600 to-violet-500',
      activityImage: new URL('../img/Akselerasi_Enterpreneur_Bootcamp.png', import.meta.url).href,
      category: 'Bootcamp',
    },
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="reviews" className={`py-20 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <GridDots count={35} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="highlight-stabilo">Impact & Reviews</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Lihat bagaimana kami telah membantu berbagai startup dan UMKM mencapai kesuksesan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-300 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-white/15 hover:bg-white/15"
            >
              {/* Activity Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={review.activityImage}
                  alt={`${review.title} activity`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${review.color} text-white shadow-lg`}>
                    {review.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
                  {review.title}
                </h3>
                <p className="text-sm font-semibold text-violet-300 mb-2">
                  {review.subtitle}
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {review.description}
                </p>

                {/* Action */}
                <button className="flex items-center gap-2 text-violet-300 text-sm font-semibold group/btn hover:gap-3 transition-all hover:text-white">
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-violet-500 to-indigo-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer hover:scale-105 font-semibold">
            <span className="text-lg">Jadilah kisah sukses berikutnya</span>
            <Rocket className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
