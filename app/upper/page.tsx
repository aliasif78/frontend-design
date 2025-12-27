'use client';

// Next JS
import Image from 'next/image';

// Assets
import polygons from './assets/polygons.svg';

// Components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ThingsUsersLove from './components/ThingsUsersLove';
import DashboardSection from './components/DashboardSection';
import ExpenseReportSection from './components/ExpenseReportSection';
import IntegrationsSection from './components/IntegrationsSection';

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

        {/* Supporting Sections */}
        <DashboardSection />

        <div className="mt-[10rem] flex w-[80vw] flex-col gap-[10rem]">
          <ThingsUsersLove />
          <ExpenseReportSection />
          <IntegrationsSection />
        </div>
      </main>
    </div>
  );
};

export default page;
