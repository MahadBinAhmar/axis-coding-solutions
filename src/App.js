import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonial from './components/Testimonial.jsx';
import Innovation from './components/Innovation';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


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
      <Footer />
    </>
  );
}

export default App;