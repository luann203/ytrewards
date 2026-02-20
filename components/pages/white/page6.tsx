/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@/components/button";
import ConfettiEffect from "@/components/confetti";
import { CirclePlay } from 'lucide-react';

export default function Page6({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-base rounded-2xl gap-7 bg-gradient-to-t appear border px-8 py-10 from-[#181818] to-[#212121] border-[#303030]">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold text-[#f1f1f1]">🎁 Congratulations! 🎁</span>
          <span className="text-base font-normal text-[#f1f1f1]">Your balance is available for immediate withdrawal! 🎉</span>
        </div>
        <div className="rounded-lg shadow-lg border border-[#4CAF50] p-5 bg-[#1e4620]">
          <span className="font-semibold text-base text-[#81C784]">These are your earnings for the 4 evaluations you just completed</span>
        </div>
        <div className="text-sm text-[#aaaaaa]">
          Click on the button below and see the withdrawal guide! 👇
        </div>
      </div>
      <Button onClick={() => setPage(page + 1)} className="!bg-green-600 !border-green-700 hover:!bg-green-500">
        <CirclePlay /> Yes, withdraw my balance now!
      </Button>
      <ConfettiEffect />
    </>
  );

};