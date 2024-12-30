import React from "react";
import ClassComp from "./Components/ClassComp"; // Ensure this path is correct
import NavBar from "./FunctionalComponent/NavBar";
import About from "./FunctionalComponent/About";
import Gallery from "./FunctionalComponent/Gallary";
import Contact from "./FunctionalComponent/Contact";
import Home from "./FunctionalComponent/Home";


function App() {
  return (
    <div>
      <NavBar />
      <ClassComp />
      <About college="Kongu engineering" />
      <Contact />
      <Home />
      <Gallery />
     
    </div>
  );
}

export default App;
