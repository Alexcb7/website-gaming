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
    <nav>
      <a href="#">
        <i class='bx bx-user-circle'></i> Avatar
      </a>
    </nav>


    
  </header>
  )
}

export default header
