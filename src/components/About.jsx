
const About = () => {
  const attend = ["Content Creators", "Gamers", "Game Developer", "Designer", "3D / 2D Artist", "Writers", "Cinematographer", "Developers", "Animators", "PMs", "VFx Artists", "Community Managers", "Motion Designers", "Social Media Managers", "Voice Artist"]
  return (
    <section className="lg:px-24 px-4">
      <div className="my-6 lg:w-1/2 sm:mx-4">
        <div className="p-4 rounded-md text-[#4E8471] bg-[#ECFCF4] w-40 text-center text-sm">
          What is Edenn?
        </div>
        <h1 className="lg:text-6xl text-3xl text-[#0D4626] font-medium my-3">One social platform for all creatives</h1>
        <p>Edenn makes it easy to find and connect with different types of creatives in the tech space</p>
      </div>
      <div id="about" className="bg-white lg:flex p-6 justify-evenly rounded-[28px]">
        <div className="lg:w-[40%] lg:order-1">
          <h3 className="lg:text-4xl text-2xl font-bold">The ultimate tool for artists, designers, and creators</h3>
          <p className="my-6">Edenn is your all-in-one platform for Africa’s creative and interactive media industry. Connect with top talent, find creatives, hire creators, connect with gamers, and collaborate seamlessly.Join us in shaping Africa’s creative space and beyond.</p>
          <button className="text-[#121212] sm:hidden bg-[#B684F7] p-3 rounded-md text-sm">Download the App</button>
        </div>
        <div className="lg:w-1/2 lg:order-0 my-auto">
          <img className="mx-auto lg:w-[60%]" src="/images/about-img.png" alt="" />
        </div>
      </div>
      <div className="lg:flex justify-between my-6">
        <div id="abt1" className="lg:w-[48%] lg:px-20 px-10 text-white pt-10 bg-[#7247B3] lg:rounded-[28px] rounded-[16px]">
          <h1 className="lg:text-4xl text-2xl mb-6 font-bold">Search, rate and locate creative by regions.</h1>
          <img src="/images/abt-1.png" className=" mx-auto" alt="" />
        </div>
        <div id="abt2" className="lg:w-[48%] bg-[#FFF0C4] lg:px-20 px-10 sm:mt-6 pt-10 border border-[#B6F3DB] rounded-[28px]">
          <h1 className="lg:text-4xl text-2xl mb-6 font-bold">A creative hub for gamers & pro -gamers</h1>
          <img src="/images/abt-2.png" className=" mx-auto" alt="" />
        </div>
      </div>
      <div id="abt3" className="my-6 rounded-[28px] lg:px-20 px-4 py-12">
        <p className="text-[#FFFFFF] font-medium text-2xl lg:w-52">Who should be on Edenn?</p>
        <div className="flex justify-between flex-wrap mt-6">
          {attend.map((single, index) => <div key={index} className="border text-white rounded-md my-2 px-4 bg-[#FFFFFF1A] flex justify-evenly border-[#FFFFFF1A] p-3">
            <img src="/images/Vector.png" className="w-6 my-auto h-4 mr-4" alt="" />
            <p className="text-sm">{single}</p>
          </div>)}
        </div>
      </div>
    </section>
  );
};

export default About;