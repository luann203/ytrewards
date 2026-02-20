/* eslint-disable @typescript-eslint/no-explicit-any */

import VideoCard from "@/components/video-card";
import Option from "@/components/option";
import { ThumbsDown, ThumbsUp } from "lucide-react";

export default function Page5({
  page,
  setPage,
}:{
  page: number,
  setPage: any,
}) {

  return (
    <>
      <div className="flex flex-col gap-8 text-base appear">
        <VideoCard
          thumbnail="/thumbs/thumb4.webp"
          thumbnailAlt="Video thumbnail"
          duration="4:44"
          title="5 Women Who Changed Pop Culture Forever"
          views="3.1 million views • 7 months ago"
          className="rounded-3xl border border-[#303030] shadow-lg p-6 sm:p-7 bg-[#181818] hover:bg-[#272727] transition-colors"
        />
        <div className="flex flex-col gap-2 text-center">
          <span className="text-lg font-semibold">Does the video thumbnail make you want to watch the video?</span>
          <span className="text-gray-600 text-sm">Select the option below ⬇️</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Option onClick={() => setPage(page + 1)}><ThumbsUp size={45} className="text-green-300" /></Option>
          <Option onClick={() => setPage(page + 1)}><ThumbsDown size={45} className="text-red-500" /></Option>
        </div>
      </div>
    </>
  );

};