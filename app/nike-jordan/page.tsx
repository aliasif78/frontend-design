"use client";

// Next JS
import Image from "next/image";

// Assets
import shoe from "./assets/shoe.webp";

const page = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between overflow-hidden text-nowrap sm:bg-green-300 md:bg-blue-300 lg:bg-red-300 xl:bg-red-500">
      {/* Titles */}
      <div className="font-inter flex flex-col text-center lg:mt-[6rem] xl:mt-[4rem] 2xl:mt-0">
        <h2 className="text-[110px] font-extrabold tracking-[-10px] text-transparent opacity-30 [-webkit-text-stroke:1px_black] [paint-order:stroke] lg:text-[145px] xl:text-[180px] 2xl:text-[210px]">
          THE NEW 2023
        </h2>

        <h1 className="z-10 -mt-[8rem] [background-image:linear-gradient(to_right,#4280CF_0%,#3975C0_8%,#0C315F_45%,#0A2444_59%,#03234B_82%,#4280CF_100%)] bg-clip-text text-[130px] font-extrabold tracking-[-10px] text-transparent lg:-mt-[11rem] lg:text-[170px] xl:-mt-[14rem] xl:text-[220px] 2xl:text-[250px]">
          AIR JORDAN
        </h1>
      </div>

      {/* Shoe Image */}
      <div className="absolute top-1/2 z-50 w-[900px] max-w-none origin-top -translate-y-1/2 scale-[0.9] sm:scale-[0.85] md:scale-[0.9] lg:scale-100 xl:scale-[1.2] 2xl:scale-[1.3]">
        <Image
          src={shoe}
          alt="shoe"
          className="h-auto w-full object-contain"
          priority={true}
        />
      </div>

      {/* Secondary Text */}
      <div className="font-inter z-50 flex flex-col gap-4 pb-[2rem] text-center">
        <h3 className="text-5xl font-extrabold tracking-[-2px]">Just do it</h3>

        <p className="text-lg text-[#959799]">
          Captures messages that stands for more than just sport.
        </p>
      </div>
    </div>
  );
};

export default page;
