import React from "react";
import Icons from "./Components/Modules/Icons";
import About from "./Components/Section/About";
import Banner from "./Components/Section/Banner";
import Experience from "./Components/Section/Experience";
import Header from "./Components/Section/Header";
import Portfolio from "./Components/Section/Portfolio";
import Skills from "./Components/Section/Skills";

function App() {
  return (
    <>
      <Icons />
      <Header />
      <Banner />
      <About />
      <Skills />
      <Experience />
      {/* <Portfolio /> */}
    </>
  );
}

export default App;
