// Next JS
import Image, { StaticImageData } from 'next/image';

// Assets
import wideGradient from '.././assets/wide-gradient.png';
import blogImg1 from '.././assets/blog-img-1.png';
import blogImg2 from '.././assets/blog-img-2.png';
import avatar from '.././assets/avatar.png';

// Types
type SectionProps = { title: string; image: StaticImageData | string; date: string; readTime: string; badges: { title: string; color: string }[] };

// Data
const badges1 = [
  { title: 'BUSINESS', color: 'text-[#F4BE00]' },
  { title: 'TECHONLOGY', color: 'text-[#F936CE]' },
];

const badges2 = [
  { title: 'MARKETING', color: 'text-[#00FFF0]' },
  { title: 'DESIGN', color: 'text-[#0FFF52]' },
];

const BlogSection = () => {
  // Custom Components
  const Section = ({ title, image, date, readTime, badges }: SectionProps) => {
    return (
      <div className="flex w-1/2 flex-col overflow-hidden rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[1rem]">
        <div className="relative w-full">
          {/* Image */}
          <Image src={image} alt="earnings" className="h-[25rem] w-full rounded-4xl object-cover" />

          {/* Badges */}
          <div className="absolute bottom-4 left-4 flex flex-row gap-2">
            {badges.map((badge) => (
              <span key={badge.title} className={`rounded-full border border-neutral-300/30 bg-[#282828]/30 px-4 py-2 text-sm font-medium ${badge.color}`}>
                {badge.title}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[2rem] p-[2rem]">
          {/* Title */}
          <h4 className="text-[27px] font-semibold">{title}</h4>

          {/* User & Meta Data */}
          <div className="flex w-full flex-row items-center justify-between text-[#F1F1EF]/60">
            {/* User */}
            <div className="flex flex-row items-center gap-4">
              {/* Avatar */}
              <Image src={avatar} alt="avatar" className="h-12 w-12 rounded-full" />

              {/* Name & Role */}
              <div className="flex flex-col">
                <h5 className="bg-gradient-to-b from-white to-[#F1F1EF]/50 bg-clip-text text-xl font-medium text-transparent">Ali Asif</h5>
                <p>Web Developer</p>
              </div>
            </div>

            {/* Meta Data */}
            <div className="flex flex-row items-center gap-3 text-lg">
              <p>{date}</p>
              <div className="size-2 rounded-full bg-[#319766]"></div>
              <p>{readTime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-[2rem]">
      <Image src={wideGradient} alt="wideGradient" className="absolute bottom-0 left-0 h-full w-full object-cover" />

      {/* Text */}
      <div className="flex w-full flex-col items-start justify-start">
        <h3 className="z-50 bg-gradient-to-b from-white to-[#808480] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent">Blogs & Articles</h3>
        <h3 className="-mt-1 scale-y-[-0.8] bg-gradient-to-b from-[#b8beb8] to-[#3a3b3a] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent blur-xs">Blogs & Articles</h3>
      </div>

      {/* Sections */}
      <div className="z-50 flex flex-row gap-[1rem]">
        <Section title="3 Lessons from Brands Re-imagining the Experience" image={blogImg1} date="Dec 29, 2025" readTime="7 min read" badges={badges1} />
        <Section title="3 Lessons from Brands Re-imagining the Experience" image={blogImg2} date="Nov 17, 2025" readTime="10 min read" badges={badges2} />
      </div>
    </div>
  );
};

export default BlogSection;
