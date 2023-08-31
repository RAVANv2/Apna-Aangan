import { useState, useRef, useEffect } from 'react';
import "./CarouselSection.css";

// Data
import data from "./carousel_data.json";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="relative overflow-hidden w-full mx-auto sm:w-[100%] md:w-[90%] lg:w-[80%]">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-black/50 rounded-3xl text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-black/50 rounded-3xl text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center min-w-[90%] h-auto snap-start p-2 rounded-3xl border-solid border-2 border-theme-green flex flex-col justify-center items-center"
              >
                <div className="h-full w-full aspect-video flex flex-row bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0">
                  <img
                    src={resource.titleImageUrl || ""}
                    alt={resource.title}
                    className="w-3/5 aspect-video rounded-2xl object-cover"
                  />
                  <div className="w-2/5 aspect-square block transition-opacity duration-300 rounded-3xl">
                    <h3 className="text-black py-6 px-3 mx-auto text-xl">
                      {resource.title}
                    </h3>
                  </div>
                </div>
                <div className="gallery-row flex flex-row w-full py-2 overflow-x-auto">
                  {resource.images.map((image, index) => {
                    return (
                      <div
                        className="w-1/4 h-full aspect-square shrink-0 p-1 rounded-2xl"
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
                  <di className="absolute right-0 align-middle w-1/6 bg-theme-beige text-theme-green">
                    View All
                  </di>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;