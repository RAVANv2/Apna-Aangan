const FramedImage = ({ src, alt, color, className }) => {
  return (
    <div className={`framed-image ${className} relative`}>
      <img
        src={`images/frame-${color}.svg`}
        alt="frame"
        className="absolute max-w-full max-h-full min-w-full min-h-full z-10 top-0 left-0 "
      />
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
};

export default FramedImage;
