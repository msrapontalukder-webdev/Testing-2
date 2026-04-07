import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Tesmonials from "./Components/Tesmonials";
import ContactSection from "./Components/ContractSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Service></Service>
      <Tesmonials></Tesmonials>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
