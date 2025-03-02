import {
  galleryListRow1,
  galleryListRow2,
} from "../../../../consts/ImagesList";

const GallerySection = () => {
  console.log(galleryListRow2);
  return (
    <div className="py-30">
      <div className="flex space-x-4 ">
        {galleryListRow1.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[444px] h-[306px] bg-[#C7D0D9] px-[48px] py-[56px] shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-4  pt-10 translate-x-[-5%]">
        {galleryListRow2.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[444px] h-[306px] bg-[#C7D0D9] px-[48px] py-[56px] shadow-lg"
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
