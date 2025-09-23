import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/home/Preloader";
import Navbar from "./components/home/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Industries from "./components/home/Industries";
import Testimonial from "./components/home/Testimonial";
import Innovation from "./components/home/Innovation";
import Footer from "./components/home/Footer";
import HeroUs from "./components/aboutus/HeroUs";
import InnovationUs from "./components/aboutus/InnovationUs";
import IndustriesUs from "./components/aboutus/IndustriesUs";
import ScrollingImagesUs from "./components/aboutus/ScrollingImages";
import WhyChooseUsAB from "./components/aboutus/WhyChooseUsAB";
import Contact from "./components/contactus/Contact";
import MapSection from "./components/contactus/MapSection";
import ContctUs from "./components/contactus/ContactUs";
import BlogUs from "./components/blogs/BlogUs";
import Cards from "./components/blogs/Cards";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 5 seconds ke liye preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />
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
                  <InnovationUs />
                  <IndustriesUs />
                  <ScrollingImagesUs />
                  <WhyChooseUsAB />
                </>
              }
            />

            <Route path="/contact" 
            element={
            <>
               <ContctUs />
               <Contact/>
               <MapSection/>
            </>
           } 
          />

          <Route path="/blog" 
            element={
            <>
               <BlogUs />
               <Cards/>
          
            </>
           } 
          />

          <Route path="/ourproject" 
            element={
            <>
            
            </>
           } 
          />

          <Route path="/service" 
            element={
            <>
            
            </>
           } 
          />

          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
