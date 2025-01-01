import Header from "./components/Header";
import Hero from "./components/Hero";
import HorizontalLine from "./components/HorizontalLine";
import OurRockets from "./components/OurRockets";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <HorizontalLine />
      <OurRockets />
      <HorizontalLine />
      <Testimonials />
      <HorizontalLine />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
