import Button_1 from "../../components/Button_1";
import Header from "./Components/Header";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import HeroSection from "./sections/HeroSection";

function Home() {
  return (
    <>
      <Header />
      <div>
        <div className="bg-black h-screen flex items-center justify-center">
          <HeroSection />
        </div>
        <AboutSection />
        <EducationSection />
      </div>
    </>
  );
}

export default Home;
