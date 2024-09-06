
const Hero = () => {
  return (
    <section id="hero" className="bg-green lg:px-24 lg:py-6 ">
      <div className="flex sm:p-4 justify-between">
        <img className="w-24" src="/images/logo.png" alt="" />
      </div>
      <div className="lg:flex sm:px-8 justify-between sm:mt-20">
        <div className="my-auto lg:w-[65%] sm:text-center">
          <h1 className="lg:text-7xl text-5xl text-white font-medium">A paradise for people in the creative tech space</h1>
          <p className="text-white lg:w-1/2 my-8">Edenn makes it easy to find and connect with different types of creatives in the tech space</p>
          <div className="lg:flex">
            <div className="flex bg-white lg:w-36 w-1/2 p-1 justify-evenly sm:mx-auto rounded-md">
              <img className="w-6 my-auto h-6" src="/images/google_icon.png" alt="" />
              <div>
                <p className="text-xs">Get on</p>
                <p className="font-bold">Playstore</p>
              </div>
            </div>
            <div className="flex lg:ml-4 bg-white lg:w-36 w-1/2 sm:mt-4 sm:mx-auto p-1 justify-evenly rounded-md">
              <img className="w-6 my-auto h-6" src="/images/white_Apple.png" alt="" />
              <div>
                <p className="text-xs">Get on</p>
                <p className="font-bold">IOS Store</p>
              </div>
            </div>
          </div>
        </div>
        <img className="w-80 lg:block hidden" src="/images/hero-img.png" alt="" />
        <img className="w-80 lg:hidden block mt-6 mx-auto" src="/images/hero-mobile.png" alt="" />

      </div>
    
    </section>
  );
};

export default Hero;