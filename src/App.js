import Aos from "aos";
import 'aos/dist/aos.css';
import React from "react";
import About from "./components/About";
import CtaSection from "./components/CtaSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
const App = () =>{
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  return <div className=" overflow-hidden">
    <Hero />
    <About />
    <Features />
    <Testimonial />
    <CtaSection />
    <Footer />
  </div>;
};

export default App;
