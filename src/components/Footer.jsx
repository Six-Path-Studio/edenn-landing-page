
const Footer = () => {
  return (
    <footer className="lg:mx-24 mx-4 mt-6 mb-10">
      <div className="bg-white text-[#0D0D0D] lg:p-6 p-4 lg:rounded-[29px] rounded-[8px] mb-6 lg:flex justify-between">
        <div className="lg:flex my-auto lg:w-[40%] justify-between">
          <p className="sm:my-2">Contact Us</p>
          <p className="sm:my-2">Terms and Condition</p>
          <p className="sm:my-2">Privacy Policy</p>
        </div>
        <div className="flex lg:w-[20%] w-[60%] justify-between">
          <img className="w-8 h-8" src="/images/icons/instagram.png" alt="" />
          <img className="w-8 h-8" src="/images/icons/twitter.png" alt="" />
          <img className="w-8 h-8" src="/images/icons/linkedin.png" alt="" />
          <img className="w-8 h-8" src="/images/icons/discord.png" alt="" />

        </div>
        <div className="my-auto sm:my-3">
          <p className="lg:text-xs">@2024</p>
        </div>
      </div>
      <div className="">
        <img className="mx-auto sm:w-[60%]" src="/images/logos.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;