import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Heart } from "lucide-react";
import AlbumArt from "./AlbumArt";
import TrackInfo from "./TrackInfo";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";

function Player({
  currentTrack,
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  shuffle,
  onToggleShuffle,
  repeat,
  onToggleRepeat,
  onSeek,
  onToggleFavorite,
  isFavorite,
  volume,
  isMuted,
  onVolumeChange,
  onToggleMute
}) {
  return (
    <div>
      <AlbumArt currentTrack={currentTrack} isPlaying={isPlaying} />
      <TrackInfo
        currentTrack={currentTrack}
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <ProgressBar currentTime={currentTime} duration={duration} onSeek={onSeek} />
      <Controls
        isPlaying={isPlaying}
        onPlayPause={onPlayPause}
        onPrevious={onPrevious}
        onNext={onNext}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
        shuffle={shuffle}
        onToggleShuffle={onToggleShuffle}
        repeat={repeat}
        onToggleRepeat={onToggleRepeat}
      />
      <VolumeControl
        volume={volume}
        isMuted={isMuted}
        onVolumeChange={onVolumeChange}
        onToggleMute={onToggleMute}
      />
    </div>
  );
}

function Controls({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  shuffle,
  onToggleShuffle,
  repeat,
  onToggleRepeat
}) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-6 mb-4">
        <button
          onClick={onToggleShuffle}
          className={`p-1 sm:p-2 rounded-full transition-all ${shuffle ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Shuffle"
        >
          <Shuffle size={16} className="sm:size-20" />
        </button>
       
        <button
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="p-2 sm:p-3 text-gray-700 hover:bg-gray-200 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <SkipBack size={20} className="sm:size-28" />
        </button>
       
        <button
          onClick={onPlayPause}
          className="p-3 sm:p-4 md:p-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-xl transform hover:scale-105 transition-all"
        >
          {isPlaying ? <Pause size={24} className="sm:size-32" /> : <Play size={24} className="sm:size-32" />}
        </button>
       
        <button
          onClick={onNext}
          disabled={!canGoNext}
          className="p-2 sm:p-3 text-gray-700 hover:bg-gray-200 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          <SkipForward size={20} className="sm:size-28" />
        </button>
       
        <button
          onClick={onToggleRepeat}
          className={`p-1 sm:p-2 rounded-full transition-all ${repeat ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-200'}`}
          title="Repeat"
        >
          <Repeat size={16} className="sm:size-20" />
        </button>
      </div>
    </div>
  );
}

export default Player;