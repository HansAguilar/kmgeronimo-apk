import './App.css';
import landing from './assets/landing.png'; 
import appointment from './assets/appointment.png'; 
import layered from './assets/wave.png'; 

function App() {
  return (
    <>
      {/* Version 1 */}
      {/* <div className="bg-cover bg-center relative h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-full text-white relative z-10">
          <h1 className="text-4xl font-bold mb-4 tracking-wider">The Future of <span className='text-[#4bcce0] underline'>Dental Care</span> is Here.</h1>
          <p className="text-lg mb-8">Download our KM Geronimo App: Book & manage appointments, convenient and simple.</p>
          <a
            href="/your-download-link"
            className="bg-[#0ca6bf] hover:bg-[#0e8ca1] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Download Now
          </a>
        </div>
      </div> */}


      {/* Version 2 */}
      <div className="bg-contain aspect-auto relative min-h-screen" style={{ backgroundImage: `url(${layered})` }}>
        {/* <div className="fixed inset-0 w-full h-screen bg-gradient-to-br from-[#1693a7] to-[#2fc8e0]"></div> */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white relative z-10 w-full container mx-auto">
          <div className='flex flex-row items-center w-full gap-4 justify-center max-md:flex-wrap-reverse p-4'>
            <div className='flex-1'>
              <h1 className="text-4xl max-sm:text-lg max-lg:text-xl font-bold mb-4 text-[#5b5b5b]">The Future of <span className='text-[#4bcce0] underline'>Dental Care</span> is Here.</h1>
              <p className="text-lg max-sm:text-[0.60rem] max-lg:text-sm mb-8 w-[28rem] m-auto text-[#5b5b5b]">Download our KM Geronimo App: Book & manage appointments, convenient and simple.</p>
              <button
                onClick={() => window.location.href = 'https://expo.dev/accounts/jlbabon12/projects/km-geronimo/builds/fc59f82c-1d67-4deb-ba9f-95eac5219790?fbclid=IwAR17ugwayRrLdqp8YNhBrS7V2Gh5qPn7dtivXj3rcQHx6UBTCYVUJaI2bjo'}
                className="animate-bounce bg-transparent border-[#5b5b5b] border-2 hover:bg-[#ffffff] text-[#5b5b5b] shadow-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Download Now
              </button>
            </div>

            <div className='flex relative items-center'>
              <img src={landing} className='max-lg:h-[24rem] max-md:h-[18rem] max-sm:h-[14rem] h-[34rem] z-20' />
              <img src={appointment} className='max-lg:h-[22rem] max-md:h-[16rem] max-sm:h-[12rem] h-[32rem] z-0 relative max-md:right-0 right-7' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App