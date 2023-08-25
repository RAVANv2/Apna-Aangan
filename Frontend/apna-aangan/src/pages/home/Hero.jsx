import FramedImage from "../../components/FramedImage";

const Hero = () => {
  return (
    <div className="hero flex flex-col justify-center items-center py-4">
      <div className="relative">
        <FramedImage
          src="images/hero.jpg"
          alt="hero"
          color="light"
          className="h-[500px] w-auto"
        />
      </div>
      <div className="hero_content absolute z-50">
        <h1 className="hero_title font-custom text-5xl text-theme-beige">
          WELCOME TO <br /> Apna Aangan
        </h1>
      </div>
    </div>
  );
};

export default Hero;
