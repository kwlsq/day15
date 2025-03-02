import AboutSection from "./components/About";
import GallerySection from "./components/Gallery";
import HeroSection from "./components/Hero";
import TestimonialSection from "./components/Testimonials";
import WorkSection from "./components/Work";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <WorkSection/>
      <GallerySection/>
      <TestimonialSection/>
    </>
  );
};

export default Home;
