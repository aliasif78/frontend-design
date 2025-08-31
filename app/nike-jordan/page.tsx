"use client";

// Next JS
import Image from "next/image";

// Assets
import shoe from "./assets/shoe.webp";

const page = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between overflow-hidden">
      {/* Titles */}
      <div className="font-inter flex flex-col text-center">
        <h2 className="text-[165px] font-extrabold tracking-[-10px] text-transparent opacity-30 [-webkit-text-stroke:1px_black] [paint-order:stroke]">
          THE NEW 2023
        </h2>

        <h1 className="z-10 -mt-[13rem] [background-image:linear-gradient(to_right,#4280CF_0%,#3975C0_8%,#0C315F_45%,#0A2444_59%,#03234B_82%,#4280CF_100%)] bg-clip-text text-[200px] font-extrabold tracking-[-10px] text-transparent">
          AIR JORDAN
        </h1>
      </div>

      {/* Shoe Image */}
      <div className="absolute bottom-30 z-50 w-[60%]">
        <Image src={shoe} alt="shoe" className="object-contain" />
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
