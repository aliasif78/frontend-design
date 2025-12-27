// Next JS
import Image from 'next/image';

// Assets
import sales from '.././assets/sales.svg';
import analytics from '.././assets/analytics.svg';
import blGradient from '.././assets/bl-gradient.svg';

// Icons
import { PiCheckCircle } from 'react-icons/pi';

// Components
import AnimatedButton from './AnimatedButton';

const ExpenseReportSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[5rem]">
      {/* Text */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="bg-gradient-to-b from-white to-[#979b97] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent">Get expense reports</h3>
        <h3 className="bg-gradient-to-b from-[#b8beb8] to-[#3a3b3a] bg-clip-text text-6xl leading-[1.2] font-medium text-transparent">in a few clicks</h3>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-[3rem]">
        <div className="relative flex flex-row gap-[3rem] overflow-hidden rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[7rem]">
          <Image src={blGradient} alt="gradient" className="absolute inset-0 h-full w-full object-cover" />
          <Image src={sales} alt="earnings" className="z-50 h-auto w-1/2 object-contain" />

          <div className="z-50 flex flex-col justify-center gap-[2rem] text-lg">
            <h4 className="text-4xl font-semibold">Expense Summary Report</h4>
            <p className="text-[#f1f1ef]/60">Generate an expense summary report that provides an overview of total expenses.</p>

            <div className="flex flex-col gap-[1rem]">
              <span className="flex flex-row items-center gap-2">
                <PiCheckCircle size={24} />
                Categorized expenses by type
              </span>

              <span className="flex flex-row items-center gap-2">
                <PiCheckCircle size={24} />A breakdown of expenses by department
              </span>
            </div>

            <AnimatedButton text="Learn More" />
          </div>
        </div>

        <div className="flex flex-row gap-[3rem]">
          <div className="z-50 flex w-1/2 flex-col justify-center gap-[2rem] rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[5rem] text-lg">
            <h4 className="text-4xl font-semibold">Expense Compliance Report</h4>
            <p className="text-[#f1f1ef]/60">Upper offers a compliance report that ensures adherence to company policies and regulatory requirements. This report highlights any instances of non-compliance.</p>
            <AnimatedButton text="Get Started Now" />
          </div>

          <div className="relative z-50 flex w-1/2 flex-col justify-center gap-[2rem] overflow-hidden rounded-4xl border border-[#353835] bg-gradient-to-b from-[#1f2321] to-[#020b05] p-[5rem] text-lg">
            <Image src={blGradient} alt="gradient" className="absolute inset-0 h-full scale-x-[-1] transform object-cover" />
            <Image src={analytics} alt="analytics" className="z-50 h-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseReportSection;
