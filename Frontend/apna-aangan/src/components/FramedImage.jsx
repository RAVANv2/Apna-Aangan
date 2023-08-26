const FramedImage = ({ src, alt, color, className, overlayB, overlayT}) => {
  return (
    <div className={`framed-image ${className} relative`}>
      <img src={src} alt={alt} className="h-full w-full object-cover p-1" />
      {overlayB && <div className={`m-1 w-[99%] overlay absolute z-10 bottom-0 h-1/4 bg-gradient-to-t from-black/80 to-transparent`}></div>}
      {overlayT && <div className={`m-1 w-[99%] overlay absolute z-10 top-0 h-3/5 bg-gradient-to-t to-black/50 from-transparent`}></div>}
      <img
        src={`images/frame-${color}.svg`}
        alt="frame"
        className="absolute max-w-full max-h-full min-w-full min-h-full z-[11] top-0 left-0"
      />
    </div>
  );
};

export default FramedImage;
