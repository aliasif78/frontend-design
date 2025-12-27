'use client';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

// Next JS
import Image from 'next/image';

// Assets
import polygons from './assets/polygons.svg';
import gradient from './assets/gradient.webp';
import macScreen from './assets/mac-screen.webp';

const page = () => {
  return (
    <div className="font-inter relative flex h-full w-full flex-col bg-[#020B05] text-white">
      <Navbar />

      {/* Main Content */}
      <main className="relative flex min-h-screen min-w-screen flex-col items-center justify-center pb-[200rem]">
        {/* Polygons */}
        <Image src={polygons} alt="polygons" className="absolute top-0 left-0 brightness-150" />
        <Image src={polygons} alt="polygons" className="absolute top-0 right-0 scale-x-[-1] transform brightness-150" />

        {/* Hero Section */}
        <HeroSection />

        {/* Main Images */}
        <Image src={gradient} alt="gradient" className="-mt-[25vh] w-full" />
        <Image src={macScreen} alt="macScreen" className="-mt-[28vh] w-2/3" />
      </main>
    </div>
  );
};

export default page;
