import { BlackPillButton } from "../../components/Buttons";
import FramedImage from "../../components/FramedImage";

const Hero = ({carouselRef}) => {
  return (
    <div className="hero relative flex flex-col justify-center items-center py-4">
      <div className="relative flex justify-center">
        <FramedImage
          src="images/hero.jpeg"
          alt="hero"
          color="light"
          className="h-auto max-h-[75vh] w-full sm:w-[100%] md:w-[90%] lg:w-[80%]"
          overlayT
        />
      </div>
      <div className="hero_content absolute w-full z-[12] top-[15%] pl-10 md:pl-[15%] lg:pl-[20%] xl:pl-[20%]">
        <h1 className="hero_title font-custom lg:text-5xl md:text-3xl text-2xl text-theme-beige">
          WELCOME TO <br /> Apna Aangan
        </h1>
      </div>
      <div>
        <BlackPillButton targetRef={carouselRef} className="mt-4 flex flex-row items-center content-center text-theme-beige"><div>Explore</div> <img src="./icons/angles-down-solid.svg" alt="scroll" className="h-6 w-auto p-1"></img></BlackPillButton>
      </div>
    </div>
  );
};

export default Hero;
