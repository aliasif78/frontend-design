// Next JS
import Image from 'next/image';

// Assets
import circle from '.././assets/circle.png';

// Components
import AnimatedButton from './AnimatedButton';

const IntegrationsSection = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-[5rem]">
      <div className="flex w-1/2 flex-col gap-[3rem]">
        {/* Text */}
        <div className="flex flex-col">
          <h3 className="bg-gradient-to-b from-white to-[#979b97] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent">Integrated with</h3>
          <h3 className="bg-gradient-to-b from-[#cdd3cd] to-[#696c69] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent">your favourite</h3>
          <h3 className="bg-gradient-to-b from-[#b8beb8] to-[#0f0f0f] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent">softwares</h3>
        </div>

        <AnimatedButton text="Get Started Now" className="text-xl" />
      </div>

      {/* Images */}
      <div className="flex w-1/2 flex-row gap-[2rem]">
        <Image src={circle} alt="circles" className="h-auto w-full object-contain" />
      </div>
    </div>
  );
};

export default IntegrationsSection;
