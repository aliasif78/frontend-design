'use client';

// Next JS
import Link from 'next/link';
import Image from 'next/image';

// Icons
import { FaGithub } from 'react-icons/fa6';

import { Player } from '@lordicon/react';
import { useEffect, useRef, useState } from 'react';

// Assets
import logo from '.././assets/logo.png';

const Navbar = () => {
  // Refs
  const playerRef = useRef<Player>(null);

  // States
  const [data, setData] = useState<unknown>(null);

  // Effects
  useEffect(() => void loadIcon('cart').then((iconData) => setData(iconData)), []);

  // Functions
  const loadIcon = async (name: string) => await (await fetch(`/${name}.json`)).json();

  const playIcon = () => {
    if (playerRef.current && !playerRef.current.isPlaying) playerRef.current.playFromBeginning();
  };

  return (
    <nav className="fixed top-0 left-0 z-[9999] flex w-full flex-row items-center justify-between border-b border-neutral-800 bg-[#020B05] px-8 py-4">
      {/* Title */}
      <span className="flex flex-row items-center gap-2 text-2xl">
        <Image src={logo} alt="logo" className="h-10 w-10" />
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
        <span className="cursor-pointer" onMouseEnter={playIcon}>
          <Player ref={playerRef} icon={data} size={28} colors="primary:#ffffff,secondary:#ffffff" />
        </span>

        <button className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-full border border-[#2a604c] px-4 py-2 transition duration-300 hover:bg-[#2a604c]">
          <FaGithub size={20} />
          Github
        </button>
      </span>
    </nav>
  );
};

export default Navbar;
