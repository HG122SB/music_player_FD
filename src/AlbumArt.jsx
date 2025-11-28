import { Music } from "lucide-react";

function AlbumArt({ currentTrack, isPlaying }) {
  return (
    <div className="flex justify-center mb-6">
      <div className="relative">
        <div className={`w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center transform transition-transform ${isPlaying ? 'scale-105' : 'scale-100'}`}>
          <Music className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 text-white opacity-80" />
        </div>
        {isPlaying && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-purple-600 rounded-full animate-pulse"
                style={{
                  height: '20px',
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '0.6s'
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AlbumArt;