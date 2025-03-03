import { NavLink } from "react-router-dom";
import ButtonCapsule from "../../../../components/ButtonCapsule";
import Footer from "../../../../components/footer";

const FooterSection = () => {
  return (
    <div className="bg-[#0B0C0E] text-[#F4F7FA] px-[8.5em] py-[4em] ">
      <div className="flex justify-between items-center font-medium mb-30">
        <div>
          <p className="text-[80px]">Have something in mind?</p>
          <span className="flex items-center gap-4 text-[80px]">
            <img
              width={100}
              src="../../../../public/prof-pic-small.png"
              alt="photo of website owner"
              className="rounded-full"
            />
            let’s build it together.
          </span>
        </div>
        <NavLink to="/contact">
          <ButtonCapsule
            text="Get in touch"
            bgColor="#F4F7FA"
            fontColor="#0B0C0E"
          ></ButtonCapsule>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default FooterSection;
