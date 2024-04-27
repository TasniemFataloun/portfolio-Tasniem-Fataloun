import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
//import Main from "./pages/main/Main";
import IdeeTwee from "./pages/ideeTwee/IdeeTwee";
import ContactUs from "./pages/ContactUs/ContactUs";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/NavBar/Navbar";
import Button from "./components/Header/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Main /> */}

{/*       <Navbar /> */}

<Button />

      <IdeeTwee />

      <ContactUs />
    </>
  );
}

export default App;
