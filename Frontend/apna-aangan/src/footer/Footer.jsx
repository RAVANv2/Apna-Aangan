const Footer = () => {
  return (
    <div className="footer bg-theme-green text-theme-beige">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 lg:px-24 py-5">
        <div className="flex flex-col md:flex-row items-center gap-5">
          {/* <img src="./icons/logo.svg" alt="logo" className="w-20" /> */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-3xl font-custom">Apna Aangan</div>
            <div className="text-sm">Caring like a Mother</div>
          </div>
        </div>
        <div className="flex flex-wrap items-end gap-5 footer-icons">
          <a href="tel:+91-9876543210" className="text-sm">
          <img src="./icons/phone.svg" alt="phone" className="w-5 inline-block fill-theme-yellow" />
          </a>
          <a href="mailto:apnaaangan@gmail.com" className="text-sm fill-theme-yellow">
          <img src="./icons/mail.svg" alt="mail" className="w-5 inline-block" />
          </a>
          <a href="https://www.facebook.com" className="text-sm text-theme-yellow">
          <img src="./icons/facebook.svg" alt="facebook" className="w-5 inline-block" />
          </a>
          <a href="https://www.instagram.com" className="text-sm fill-theme-yellow">
          <img src="./icons/instagram.svg" alt="instagram" className="w-5 inline-block" />
          </a>
          {/* <a href="https://www.twitter.com" className="text-sm fill-theme-yellow">
          <img src="./icons/twitter.svg" alt="twitter" className="w-5 inline-block" />
          </a> */}
          <a href="https://www.linkedin.com" className="text-sm fill-theme-yellow">
          <img src="./icons/linkedin.svg" alt="linkedin" className="w-5 inline-block" />
          </a>
          <a href="https://www.youtube.com" className="text-sm fill-theme-yellow">
          <img src="./icons/youtube.svg" alt="youtube" className="w-5 inline-block" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer; 