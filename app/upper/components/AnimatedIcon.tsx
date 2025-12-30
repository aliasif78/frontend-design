// React
import { useEffect, useRef, useState } from 'react';

// Next JS
import Image from 'next/image';

// Dependencies
import { Player } from '@lordicon/react';

// Assets
import btnGradient from '.././assets/btn-gradient.svg';

const AnimatedIcon = ({ fileName }: { fileName: string }) => {
  // Refs
  const playerRef = useRef<Player>(null);

  // States
  const [data, setData] = useState<unknown>(null);

  // Effects
  useEffect(() => void loadIcon(fileName).then((iconData) => setData(iconData)), [fileName]);

  // Functions
  const loadIcon = async (name: string) => await (await fetch(`/${name}.json`)).json();

  const playIcon = () => {
    if (playerRef.current && !playerRef.current.isPlaying) playerRef.current.playFromBeginning();
  };

  return (
    <div className="group relative flex w-10 items-center justify-center">
      {/* Gradient */}
      <Image src={btnGradient} alt="btnGradient" className="absolute -bottom-0.5 h-full w-full object-cover opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100" />

      <span className="cursor-pointer" onMouseEnter={playIcon}>
        <Player ref={playerRef} icon={data} size={28} colors="primary:#ffffff,secondary:#ffffff" />
      </span>
    </div>
  );
};

export default AnimatedIcon;
