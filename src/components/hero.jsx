import React from 'react';

function Hero() {
  return (
    <main className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      <video
        src="/videos/hero.mp4"
        // autoPlay
        // loop
        muted
        playsInline
        className="w-full h-full object-cover absolute top-0 first-letter:left-0 -z-10"
      ></video>
      
      <div className='absolute bottom-[15%] flex flex-col items-center gap-5'>
        <img src='public\images\illu-text.png' alt='illu-text'
            className='md:w-[30rem] w-[20rem]'
        />

        <h1 className='md:text:2xl text-1xl font-bold'>Explore, Capture, Conquer</h1>

        <div className='md:w-[75%] w-[60%] h-[0.1px] bg-[#baba]'></div>

        <button className="h-10 px-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
          PLAY NOW
        </button>
        
      </div>
    </main>
  );
}

export default Hero;
