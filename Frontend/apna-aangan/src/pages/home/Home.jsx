import Hero from "./Hero";
import CarouselSection from "./CarouselSection";
import CustomerReview from "./CustomerReview";
const Home = () => {
  return (
    <div className="px-2 md:px-14 py-5">
      <Hero />

      <img
        src="./icons/line.svg"
        alt="Line"
        className="w-[80%] h-[4px] mx-auto my-5"
      />
    <div className="customer-review py-5">
    <div className="text-center font-bold text-3xl leading-8 font-semibold  text-theme-green font-custom">
          What do we do at <br />
          Apna Aangan?
</div>
      {/* <div className="flex flex-col md:flex-row items-center pt-10 gap-3 gap-y-5 mt-10 px-4 md:px-10 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-8 font-semibold  text-theme-green font-custom md:w-2/4 md:order-2">
          What do we do at <br />
          Apna Aangan?
        </h2>
        <p className="md:w-1/4 md:order-1">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          libero id eros aliquam, sed ultricies
        </p>
        <p className="md:w-1/4 md:order-3">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          libero id eros aliquam, sed ultricies
        </p>
      </div> */}

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
