import Navbar from "../../../../components/navbar";
import Ribbon from "./Ribbon";
import HeroImage from "../../../../assets/photo.webp";

const HeroSection = () => {
  return (
    <div className="h-screen w-screen bg-[#c7d0d9] flex justify-center relative overflow-hidden whitespace-nowrap">
      <Navbar />
      <img
        className="h-full pt-20"
        src={HeroImage}
        alt="photo of the web owner"
      />
      <h1 className="absolute bottom-0 text-[#f4f7fa] text-[9.39875em] animate-marquee">
        Webflow Developer - UI/UX Designer
      </h1>
      <Ribbon />
    </div>
  );
};

export default HeroSection;
