import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';
import Industries from './components/home/Industries';
import Testimonial from './components/home/Testimonial.jsx';
import Innovation from './components/home/Innovation';
import Footer from './components/home/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Innovation />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;