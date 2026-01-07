import { Award, TrendingUp, Eye, ShoppingBag, Coffee, Share2, Rocket } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      icon: Award,
      title: 'Easy Waste',
      subtitle: 'TOP 5 StartUp Sampah 2022',
      description: 'CORE LPIK ITB',
      color: 'from-green-500 to-emerald-400',
    },
    {
      icon: TrendingUp,
      title: 'Usaha Ternak',
      subtitle: 'Business Model Development',
      description: 'Dari tanpa modal hingga memahami business model',
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: Eye,
      title: 'PetaNetra',
      subtitle: 'Assistive Technology',
      description: 'Solusi navigasi untuk tunanetra',
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: ShoppingBag,
      title: 'Pelatihan DISKUK Jawa Barat 2025',
      subtitle: 'Digital Marketing Training',
      description: 'Website, SEO, SEM, Marketplace, Ads, dll',
      color: 'from-orange-500 to-red-400',
    },
    {
      icon: Coffee,
      title: 'Kopi Masagi dan Tas',
      subtitle: 'Business Innovation',
      description: 'Inovator teknologi, pemasaran, dan perencanaan bisnis',
      color: 'from-amber-600 to-yellow-500',
    },
    {
      icon: Share2,
      title: 'UMKM Scarlet Media Sosial',
      subtitle: 'Social Media Strategy',
      description: 'Pemanfaatan media sosial untuk wirausaha',
      color: 'from-pink-500 to-rose-400',
    },
    {
      icon: Rocket,
      title: 'Akselerasi Entrepreneur Bootcamp',
      subtitle: 'Full Program',
      description: 'Ide bisnis, model bisnis, pitching, go live',
      color: 'from-blue-600 to-cyan-500',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Impact & Reviews
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 bg-gradient-to-r ${review.color} rounded-xl flex items-center justify-center mb-4`}>
                <review.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {review.title}
              </h3>
              <p className="text-sm font-semibold text-blue-600 mb-2">
                {review.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
