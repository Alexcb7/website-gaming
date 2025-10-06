import 'boxicons/css/boxicons.min.css';

const header = () => {
  return (
  <header className="py-1 px-7 flex justify-between items-center fixed top-0 z-50 w-full border-b-[0.3px] border-[#babaff]">

      {/* Left Section */}

    <div className="flex lg:gap-14 gap-4 items-center">
        <img className="md:w-16 w-12"
        src="public\images\logo.png" alt="logo-img" />

      <div className="hidden md:flex gap-5 items-center">
        <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
          PLAY NOW
        </button>

        <button className="h-8 px-6 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
          PLAY NOW
        </button>
      </div>
    </div>

    {/* Right Section Desktop */}
    <nav className='hidden md:flex lg:gap-8 gap-4'>
      <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-user-circle'></i> Avatar
      </a>

      <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-diamond'></i> Arena
      </a>

      <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bxs-chevrons-up'></i> Levels
      </a>


      <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-shopping-bag'></i> Shop
      </a>
    </nav>

    { /* Mobile menu button - visible only on mobile */ }

    <button className='text-3xl p-2 md:hidden'>
      <i class='bx bx-menu'></i>
    </button>

    { /* Mobile menu - Hidden by default */ }
  <div className='fixed top-14 right-0 left-0 bg-black p-5 md:hidden'>
      <nav className='flex flex-col gap-4 items-center '>
        <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-user-circle'></i> Avatar
        </a>

        <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-diamond'></i> Arena
        </a>

        <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bxs-chevrons-up'></i> Levels
        </a>


        <a href="#" className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full text-nowrap">
          <i class='bx bx-shopping-bag'></i> Shop
        </a>
      </nav>
    </div>
    
  </header>
  )
}

export default header
