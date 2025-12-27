'use client';

// Components
import Navbar from './components/Navbar';

// Next JS
import Image from 'next/image';

// Assets
import polygons from './assets/polygons.svg';
import gradient from './assets/gradient.webp';
import macScreen from './assets/mac-screen.webp';
import btnGradient from './assets/btn-gradient.svg';

// Icons
import { PiArrowRight } from 'react-icons/pi';

const page = () => {
  return (
    <div className="font-inter relative flex h-full w-full flex-col bg-[#020B05] text-white">
      <Navbar />

      {/* Main Content */}
      <main className="relative flex min-h-screen min-w-screen flex-col items-center justify-center">
        {/* Polygons */}
        <Image src={polygons} alt="polygons" className="absolute top-0 left-0 brightness-150" />
        <Image src={polygons} alt="polygons" className="absolute top-0 right-0 scale-x-[-1] transform brightness-150" />

        {/* Hero Section */}
        <div className="flex h-screen w-screen flex-col items-center justify-center gap-[2rem]">
          <h1 className="bg-gradient-to-b from-[#e2e4e1] to-[#676a67] bg-clip-text text-7xl leading-[1.2] font-medium text-transparent">Amazing!</h1>

          <h2 className="text-xl text-[#f1f1ef]/60">
            Upper offers a comprehensive suite of tools to
            <br />
            optimize your expense management workflow.
          </h2>

          <button className="group relative flex cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-full border border-[#333a33] bg-[#214b3b]/20 px-6 py-3 text-base transition duration-300">
            <div className="absolute top-0 left-1/2 h-[1px] w-16 rounded-full bg-gradient-to-r from-[#6FFFD4]/20 to-[#6FFFD4]"></div>
            <Image src={btnGradient} alt="btnGradient" className="absolute bottom-0 h-full w-full object-cover transition-all duration-300 group-hover:bottom-3 group-hover:scale-150" />
            Get Started Now
            <PiArrowRight />
          </button>
        </div>

        {/* Main Images */}
        <Image src={gradient} alt="gradient" className="-mt-[10rem] w-full" />
        <Image src={macScreen} alt="macScreen" className="-mt-[13rem] w-2/3" />
      </main>
    </div>
  );
};

export default page;
