import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Products from "../components/Products";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
