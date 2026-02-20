import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import CountUp from '@/components/countUp';

// SET COMPONENT DATA
const value: Record<string, number> = {
  "kim": 60,
  "rock": 71,
  "megan": 60,
};

export default function Modal({
  content,
}:{
  content: string,
}) {

  // SET COMPONENT DATA
  const valueData = value[content];

  return (
    <div className="flex justify-center items-center fixed inset-0 z-10 backdrop-blur-sm bg-black/40">
      <div className="flex flex-col items-center gap-5 text-center rounded-3xl shadow-lg modal px-8 py-10 bg-[#181818] border border-[#303030]">
        <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-[#1e4620]">
          <DotLottieReact
            src="/lotties/check.lottie"
            loop={false}
            autoplay={true}
          />
        </div>
        <div className="text-center space-y-4">
        <div className="flex flex-col gap-2 border rounded-lg p-4 bg-[#1e4620] border-[#2d5f2f]">
          <div className="text-4xl font-bold text-[#4CAF50]">
            + US$ <CountUp start={0} end={valueData} duration={500} />
          </div>
          <div className="text-xs text-[#81C784]">
            Has been added to your balance!
          </div>
        </div>
        <div className="text-sm text-[#aaaaaa]">
          Keep evaluating to earn more! 🚀
        </div>
      </div>
      </div>
    </div>
  );

};