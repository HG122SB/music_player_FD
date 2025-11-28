import { Music, Upload } from "lucide-react";

function EmptyState({ onUploadClick }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <Music className="w-24 h-24 sm:w-32 sm:h-32 text-purple-300 mb-6" />
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">No songs yet</h2>
      <p className="text-gray-600 mb-8 text-center">Upload your favorite tracks to start listening</p>
      <button
        onClick={onUploadClick}
        className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
      >
        <Upload size={24} className="sm:size-28" />
        <span>Upload Songs</span>
      </button>
    </div>
  );
}

export default EmptyState;