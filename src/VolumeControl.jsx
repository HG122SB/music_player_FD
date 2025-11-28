import { Volume2, VolumeX } from "lucide-react";

function VolumeControl({ volume, isMuted, onVolumeChange, onToggleMute }) {
  return (
    <div className="flex items-center justify-center gap-3 px-4 max-w-xs mx-auto">
      <button onClick={onToggleMute} className="text-gray-700 hover:text-purple-600">
        {isMuted || volume === 0 ? <VolumeX size={20} className="sm:size-24" /> : <Volume2 size={20} className="sm:size-24" />}
      </button>
      <input
        type="range"
        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        value={volume}
        onChange={onVolumeChange}
      />
      <span className="text-sm text-gray-600 w-10 text-right">{volume}%</span>
    </div>
  );
}

export default VolumeControl;