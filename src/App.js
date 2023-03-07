import React, { useEffect } from "react";
import Icons from "./Components/Modules/Icons";
import About from "./Components/Section/About";
import Banner from "./Components/Section/Banner";
import Contact from "./Components/Section/Contact";
import Experience from "./Components/Section/Experience";
import Header from "./Components/Section/Header";
import Portfolio from "./Components/Section/Portfolio";
import Services from "./Components/Section/Services";
import Skills from "./Components/Section/Skills";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  const footerLinks = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/mohit-nandpal-894375167/",
      icon: "fab fa-linkedin-in",
    },
    {
      name: "envelope",
      link: "mailto:nandpalmohit@gmail.com",
      icon: "far fa-envelope",
    },
    {
      name: "github",
      link: "https://github.com/nandpalmohit",
      icon: "fab fa-github",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/nandpalmohit99/",
      icon: "fab fa-instagram",
    },
    {
      name: "twitter",
      link: "https://www.instagram.com/nandpalmohit99/",
      icon: "fab fa-twitter",
    },
  ];

  return (
    <div id="home">
      <Icons />
      <Header />
      <Banner footerLinks={footerLinks} />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Services />
      <Contact footerLinks={footerLinks} />
    </div>
  );
}

export default App;
