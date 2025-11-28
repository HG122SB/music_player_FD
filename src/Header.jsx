import { Music, Upload } from "lucide-react";

function Header({ onUploadClick, playlistLength }) {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Music className="w-8 h-8 md:w-10 md:h-10" />
          <h1 className="text-xl md:text-3xl font-bold">Device Beats</h1>
        </div>
        <button
          onClick={onUploadClick}
          className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-md"
        >
          <Upload size={20} />
          <span className="hidden sm:inline">Upload Songs</span>
          <span className="sm:hidden">Upload</span>
        </button>
      </div>
      {playlistLength > 0 && (
        <div className="text-center mt-2 text-sm opacity-90">
          {playlistLength} song{playlistLength !== 1 ? 's' : ''} in library
        </div>
      )}
    </header>
  );
}

export default Header;