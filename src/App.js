import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonial from './components/Testimonial.jsx';
import Innovation from './components/Innovation';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <FeaturedProjects />
      <Innovation />
      <Testimonial />
    </>
  );
}

export default App;