import { useState } from "react";
import "./App.css";
import IdeeTwee from "./pages/ideeTwee/IdeeTwee";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";
import Project from "./components/Projects/Project";
import Projects3D from "./components/Projects3D/Projects3D";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <IdeeTwee />
      <About />
      <Project />
      <Projects3D />
      <ContactUs />
    </>
  );
}

export default App;
