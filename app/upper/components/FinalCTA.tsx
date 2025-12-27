// Next JS
import Image from 'next/image';

// Assets
import fullGradient from '.././assets/full-gradient.svg';

// Components
import AnimatedButton from './AnimatedButton';

const FinalCTA = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-[3rem] overflow-hidden rounded-4xl p-[10rem]">
      <Image src={fullGradient} alt="fullGradient" className="absolute inset-0 h-full w-full object-cover" />

      <div className="z-50 flex flex-col items-center justify-center">
        <h3 className="bg-gradient-to-b from-white to-[#979b97] bg-clip-text text-7xl leading-[1.2] font-medium text-transparent">Choose Upper For</h3>
        <h3 className="bg-gradient-to-b from-[#b8beb8] to-[#3a3b3a] bg-clip-text text-7xl leading-[1.2] font-medium text-transparent">Smarter Finances</h3>
      </div>

      <AnimatedButton text="Get Started Now" className="text-xl" />
    </div>
  );
};

export default FinalCTA;
