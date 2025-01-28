
const About = () => {
  const attend = ["Content Creators", "Gamers", "Game Developer", "Designer", "3D / 2D Artist", "Writers", "Cinematographer", "Developers", "Animators", "PMs", "VFx Artists", "Community Managers", "Motion Designers", "Social Media Managers", "Voice Artist"]
  return (
    <section className="lg:px-24 px-4">
      <div data-aos="fade-up-left" className="my-6 sm:mx-4 text-center">
        <div className="p-4 rounded-md text-[#4E8471] bg-[#ECFCF4] w-40 text-center text-sm">
          What is Edenn?
        </div>
        <h1 className="lg:text-6xl text-3xl text-[#0D4626] font-bold my-3">One platform for all creatives in underserve regions</h1>
        <p className="lg:text-lg lg:w-1/2 mx-auto">Edenn is your all-in-one platform for Africa’s creative and interactive media industry. </p>
      </div>
      <div data-aos="fade-down-left" id="about" className="bg-white lg:flex p-6 justify-between rounded-[28px]">
        <div className="lg:w-[55%] lg:order-1 my-auto">
          <h3 className="lg:text-4xl text-2xl font-bold">The ultimate tool for artists, designers, and creators</h3>
          <p className="my-6 lg:text-xl">Edenn is a platform that connects African tech creatives to jobs, gigs, and projects across the digital economy. Designed for industries like gaming, media, and creative tech, Edenn features a job board shared by individuals sourcing talents for gigs and makes it easy to search, rate, and locate creatives by region or find talent anywhere. <br /> <br />
            We bridge the gap between talent and employers in underserved regions, empowering creatives to access meaningful opportunities.</p>
          <button className="text-white sm:hidden bg-[#7247B3] p-3 rounded-md text-sm">Download the App</button>
        </div>
        <div className="lg:w-1/2 lg:order-0 my-auto">
          <img className="" src="/images/about-img.png" alt="" />
        </div>
      </div>

      <div className="lg:flex justify-between my-6">
        <div data-aos="flip-left"  id="abt1" className="lg:w-[48%] lg:px-20 px-10 text-white pt-10 bg-[#1C1A1A] lg:rounded-[28px] rounded-[16px]">
          <h1 className="lg:text-4xl text-2xl mb-6 font-bold">Search, rate and locate tech creatives anywhere.</h1>
          <img src="/images/abt-1.png" className=" mx-auto" alt="" />
        </div>
        <div data-aos="flip-right" id="abt2" className="lg:w-[48%] bg-[#7247B3] lg:px-20 px-10 sm:mt-6 pt-10 border border-[#7247B3] rounded-[28px]">
          <h1 className="lg:text-4xl text-white text-2xl mb-6 font-bold">Source for job and gig opportunities across Africa.</h1>
          <img src="/images/abt-2.png" className=" mx-auto" alt="" />
        </div>
      </div>

      <div className="lg:flex justify-between lg:my-10 my-6">
        <div data-aos="flip-up" id="abt4" className="lg:w-[48%] lg:px-20 px-10 text-white pt-10 bg-[#1C1A1A] lg:rounded-[28px] rounded-[16px]">
          <h1 className="lg:text-4xl text-2xl mb-6 font-bold">Share job or gigs for different roles and stacks.</h1>
          <img src="/images/abt.png" className=" mx-auto" alt="" />
        </div>
        <div data-aos="flip-down" id="abt1" className="lg:w-[48%] bg-[#7247B3] lg:px-20 px-10 sm:mt-6 pt-10 border border-[#7247B3] rounded-[28px]">
          <h1 className="lg:text-4xl text-white text-2xl mb-6 font-bold">A community people in the creative tech industry.</h1>
          <img src="/images/abt-3.png" className=" mx-auto" alt="" />
        </div>
      </div>
      <div data-aos="zoom-in-up" id="abt3" className="my-6 rounded-[28px] lg:px-20 px-4 py-12">
        <p className="text-[#FFFFFF] font-medium text-4xl text-center mx-auto lg:w-72">Who should be on Edenn?</p>
        <div className="flex justify-between flex-wrap mt-6">
          {attend.map((single, index) => <div key={index} className="border text-white rounded-md my-2 lg:px-8 bg-[#FFFFFF1A] flex justify-evenly border-[#FFFFFF1A] p-3">
            <img src="/images/Vector.png" className="w-6 my-auto h-4 mr-4" alt="" />
            <p className="lg:text-xl">{single}</p>
          </div>)}
        </div>
      </div>
    </section>
  );
};

export default About;