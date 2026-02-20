import Button from "@/components/button";
import ConfettiEffect from "@/components/confetti";
import { CheckCheck, Loader2 } from 'lucide-react';

export default function Page({
  active,
  handleClick,
}:{
  active: boolean,
  handleClick: () => void,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-sm rounded-3xl gap-7 bg-gradient-to-t appear border px-8 py-8 from-[#181818] to-[#212121] border-[#303030]">
        <div className="flex flex-col gap-4 text-balance">
          <span className="text-xl font-bold text-[#f1f1f1]">
            Congratulations!
          </span>
          <span className="text-[#f1f1f1]">
            Your balance is available for immediate withdrawal! 🎉
          </span>
        </div>
        <div className="flex flex-col gap-3 text-balance rounded-lg border-2 border-dashed p-5 bg-[#1e4620] border-[#4CAF50]">
          <span className="font-bold uppercase text-[#4CAF50]">
            ✅ You&apos;ve already won US$ 213!
          </span>
          <span className="text-[#81C784]">
            These are your earnings for the 3 surveys you just completed.
          </span>
        </div>
        <div className="text-balance">
          <span className="text-[#aaaaaa]">
            Click the button below and see the immediate withdrawal guide! 👇
          </span>
        </div>
      </div>
      <Button
        onClick={handleClick}
        disabled={active}
        className="pulse !bg-green-600 !border-green-700 hover:!bg-green-500"
      >
        {active ? (
          <Loader2 className="size-5 animate-spin" />
        ):(
          <CheckCheck className="size-5" />
        )}
        <span>Withdraw my balance now!</span>
      </Button>
      <ConfettiEffect />
    </>
  );

};