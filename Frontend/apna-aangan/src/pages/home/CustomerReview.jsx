const CustomerReview = () => {
  return (
    <div className="customer-review">
      <div>Listen to what our customers say about us</div>
      <div className="flex flex-col md:flex-row items-center pt-10 gap-3 gap-y-5 mt-10 px-4 md:px-10 lg:px-24 text-center">
        <div className="md:w-2/4 md:order-1">
          <img
            src="./images/hero.jpeg"
            alt="hero"
            className="h-auto max-h-[75vh] w-full sm:w-[100%] md:w-[90%] lg:w-[80%]"
          />
        </div>
        <div className="md:w-2/4 md:order-2">
          <h3 className="text-xl font-custom">Caring like a Mother</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            libero id eros aliquam, sed ultricies
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
