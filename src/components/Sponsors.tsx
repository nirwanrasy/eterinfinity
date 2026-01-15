import { useScrollReveal } from '../hooks/useScrollReveal';

// Import sponsor logos from src/img/sponsors
// When actual logos are added, import them like:
// import sponsor01 from '../img/sponsors/sponsor-01.jpg';

// Placeholder sponsors - update logos when files are available
const sponsors = [
    { id: 1, name: 'Sponsor 1', logo: new URL('../img/sponsors/sponsor-01.jpeg', import.meta.url).href },
    { id: 2, name: 'Sponsor 2', logo: new URL('../img/sponsors/sponsor-02.jpeg', import.meta.url).href },
    { id: 3, name: 'Sponsor 3', logo: new URL('../img/sponsors/sponsor-03.jpeg', import.meta.url).href },
    { id: 4, name: 'Sponsor 4', logo: new URL('../img/sponsors/sponsor-04.jpeg', import.meta.url).href },
    { id: 5, name: 'Sponsor 5', logo: new URL('../img/sponsors/sponsor-05.jpeg', import.meta.url).href },
    { id: 6, name: 'Sponsor 6', logo: new URL('../img/sponsors/sponsor-06.jpeg', import.meta.url).href },
    { id: 7, name: 'Sponsor 7', logo: new URL('../img/sponsors/sponsor-07.jpeg', import.meta.url).href },
    { id: 8, name: 'Sponsor 8', logo: new URL('../img/sponsors/sponsor-08.jpeg', import.meta.url).href },
    { id: 9, name: 'Sponsor 9', logo: new URL('../img/sponsors/sponsor-09.jpeg', import.meta.url).href },
    { id: 10, name: 'Sponsor 10', logo: new URL('../img/sponsors/sponsor-10.jpeg', import.meta.url).href },
    { id: 11, name: 'Sponsor 11', logo: new URL('../img/sponsors/sponsor-11.jpeg', import.meta.url).href },
    { id: 12, name: 'Sponsor 12', logo: new URL('../img/sponsors/sponsor-12.jpeg', import.meta.url).href },
    { id: 13, name: 'Sponsor 13', logo: new URL('../img/sponsors/sponsor-13.jpeg', import.meta.url).href },
    { id: 14, name: 'Sponsor 14', logo: new URL('../img/sponsors/sponsor-14.jpeg', import.meta.url).href },
    { id: 15, name: 'Sponsor 15', logo: new URL('../img/sponsors/sponsor-15.jpeg', import.meta.url).href },
];

export default function Sponsors() {
    const { ref, isVisible } = useScrollReveal();

    // Duplicate sponsors array for seamless infinite scroll
    const duplicatedSponsors = [...sponsors, ...sponsors];

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            id="sponsors"
            className={`py-16 relative overflow-hidden scroll-reveal ${isVisible ? 'visible' : ''}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        <span className="highlight-stabilo">Didukung Oleh</span>
                    </h3>
                    <p className="text-blue-200 text-sm">Mitra dan Kolaborator Kami</p>
                </div>

                {/* Sponsors Carousel */}
                <div className="sponsors-slider">
                    <div className="sponsors-track">
                        {duplicatedSponsors.map((sponsor, index) => (
                            <div
                                key={`${sponsor.id}-${index}`}
                                className="sponsor-card group"
                            >
                                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300 h-24 w-48 flex items-center justify-center">
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                        onError={(e) => {
                                            // Fallback: show sponsor name if image not found
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                            const parent = target.parentElement;
                                            if (parent && !parent.querySelector('.fallback-text')) {
                                                const fallback = document.createElement('span');
                                                fallback.className = 'fallback-text text-gray-500 text-sm font-medium';
                                                fallback.textContent = sponsor.name;
                                                parent.appendChild(fallback);
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
