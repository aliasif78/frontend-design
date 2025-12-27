// Next JS
import Image from 'next/image';

// Assets
import gradient from '.././assets/gradient.webp';
import macScreen from '.././assets/mac-screen.webp';

const DashboardSection = () => {
  return (
    <>
      <Image src={gradient} alt="gradient" className="-mt-[25vh] w-full" />
      <Image src={macScreen} alt="macScreen" className="-mt-[28vh] w-2/3" />
    </>
  );
};

export default DashboardSection;
