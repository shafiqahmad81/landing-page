import Aos from "aos";
import 'aos/dist/aos.css';
import React from "react";
import Hero from "./components/Hero";
const App = () =>{
  Aos.init({
    duration: 1800,
    offset: 0,
  })
  return <div className=" overflow-hidden">
    <Hero />
  </div>;
};

export default App;
