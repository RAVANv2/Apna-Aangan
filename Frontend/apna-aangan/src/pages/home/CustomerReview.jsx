import Carousel from "../../components/Carousel";
import FramedVideo from "../../components/FramedVideo";
import data from "./customer_data.json";
const CustomerReview = () => {
  return (
    <div className="customer-review py-8">
      <div className="text-center font-bold">LISTEN TO WHAT OUR CUSTOMERS SAY ABOUT US</div>
      <Carousel >
        {data.reviews.map((review, index) => {
          return(
          <div className="max-w-full min-w-full flex flex-col md:flex-row items-center pt-10 gap-5 gap-y-8 px-4 md:px-10 lg:px-24 text-center" key={index}>
            <div className="w-full flex flex-row flex-wrap bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0 align-top">
              <div className="w-full md:w-3/5 xl:w-1/2 md:order-1">
                <FramedVideo 
                  light={review.thumbnailURL}
                  url={review.videoURL}
                  controls={true}
                  />
              </div>
              <div className="md:w-2/5 xl:w-1/2 md:order-2 text-left px-3">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-custom text-theme-green">{review.title}</h3>
                <p className="italic px-3 my-2 border-l-2 border-solid border-theme-green">
                  {review.description}
                </p>
                <div className="ml-5"> ~{review.customer_name}</div>
              </div>
            </div>
          </div>)
        })}
    </Carousel>
    </div>
  );
};

export default CustomerReview;
