// Next JS
import Link from 'next/link';

// Icons
import { FaGithub } from 'react-icons/fa6';
import { RiShoppingCartFill } from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full flex-row items-center justify-between border-b border-neutral-800 bg-[#020B05] px-8 py-4">
      {/* Title */}
      <span className="flex flex-row items-center gap-2 text-2xl">
        <FaGithub />
        <h2 className="-mt-1 font-extrabold">upper</h2>
      </span>

      {/* Links */}
      <div className="flex flex-row items-center gap-[4rem]">
        <Link href="/">Home</Link>
        <Link href="/nike-jordan">Nike</Link>
        <Link href="/quiz-tower">Quiz Tower</Link>
      </div>

      {/* Button */}
      <span className="flex flex-row items-center gap-6">
        <RiShoppingCartFill type="button" className="cursor-pointer" size={20} />

        <button className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full border border-[#214b3b] px-4 py-2 transition duration-300 hover:bg-[#214b3b]">
          <FaGithub size={20} />
          Github
        </button>
      </span>
    </nav>
  );
};

export default Navbar;
