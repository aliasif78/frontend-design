// React
import { useEffect, useRef, useState } from 'react';

// Dependencies
import { Player } from '@lordicon/react';

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
    <span className="cursor-pointer" onMouseEnter={playIcon}>
      <Player ref={playerRef} icon={data} size={28} colors="primary:#ffffff,secondary:#ffffff" />
    </span>
  );
};

export default AnimatedIcon;
