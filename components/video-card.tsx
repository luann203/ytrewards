import Image from "next/image";

type VideoCardProps = {
  thumbnail: string;
  thumbnailAlt?: string;
  duration: string; // Ex: "4:44"
  title: string;
  views: string; // Ex: "3.1 million views • 7 months ago"
  showInfo?: boolean; // Se deve mostrar título e views abaixo
  className?: string;
};

export default function VideoCard({
  thumbnail,
  thumbnailAlt = "Video thumbnail",
  duration,
  title,
  views,
  showInfo = true,
  className = "",
}: VideoCardProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Thumbnail Container */}
      <div className="relative w-full rounded-xl overflow-hidden bg-[#181818] group cursor-pointer">
        <Image
          src={thumbnail}
          alt={thumbnailAlt}
          width={500}
          height={396}
          className="w-full h-auto object-cover"
          priority
          quality={80}
        />
        
        {/* Duration Overlay - Bottom Right */}
        <div className="absolute bottom-4 right-2 px-1.5 py-0.5 rounded bg-black/80 backdrop-blur-sm">
          <span className="text-white text-xs font-medium">{duration}</span>
        </div>
      </div>

      {/* Video Info - Only shown if showInfo is true */}
      {showInfo && (
        <div className="flex flex-col gap-1 pt-2">
          {/* Title */}
          <h3 className="text-[#f1f1f1] font-bold text-lg line-clamp-2 leading-tight">
            {title}
          </h3>
          
          {/* Views and Date */}
          <p className="text-[#aaaaaa] text-xs">
            {views}
          </p>
        </div>
      )}
    </div>
  );
}
