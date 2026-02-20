/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "@/components/button";
import ConfettiEffect from "@/components/confetti";

export default function Page1({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col text-center text-sm rounded-3xl gap-7 bg-gradient-to-t appear border px-8 py-8 from-[#181818] to-[#212121] border-[#303030]">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold text-[#f1f1f1]">🎁 Congratulations! 🎁</span>
          <span className="text-[#f1f1f1]">You have been selected for the new YouTube rewards program!</span>
        </div>
        <div className="rounded-lg border-2 border-dashed shadow-lg p-5 bg-[#1e4620] border-[#4CAF50]">
          <span className="font-bold uppercase text-[#4CAF50]">✅ You have already won US$ 39!</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-[#f1f1f1]">Perform 3 more evaluations and make your first withdrawal!</span>
          <span className="text-[#aaaaaa]">Click on the button below to start! 👇</span>
        </div>
      </div>
      <Button onClick={() => setPage(page + 1)} className="!bg-green-600 !border-green-700 hover:!bg-green-500">
        Click here and start!
      </Button>
      <ConfettiEffect />
    </>
  );

};