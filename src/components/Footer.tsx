import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-violet-500 rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent mb-2">
              EterInfinity
            </h3>
            <p className="text-indigo-200">
              Empowering Startup & Gen Z with AI
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center gap-6">
              <a href="https://instagram.com/eterinvinity" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:eterinfinityindonesia@gmail.com" className="w-10 h-10 bg-white/10 hover:bg-violet-600 rounded-full flex items-center justify-center transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:081223246200" className="w-10 h-10 bg-white/10 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-indigo-300 text-sm">
              © 2026 EterInfinity. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
