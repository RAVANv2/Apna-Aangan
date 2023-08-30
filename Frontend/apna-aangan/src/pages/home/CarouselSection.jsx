import { useState, useRef, useEffect } from "react";

// Data
import data from "./carousel_data.json";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const projectContent = data.resources;

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
                    className="carousel-item text-center relative min-w-[90%] h-auto snap-start"
                  >
                    <a
                      href={resource.link}
                      className="h-full w-full aspect-video block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 rounded-3xl"
                      style={{
                        backgroundImage: `url(${resource.imageUrl || ""})`,
                      }}
                    >
                      <img
                        src={resource.imageUrl || ""}
                        alt={resource.title}
                        className="w-full aspect-video hidden"
                      />
                    </a>
                    <a
                      href={resource.link}
                      className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black/40 z-10 rounded-3xl"
                    >
                      <h3 className="text-white py-6 px-3 mx-auto text-xl">
                        {resource.title}
                      </h3>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center italic px-3 my-2 border-solid border-theme-green text-theme-green">
          {projectContent[currentIndex].description}
            </div>
        </div>
  );
};

export default Carousel;