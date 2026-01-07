import { User } from 'lucide-react';

export default function Teams() {
  const team = [
    {
      name: 'Anton Arifin',
      role: 'CEO / Founder',
      description: 'Memimpin visi, strategi, kemitraan, dan scale-up bisnis.',
    },
    {
      name: 'Jeanevianti',
      role: 'System Analyst',
      description: 'Perancangan sistem, LMS, dan arsitektur pelatihan digital.',
    },
    {
      name: 'Koswara',
      role: 'Trainer Digital Marketing (BNSP)',
      description: 'Pengembangan kurikulum dan mentoring siap industri.',
    },
    {
      name: 'Nabila Lailatanzila',
      role: 'AI Research',
      description: 'Riset AI untuk pendidikan & bisnis, analisis data, dan inovasi modul AI.',
    },
  ];

  return (
    <section id="teams" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Teams
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-blue-600 mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
