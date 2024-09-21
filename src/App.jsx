import { useState, useEffect } from "react";
import IdeeTwee from "./pages/ideeTwee/IdeeTwee";
import ContactUs from "./pages/ContactUs/ContactUs";
import About from "./pages/About/About";
import Project from "./components/Projects/Project";
import Projects3D from "./components/Projects3D/Projects3D";
import Landing from "./components/Landing/Landing";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // Cleanup timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Landing />
      ) : (
        <>
          <IdeeTwee />
          <About />
          <Project />
          <Projects3D />
          <ContactUs />
        </>
      )}
    </>
  );
}

export default App;
