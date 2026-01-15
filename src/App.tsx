import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sponsors from './components/Sponsors';
import About from './components/About';
import Services from './components/Services';
import Challenges from './components/Challenges';
import Strategy from './components/Strategy';
import AIRoadmap from './components/AIRoadmap';
import Reviews from './components/Reviews';
// import Teams from './components/Teams'; // Hidden
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-main relative">
      {/* Global background orbs for seamless look */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-violet-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-15"></div>
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-indigo-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>
        <div className="absolute top-[50%] left-[20%] w-[350px] h-[350px] bg-blue-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>
        <div className="absolute top-[70%] right-[15%] w-[450px] h-[450px] bg-violet-400 rounded-full mix-blend-overlay filter blur-[120px] opacity-15"></div>
        <div className="absolute top-[90%] left-[10%] w-[400px] h-[400px] bg-indigo-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-10"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Sponsors />
        <About />
        <Services />
        <Challenges />
        <Strategy />
        <AIRoadmap />
        <Reviews />
        {/* <Teams /> // Hidden */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
