import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import HeroArea from "./components/HeroArea/HeroArea";
import Services from "./components/Services/Services";
import TeamInfo from "./components/TeamInfo/TeamInfo";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyChoose from "./components/WhyChoose/WhyChoose";

function App() {
  return (
    <>
      <Header />
      <HeroArea/>
      <AboutUs/>
      <Services/>
      <WhyChoose/>
      <TeamInfo/>
      <Testimonial/>
      <Contact/>
    </>
  );
}

export default App;
