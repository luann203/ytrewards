import VideoCard from "@/components/video-card";
import Option from "@/components/option";
import { Frown, Meh, Smile } from "lucide-react";

export default function Page({
  handleClick,
}:{
  handleClick: () => void,
}) {

  return (
    <div className="flex flex-col gap-3 sm:gap-4 text-sm appear">
      <VideoCard
        thumbnail="/thumbs/thumb3.webp"
        thumbnailAlt="Video thumbnail"
        duration="4:44"
        title="I Spent $456,000 on a Real Squid Game!"
        views="3.1 million views • 7 months ago"
        className="rounded-3xl border border-[#303030] shadow-lg p-5 sm:p-6 bg-[#181818] hover:bg-[#272727] transition-colors"
      />
      <div className="flex flex-col gap-2 text-center text-balance my-4">
        <span className="text-lg font-semibold">
          What is your reaction when you see this video thumbnail?
        </span>
        <span className="text-sm text-[#aaaaaa]">
          Select an option below ⬇️
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Option onClick={handleClick} className="active:!ring-green-500">
          <Smile size={45} className="text-green-400" />
        </Option>
        <Option onClick={handleClick} className="active:!ring-red-500">
          <Meh size={45} className="text-yellow-500" />
        </Option>
        <Option onClick={handleClick} className="active:!ring-red-500">
          <Frown size={45} className="text-red-500" />
        </Option>
      </div>
    </div>
  );

};