const FooterSection = () => {
  return (
    <div className="bg-[#0B0C0E] text-[#F4F7FA] px-[8.5em] py-[4em]">
      <div className="flex justify-between items-center font-medium">
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
        <button className="height-[70px] width-[190px] bg-[#F4F7FA] text-[#0B0C0E] py-[24px] px-[48px] rounded-[170px] cursor-pointer">
          Get in touch
        </button>
      </div>
      <div className="flex justify-between pt-30 text-[18px] text-[#C7D0D9]">
        <p>Build with 💖 by Brightscout & Ayush </p>
        <ul className="flex gap-5 *:hover:text-[#F4F7FA] cursor-pointer">
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Webflow</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
