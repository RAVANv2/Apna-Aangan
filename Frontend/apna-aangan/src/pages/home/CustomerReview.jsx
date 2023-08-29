import FramedVideo from "../../components/FramedVideo";

const CustomerReview = () => {
  return (
    <div className="customer-review py-8">
      <div className="text-center font-bold">LISTEN TO WHAT OUR CUSTOMERS SAY ABOUT US</div>
      <div className="flex flex-col md:flex-row items-center pt-10 gap-5 gap-y-8 px-4 md:px-10 lg:px-24 text-center">
        <div className="w-full md:w-3/5 xl:w-1/2 md:order-1">
          <FramedVideo 
            light={'./images/thumbnail.jpeg'}
            url={'https://joy1.videvo.net/videvo_files/video/free/2019-09/large_watermarked/190828_27_SuperTrees_HD_17_preview.mp4'}
            controls={true}
            />
        </div>
        <div className="md:w-2/5 xl:w-1/2 md:order-2 text-left px-3">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-custom text-theme-green">Caring like a Mother</h3>
          <p className="italic px-3 my-2 border-l-2 border-solid border-theme-green">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            libero id eros aliquam, sed ultricies
          </p>
          <div className="ml-5"> ~Ishaan</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
