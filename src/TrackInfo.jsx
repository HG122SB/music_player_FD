import { Heart } from "lucide-react";

function TrackInfo({ currentTrack, isFavorite, onToggleFavorite }) {
  return (
    <div className="text-center mb-6 px-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 truncate">
        {currentTrack?.name || "No track playing"}
      </h2>
      <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-3">Local File</p>
      <button
        onClick={onToggleFavorite}
        className="text-red-500 hover:scale-110 transition-transform"
      >
        <Heart size={24} className="sm:size-28" fill={isFavorite ? "currentColor" : "none"} />
      </button>
    </div>
  );
}

export default TrackInfo;