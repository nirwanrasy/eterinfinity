import { Route, UsersRound, Map } from 'lucide-react';

export default function Strategy() {
  const strategies = [
    {
      icon: Route,
      title: 'Product Journey Strategy',
      description: 'Membimbing startup dari ide hingga validasi pasar dan scale-up.',
    },
    {
      icon: UsersRound,
      title: 'Community-Based Branding',
      description: 'Kolaborasi dengan BIM, GEKRAFS, dan kampus di Jawa Barat.',
    },
    {
      icon: Map,
      title: 'Startup Mapping',
      description: 'Pemetaan startup pemula untuk menangkap peluang industri potensial.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Strategy
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <strategy.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {strategy.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
