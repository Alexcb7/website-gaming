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
      
      <div>
        <img src='public\images\illu-text.png' alt='illu-text'
            className='md:w-[30rem] w-[20rem]'

        />
        
      </div>
    </main>
  );
}

export default Hero;
