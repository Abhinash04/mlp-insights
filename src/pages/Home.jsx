import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import ScrollToTop from "../components/ScrollToTop";
import Hero from "../components/Hero";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.section) {
      scroller.scrollTo(location.state.section, {
        duration: 0,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      
      <ScrollToTop />
    </>
  );
};

export default Home;
