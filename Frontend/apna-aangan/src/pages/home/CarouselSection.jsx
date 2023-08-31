import "./CarouselSection.css";

import data from "./carousel_data.json";
import Carousel from '../../components/Carousel';

const CarouselSection = () => {
  return (
    <Carousel>
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center min-w-[90%] h-auto snap-start p-2 mx-1 rounded-3xl border-solid border-2 border-theme-green flex flex-col justify-center items-center relative"
              >
                <div className="w-full flex flex-row flex-wrap bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 align-top">
                  <img
                    src={resource.titleImageUrl || ""}
                    alt={resource.title}
                    className="w-full sm:w-1/2 aspect-square rounded-2xl object-cover"
                  />
                  <div className="sm:w-1/2 block transition-opacity duration-300 rounded-3xl">
                    <h3 className="text-black py-6 px-3 mx-auto text-2xl">
                      {resource.title}
                    </h3>
                    <p className="text-black px-3 mx-auto">
                      {resource.description}
                    </p>
                  </div>
                </div>
                <div className="gallery-row relative flex flex-row items-center w-full overflow-x-scroll rounded-md">
                  {resource.images.map((image, index) => {
                    return (
                      <div
                        className="w-[19%] h-full pt-2 px-1 aspect-square lg:aspect-video shrink-0 rounded-2xl"
                        key={index}
                      >
                        <img
                          className="w-full h-full object-cover rounded-md"
                          src={image || ""}
                          alt="Gallery"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="absolute text-sm right-4 bottom-0 align-middle pt-2 text-theme-green cursor-pointer">
                    Click to view all...
                </div>
              </div>
            );
          })}
        </Carousel>
  );
};

export default CarouselSection;