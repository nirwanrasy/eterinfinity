import { AlertCircle, CheckCircle } from 'lucide-react';

export default function Challenges() {
  const challenges = [
    'Riset pasar yang tidak memadai',
    'Produk tidak sesuai kebutuhan pelanggan',
    'Kurangnya pendampingan dan ekosistem kolaboratif',
  ];

  const solutions = [
    'Mentoring 1-on-1 dengan praktisi',
    'Pelatihan custom / by request',
    'Kolaborasi dan pembangunan ekosistem startup',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Tantangan yang Sering Dihadapi Startup
              </h3>
            </div>
            <ul className="space-y-4">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Solusi dari EterInfinity
              </h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
