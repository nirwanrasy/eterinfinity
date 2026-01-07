import { Brain, BarChart3, User, Database } from 'lucide-react';

export default function AIRoadmap() {
  const features = [
    {
      icon: BarChart3,
      text: 'Analisis kebutuhan pasar',
    },
    {
      icon: User,
      text: 'Personalisasi pembelajaran',
    },
    {
      icon: Database,
      text: 'Pengambilan keputusan bisnis berbasis data',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2di0yYTIgMiAwIDAgMC0yLTJoLTJhMiAyIDAgMCAwLTIgMnYyYTIgMiAwIDAgMCAyIDJoMmEyIDIgMCAwIDAgMi0yem0tNCAwdi0yaDJ2MmgtMnptLTggMHYtMmEyIDIgMCAwIDAtMi0yaC0yYTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDJhMiAyIDAgMCAwIDItMnptLTQgMHYtMmgydjJoLTJ6bTAgOHYtMmEyIDIgMCAwIDAtMi0yaC0yYTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDJhMiAyIDAgMCAwIDItMnptLTQgMHYtMmgydjJoLTJ6bTggMHYtMmEyIDIgMCAwIDAtMi0yaC0yYTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDJhMiAyIDAgMCAwIDItMnptLTQgMHYtMmgydjJoLTJ6bTggMHYtMmEyIDIgMCAwIDAtMi0yaC0yYTIgMiAwIDAgMC0yIDJ2MmEyIDIgMCAwIDAgMiAyaDJhMiAyIDAgMCAwIDItMnptLTQgMHYtMmgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Brain className="w-16 h-16 text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            AI Roadmap 2026
          </h2>
          <p className="text-xl sm:text-2xl text-cyan-300 font-semibold mb-6">
            AI-Integrated Education & Business Platform
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12 text-gray-200">
            Pengembangan sistem berbasis AI untuk:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-cyan-400/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-r from-cyan-400 to-blue-400 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-7 h-7 text-slate-900" />
                </div>
                <p className="text-center text-lg font-medium">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 rounded-full text-lg font-semibold">
              Coming Soon in 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
