import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Service from "./Components/Service";
import Tesmonials from "./Components/Tesmonials";
import ContactSection from "./Components/ContractSection";
import Footer from "./Components/Footer";

function MainPage() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="service">
        <Service />
      </div>

      <div id="testimonials">
        <Tesmonials />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
