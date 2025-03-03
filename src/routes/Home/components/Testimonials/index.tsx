import { testimonialsList } from "../../../../consts/TestimonialsList";
import { TextWrapper } from "../../../../consts/UtilStyling";

const TestimonialSection = () => {
  return (
    <TextWrapper>
      <h3 className="text-[40px] font-medium">Testimonials</h3>
      <div className="ml-50 flex flex-col gap-15">
        {testimonialsList.map((testimonial, index) => (
          <div key={index}>
            <p className="text-[27px] font-normal">{testimonial.description}</p>
            <div className="flex gap-5 pt-5">
              <img
                width={100}
                src={testimonial.photoSource}
                alt={testimonial.alt}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h4 className="font-medium text-[18px]">{testimonial.name}</h4>
                <p className=" text-[14px]">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </TextWrapper>
  );
};

export default TestimonialSection;
