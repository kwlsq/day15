import ButtonCapsule from "../../../../components/ButtonCapsule";
import Footer from "../../../../components/footer";

const FooterSection = () => {
  return (
    <div className="bg-[#0B0C0E] text-[#F4F7FA] px-[8.5em] py-[4em] ">
      <div className="flex justify-between items-center font-medium mb-30">
        <div>
          <p className="text-[80px]">Have something in mind?</p>
          <span className="flex items-center gap-2 text-[80px]">
            <img
              src="https://placehold.co/80x80/webp"
              alt="photo of website owner"
              className="rounded-full"
            />
            let’s build it together.
          </span>
        </div>
        <ButtonCapsule
          text="Get in touch"
          bgColor="#F4F7FA"
          fontColor="#0B0C0E"
        ></ButtonCapsule>
      </div>
      <Footer />
    </div>
  );
};

export default FooterSection;
