import { Music, List, ChevronDown, Download, X, Heart, Search } from "lucide-react";

function Playlist({ 
  playlist, 
  currentTrackIndex, 
  onPlayTrack, 
  onRemoveTrack, 
  onDownloadTrack, 
  isPlaying, 
  favorites,
  searchQuery,
  setSearchQuery,
  showPlaylist,
  setShowPlaylist 
}) {
  if (playlist.length === 0) return null;

  return (
    <div className="bg-white rounded-t-3xl shadow-2xl mt-8">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search songs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Playlist Toggle */}
      <button
        onClick={() => setShowPlaylist(!showPlaylist)}
        className="w-full p-4 flex items-center justify-between text-left font-semibold text-gray-800 hover:bg-gray-50"
      >
        <div className="flex items-center gap-2">
          <List size={20} />
          <span>Playlist ({playlist.length})</span>
        </div>
        <span className={`transform transition-transform ${showPlaylist ? 'rotate-180' : ''}`}>
          {showPlaylist ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </span>
      </button>
     
      {showPlaylist && (
        <div className="max-h-96 overflow-y-auto">
          {playlist.map((track, index) => (
            <div
              key={track.id}
              onClick={() => onPlayTrack(index)}
              className={`p-4 border-b border-gray-100 hover:bg-purple-50 cursor-pointer transition-colors ${
                currentTrackIndex === index ? 'bg-purple-100' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  {currentTrackIndex === index && isPlaying ? (
                    <div className="flex gap-1 items-end h-5">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-purple-600 rounded-full animate-pulse"
                          style={{
                            animationDelay: `${i * 0.15}s`,
                            height: `${(i + 1) * 6}px`
                          }}
                        />
                      ))}
                    </div>
                  ) : (
                    <Music size={16} className="text-gray-400 sm:size-20" />
                  )}
                </div>
               
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 truncate text-sm sm:text-base">{track.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">Local File</p>
                </div>
                {favorites.includes(track.id) && (
                  <Heart size={14} className="text-red-500 flex-shrink-0 sm:size-16" fill="currentColor" />
                )}
               
                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDownloadTrack(track);
                    }}
                    className="p-1 sm:p-2 hover:bg-blue-100 rounded-lg transition-colors"
                    title="Download"
                  >
                    <Download size={14} className="text-blue-600 sm:size-18" />
                  </button>
                 
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveTrack(track.id);
                    }}
                    className="p-1 sm:p-2 hover:bg-red-100 rounded-lg transition-colors"
                    title="Remove"
                  >
                    <X size={14} className="text-red-600 sm:size-18" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Playlist;