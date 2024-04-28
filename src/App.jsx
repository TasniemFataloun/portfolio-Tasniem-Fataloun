import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import Main from "./pages/main/Main";
import IdeeTwee from "./pages/ideeTwee/IdeeTwee";
import ContactUs from "./pages/ContactUs/ContactUs";
import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Sidebar/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />

      <IdeeTwee />

      <ContactUs />
    </>
  );
}

export default App;
