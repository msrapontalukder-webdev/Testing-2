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
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="service">
        <Service />
      </section>

      <section id="tesmonials">
        <Tesmonials />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}

export default App;
