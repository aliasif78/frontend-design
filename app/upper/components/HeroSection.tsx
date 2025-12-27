// Components
import AnimatedButton from './AnimatedButton';

const HeroSection = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-[2rem]">
      {/* Main Text */}
      <h1 className="bg-gradient-to-b from-white to-[#676a67] bg-clip-text text-7xl leading-[1.2] font-medium text-transparent">Amazing!</h1>

      {/* Subtext */}
      <h2 className="-mt-2 text-xl text-[#f1f1ef]/70">
        Upper offers a comprehensive suite of tools to
        <br />
        optimize your expense management workflow.
      </h2>

      {/* Button */}
      <AnimatedButton text="Get Started Now" />
    </div>
  );
};

export default HeroSection;
