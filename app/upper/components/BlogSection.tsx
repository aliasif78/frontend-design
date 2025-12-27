// Next JS
import Image, { StaticImageData } from 'next/image';

// Assets
import wideGradient from '.././assets/wide-gradient.png';
import blogImg1 from '.././assets/blog-img-1.png';
import blogImg2 from '.././assets/blog-img-2.png';

// Types
type SectionProps = { title: string; description: string; image: StaticImageData | string };

const BlogSection = () => {
  // Custom Components
  const Section = ({ title, description, image }: SectionProps) => {
    return (
      <div className="flex w-1/2 flex-col overflow-hidden rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[1rem]">
        <Image src={image} alt="earnings" className="h-[25rem] w-full rounded-4xl object-cover" />

        <div className="flex flex-col gap-[1rem] p-[2rem]">
          <h4 className="text-[27px] font-semibold">{title}</h4>
          <p className="text-[#f1f1ef]/60">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-[2rem]">
      <Image src={wideGradient} alt="wideGradient" className="absolute bottom-0 left-0 h-full w-full object-cover" />

      {/* Text */}
      <div className="flex w-full flex-col items-start justify-start">
        <h3 className="z-50 bg-gradient-to-b from-white to-[#979b97] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent">Blogs & Articles</h3>
        <h3 className="scale-y-[-1] bg-gradient-to-b from-[#b8beb8] to-[#3a3b3a] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent blur-xs">Blogs & Articles</h3>
      </div>

      {/* Sections */}
      <div className="z-50 flex flex-row gap-[1rem]">
        <Section title="3 Lessons from Brands Re-imagining the Experience" description="An intuitive interface means that users can quickly understand how to perform tasks without the need for extensive training or guidance." image={blogImg1} />
        <Section title="3 Lessons from Brands Re-imagining the Experience" description="Upper offers robust reporting capabilities, allowing users to generate customized reports." image={blogImg2} />
      </div>
    </div>
  );
};

export default BlogSection;
