import {
  galleryListRow1,
  galleryListRow2,
} from "../../../../consts/ImagesList";

const GallerySection = () => {
  return (
    <div className="py-30">
      <div className="flex space-x-10 ">
        {galleryListRow1.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[444px] h-[306px] bg-[#C7D0D9] px-[48px] py-[56px] shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-10 pt-20 translate-x-[-5%]">
        {galleryListRow2.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[444px] h-[306px] bg-[#C7D0D9] px-[48px] py-[56px] shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
