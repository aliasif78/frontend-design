// Next JS
import Image from 'next/image';

// Assets
import logo from '.././assets/logo.png';
import { PiCaretCircleDownFill, PiFacebookLogoFill, PiLinkedinLogoFill, PiXLogoFill } from 'react-icons/pi';

const Footer = () => {
  const links = [
    {
      title: 'LANDINGS',
      links: ['Homepage 01', 'Homepage 02', 'Homepage 03', 'About Us', 'Career', 'Reviews'],
    },
    {
      title: 'RESOURCES',
      links: ['Blog 01', 'Blog 02', 'Blog 03', 'Blog Single', 'Integration', 'Download'],
    },
    {
      title: 'UTILITIES',
      links: ['Log in', 'Sign Up', 'Forgot Password', 'Style Guide', 'Licenses', 'Changelog'],
    },
  ];

  return (
    <footer className="flex flex-col gap-[5rem]">
      <div className="flex flex-row justify-between">
        <div className="flex w-2/5 flex-col gap-[2rem]">
          <div className="flex flex-row gap-2">
            <Image src={logo} alt="logo" className="h-10 w-10" />
            <h2 className="text-4xl font-bold">upper</h2>
          </div>

          <span className="text-lg">A complete solution for businesses looking to build professional website.</span>

          <div className="flex flex-row items-center justify-center gap-2 rounded-lg bg-[#0C150F] p-[1rem]">
            <PiCaretCircleDownFill size={36} className="text-[#F1F1EF]/50" />
            <input type="text" className="w-full bg-transparent outline-none" placeholder="Enter your email" />
            <button className="cursor-pointer rounded-md bg-gradient-to-b from-[#1f2321] to-[#020B05] px-4 py-2 hover:bg-gradient-to-r hover:from-[#1f2321] hover:to-[#020B05]">Submit</button>
          </div>

          <span className="text-[#F1F1EF]/70">Subscribe to our newsletter</span>
        </div>

        {links.map((link, index) => (
          <div key={index} className="flex w-1/5 flex-col items-center justify-center gap-2">
            <h2 className="mb-2 text-lg font-medium">{link.title}</h2>

            {link.links.map((link, index) => (
              <span key={index} className="cursor-pointer text-[#F1F1EF]/70 hover:text-white">
                {link}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-0.5 w-full bg-[#F1F1EF]/10"></div>

        <div className="flex flex-row items-center justify-between gap-2 text-[#F1F1EF]/70">
          <span>© 2025 Upper. All rights reserved.</span>

          <span className="flex flex-row gap-2">
            <PiFacebookLogoFill type="button" className="cursor-pointer" size={24} />
            <PiXLogoFill type="button" className="cursor-pointer" size={24} />
            <PiLinkedinLogoFill type="button" className="cursor-pointer" size={24} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
