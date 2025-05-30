import "aos/dist/aos.css";
import "./App.css";
import { useEffect } from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Aos from "aos";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowWork from "./components/HowWorks";
import Waitlist from "./components/Waitlist.jsx";
import Benefits from "./components/Benefits.jsx";
import FeatureWaiting from "./components/FeatureWaiting.jsx";
import Testimonial from "./components/testimonial.jsx";
import Faq from "./components/Faq.jsx";
import Pricing from "./components/Pricing.jsx";
import Images from "./components/Images";

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
        <Features />
        <Images />
        <Benefits />
        <Testimonial />
        <Pricing />
        <HowWork />
        <FeatureWaiting />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

export default App;
