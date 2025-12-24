'use client';

// React
import React from 'react';

// Next JS
import Image from 'next/image';

// Assets
import bg from './assets/bg.webp';

const page = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Image src={bg} alt="bg" priority className="absolute inset-0 h-full w-full object-cover" />

      <div className="relative z-10 h-[85vh] w-[85vw] overflow-hidden rounded-4xl border border-white bg-white/30 bg-gradient-to-br from-[#984EFF]/30 to-[#DFDBE9]/30 backdrop-blur-[7px]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">QUIZ TOWER</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
