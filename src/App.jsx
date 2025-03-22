import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Aos from "aos";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import HowWork from "./components/HowWorks";
import Waitlist from "./components/Waitlist.jsx";
import Benefits from "./components/Benefits.jsx";
import Features from "./components/Feature.jsx";
import FeatureWaiting from "./components/FeatureWaiting.jsx";
import Testimonial from "./components/testimonial.jsx";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <HowWork/>
        <FeatureWaiting/>
        <Benefits/>
        <Features/>
        <Testimonial/>
        <Waitlist/>
      </main>
      <Footer />
    </>
  );
}

export default App;
