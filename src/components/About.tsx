import { Target, Users, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Didirikan sejak <span className="font-semibold text-blue-600">Januari 2020</span>,
              EterInfinity adalah platform pendidikan dan pendampingan bisnis yang berfokus
              pada pengembangan <span className="font-semibold">StartUpreneur, Sociopreneur,
              Technopreneur, dan UMKM muda</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Kami menyediakan layanan pelatihan, konsultasi, dan mentoring yang inklusif,
              terintegrasi, dan berbasis praktik, dengan tujuan membantu bisnis bertumbuh
              secara berkelanjutan dan relevan dengan kebutuhan pasar.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Target className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mission-Driven</h3>
              <p className="text-gray-600">
                Membantu startup dan UMKM bertumbuh dengan pendekatan praktis dan terukur
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community-Based</h3>
              <p className="text-gray-600">
                Membangun ekosistem kolaboratif dengan berbagai mitra dan institusi
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <TrendingUp className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Growth-Oriented</h3>
              <p className="text-gray-600">
                Fokus pada hasil nyata dan pertumbuhan berkelanjutan untuk setiap klien
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
