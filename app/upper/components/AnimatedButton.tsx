// Next JS
import Image from 'next/image';

// Assets
import btnGradient from '.././assets/btn-gradient.svg';

// Icons
import { PiArrowRightBold } from 'react-icons/pi';

const AnimatedButton = ({ text, className, leftClassName }: { text: string; className?: string; leftClassName?: string }) => {
  return (
    <button className={`group relative flex w-fit cursor-pointer flex-row items-center justify-center gap-2 overflow-hidden rounded-none border border-[#333a33] bg-[#214b3b]/20 px-6 py-3 text-base transition duration-300 ${className}`}>
      {/* Static right half of top border */}
      <span className="absolute top-0 left-1/2 h-[2px] w-16 rounded-r-full bg-gradient-to-r from-[#6FFFD4]/20 to-[#6FFFD4]"></span>

      {/* Animated left half of top border - expands right */}
      <span className={`absolute top-0 ${text.length <= 10 ? 'left-[90%] group-hover:w-4' : className?.includes('text-xl') ? 'left-[75%] group-hover:w-14' : 'left-[80%] group-hover:w-10'} h-[2px] w-0 rounded-r-full bg-[#6FFFD4] transition-all duration-200 ease-out group-hover:delay-[0ms] ${leftClassName}`}></span>

      {/* Animated right border - expands down with curve */}
      <span className="absolute top-0 right-0 h-0 w-[2px] origin-top rounded-br-full bg-[#6FFFD4] transition-all duration-150 ease-out group-hover:h-full group-hover:delay-[200ms]"></span>

      {/* Animated bottom border - expands left with curve */}
      <span className="absolute right-0 bottom-0 h-[2px] w-0 origin-right rounded-bl-full bg-[#6FFFD4] transition-all duration-100 ease-out group-hover:w-full group-hover:delay-[350ms]"></span>

      {/* Animated left border - expands up with curve */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] origin-bottom rounded-tl-full bg-[#6FFFD4] transition-all duration-50 ease-out group-hover:h-full group-hover:delay-[450ms]"></span>

      {/* Animated left half of top border - expands right */}
      <span className="absolute top-0 left-0 h-[2px] w-0 rounded-l-full bg-[#6FFFD4] transition-all duration-100 ease-out group-hover:w-full group-hover:delay-[500ms]"></span>

      {/* Gradient */}
      <Image src={btnGradient} alt="btnGradient" className="absolute bottom-0 h-full w-full object-cover transition-all duration-300 group-hover:bottom-3 group-hover:scale-150" />

      {/* Text */}
      <span className="transition duration-1000 group-hover:text-amber-200 group-hover:delay-400">{text}</span>

      {/* Arrow */}
      <PiArrowRightBold className="transition duration-1000 group-hover:text-amber-200 group-hover:delay-400" />
    </button>
  );
};

export default AnimatedButton;
