import { FaQuoteRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Tcarousel = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} showArrows={false} className="w-[646px]">
      <div className="w-[646px] flexible flex-col items-start gap-5">
        <div className="bg-[#16213E] text-white p-3 w-[80px] h-[80px] flexible">
          <FaQuoteRight className="w-[32px] h-[32px]" />
        </div>
        <p className="text-start">
          Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae
          massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque
          erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant
          morbi tristique
        </p>
        <div className="text-[#16213E]">
          <h5 className="text-[22px] leading-[26px] font-[500] text-start">Katy Grey </h5>
          <p className="text-[14px] leading-[15px]">CEO Grey Industries</p>
        </div>
      </div>
      <div className="w-[646px] flexible flex-col items-start gap-5">
        <div className="bg-[#16213E] text-white p-3 w-[80px] h-[80px] flexible">
          <FaQuoteRight className="w-[32px] h-[32px]" />
        </div>
        <p className="text-start">
          Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae
          massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque
          erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant
          morbi tristique
        </p>
        <div className="text-[#16213E]">
          <h5 className="text-[22px] leading-[26px] font-[500] text-start">Katy Grey </h5>
          <p className="text-[14px] leading-[15px]">CEO Grey Industries</p>
        </div>
      </div>
      <div className="w-[646px] flexible flex-col items-start gap-5">
        <div className="bg-[#16213E] text-white p-3 w-[80px] h-[80px] flexible">
          <FaQuoteRight className="w-[32px] h-[32px]" />
        </div>
        <p className="text-start">
          Suspendisse tortor enim, varius et porttitor sit amet, posuere vitae
          massa. Proin ac quam eu erat semper sagittis in vitae elit. Nam neque
          erat, semper vel ultrices in, finibus eu magna. Pellentesque habitant
          morbi tristique
        </p>
        <div className="text-[#16213E]">
          <h5 className="text-[22px] leading-[26px] font-[500] text-start">Katy Grey </h5>
          <p className="text-[14px] leading-[15px]">CEO Grey Industries</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Tcarousel;
