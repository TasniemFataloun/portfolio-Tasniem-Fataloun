import { useEffect, useState } from "react";
import IdeeTwee from "./pages/ideeTwee/IdeeTwee";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";
import Project from "./components/Projects/Project";
import Projects3D from "./components/Projects3D/Projects3D";
import Preloader from "./components/PreLoader/preLoader";

function App() {
  return (
    <>
      <>
        <IdeeTwee />
        <About />
        <Projects3D />
        <ContactUs />
      </>
    </>
  );
}

export default App;
