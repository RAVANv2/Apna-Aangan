import Hero from "./Hero";
import CarouselSection from "./CarouselSection";
import CustomerReview from "./CustomerReview";
import { useRef } from "react";
const Home = () => {

  const carouselRef = useRef(null);

  return (
    <div className="px-2 md:px-14 py-5">
      <Hero carouselRef={carouselRef}/>

      <img
        src="./icons/line.svg"
        alt="Line"
        className="w-[80%] h-[4px] mx-auto my-5"
      />
      <div className="customer-review py-5" ref={carouselRef}>
        <div className="text-center font-bold text-3xl leading-8 font-semibold  text-theme-green font-custom">
          What do we do at <br />
          Apna Aangan?
        </div>
        <CarouselSection />
      </div>

      <img
        src="./icons/line.svg"
        alt="Line"
        className="w-[80%] h-[4px] mx-auto my-5"
      />

      <CustomerReview />

      {/* <img
        src="./icons/line.svg"
        alt="Line"
        className="w-[80%] h-[4px] mx-auto my-5"
      /> */}
    </div>
  );
};

export default Home;
