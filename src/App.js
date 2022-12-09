import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroArea from "./components/HeroArea/HeroArea";
import RedModal from "./components/RedModal";
import Services from "./components/Services/Services";
import TeamInfo from "./components/TeamInfo/TeamInfo";
import Testimonial from "./components/Testimonial/Testimonial";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import { GlobalRefStates } from "./Context";

function App() {
  const {body} = GlobalRefStates();
  return (
    <div ref={body}>
      <RedModal />
      <Header />
      <HeroArea />
      <AboutUs />
      <Services />
      <WhyChoose />
      <TeamInfo />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
