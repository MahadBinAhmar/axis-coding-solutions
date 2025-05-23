import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturedProjects from './components/FeaturedProjects';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <FeaturedProjects />
    </>
  );
}

export default App;