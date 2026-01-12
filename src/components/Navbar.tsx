import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Review', href: '#reviews' },
    // { name: 'Teams', href: '#teams' }, // Hidden
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-indigo-950/95 backdrop-blur-md shadow-lg shadow-indigo-900/20'
      : 'bg-indigo-950/80 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/src/img/logo_eterinfinity.png"
              alt="EterInfinity Logo"
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-xl font-bold text-white">
              ETERINFINITY
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-indigo-100 hover:text-white font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-white text-indigo-700 px-6 py-2 rounded-full hover:bg-indigo-50 hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-indigo-950/95 backdrop-blur-md border-t border-indigo-800">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-indigo-100 hover:text-white py-2 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
