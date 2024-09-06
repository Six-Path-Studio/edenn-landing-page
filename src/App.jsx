
import './App.css'
import About from './components/About'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <main className='bg-bg'>
        <Hero />
        <About />
        <section className='lg:mx-24 mx-4 bg-white lg:rounded-[20px] rounded-[16px] lg:p-10 p-4 mb-6'>
          <h1 className='font-bold lg:text-6xl text-3xl text-[#212337] mb-4'>Frequently Asked Questions</h1>
          <Faq />
        </section>
        <section className='lg:mx-24 mx-4'>
          <div id='app' className='lg:flex justify-evenly rounded-[20px]'>
            <div className='lg:w-[40%] sm:hidden'>
              <img className='mx-auto' src="/images/app-up.png" alt="" />
              <img className='mx-auto' src="/images/app-down.png" alt="" />
            </div>
            <div className='text-white p-6 my-auto lg:w-[60%]'>
              <h2 className='font-medium lg:text-6xl text-3xl'>Don’t hesitate any longer, download the Edenn app now!</h2>
              <p className='my-6'>Available on Google Play-store and Apple Store</p>
              <div>
                <button className='p-3 rounded-md bg-[#F5F5F5] mr-4 px-4 sm:w-full sm:mb-4 text-[#040404]'>Join Our Community</button>
                <button className='p-3 rounded-md bg-[#40A261] sm:w-full px-4 text-white'>Learn More</button>
              </div>
            </div>
            <img className='hidden mx-auto sm:block' src="/images/app-mobile.png" alt="" />

          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default App
