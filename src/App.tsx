import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Challenges from './components/Challenges';
import Strategy from './components/Strategy';
import AIRoadmap from './components/AIRoadmap';
import Reviews from './components/Reviews';
import Teams from './components/Teams';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Challenges />
      <Strategy />
      <AIRoadmap />
      <Reviews />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
