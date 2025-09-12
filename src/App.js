import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';
import Industries from './components/home/Industries';
import Testimonial from './components/home/Testimonial';
import Innovation from './components/home/Innovation';
import Footer from './components/home/Footer';
import HeroUs from './components/aboutus/HeroUs';
import InnovationUs from './components/aboutus/InnovationUs';
import IndustriesUs from './components/aboutus/IndustriesUs';
import ScrollingImagesUs from './components/aboutus/ScrollingImages';
import WhyChooseUsAB from './components/aboutus/WhyChooseUsAB';



function App() {
  return (
    <Router>
      <Navbar />   {/* sab pages pe same navbar chahiye */}
      <Routes>
        {/* Home Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Services />
              <WhyChooseUs />
              <Industries />
              <Innovation />
              <Testimonial />
            </>
          } 
        />

        {/* About Us Page Route */}
         <Route
          path="/about"
          element={
            <>
              <HeroUs />
              <InnovationUs/>
              <IndustriesUs/>
              <ScrollingImagesUs/>
              <WhyChooseUsAB/>
            </>
          }
        />
      </Routes>
              <Footer />
    </Router>
  );
}

export default App;