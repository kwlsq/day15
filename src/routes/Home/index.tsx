import AboutSection from "./components/About";
import FloatingMenu from "./components/FloatingMenu";
import FooterSection from "./components/Footer";
import GallerySection from "./components/Gallery";
import HeroSection from "./components/Hero";
import TestimonialSection from "./components/Testimonials";
import WorkSection from "./components/Work";

const Home = () => {
  return (
    <>
      <FloatingMenu />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <GallerySection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
};

export default Home;
