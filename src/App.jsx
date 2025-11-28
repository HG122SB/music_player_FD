import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Upload, Music, X, Download, Shuffle, Repeat, List, Heart, Search, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "./Header";
import Player from "./Player";
import Playlist from "./Playlist";
import EmptyState from "./EmptyState";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
 
  const audioRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const audioFiles = files.filter(f => f.type.startsWith('audio/'));
    const newTracks = audioFiles.map((file, i) => ({
      id: Date.now() + i,
      name: file.name.replace(/\.[^/.]+$/, ""),
      file,
      url: URL.createObjectURL(file),
    }));
    setPlaylist(prev => [...prev, ...newTracks]);
    if (playlist.length === 0 && newTracks.length > 0) {
      setCurrentTrackIndex(0);
      setIsPlaying(true);
    }
    e.target.value = '';
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setCurrentTrackIndex(randomIndex);
    } else if (currentTrackIndex < playlist.length - 1) {
      setCurrentTrackIndex(prev => prev + 1);
    } else if (repeat) {
      setCurrentTrackIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(prev => prev - 1);
    }
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const removeTrack = (id) => {
    setPlaylist(prev => {
      const filtered = prev.filter(t => t.id !== id);
      if (filtered.length === 0) {
        setIsPlaying(false);
        setCurrentTrackIndex(0);
      } else if (currentTrackIndex >= filtered.length) {
        setCurrentTrackIndex(filtered.length - 1);
      }
      return filtered;
    });
  };

  const downloadTrack = (track) => {
    const a = document.createElement('a');
    a.href = track.url;
    a.download = track.file.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toggleFavorite = () => {
    const trackId = playlist[currentTrackIndex]?.id;
    if (!trackId) return;
   
    setFavorites(prev =>
      prev.includes(trackId)
        ? prev.filter(id => id !== trackId)
        : [...prev, trackId]
    );
  };

  const handleVolumeChange = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    setIsMuted(vol === 0);
    if (audioRef.current) {
      audioRef.current.volume = vol / 100;
    }
  };

  const toggleMute = () => {
    if (isMuted || volume === 0) {
      setVolume(80);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 80 / 100 : 0;
    }
  };

  const filteredPlaylist = playlist.filter(track =>
    track.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (audioRef.current && playlist.length > 0) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrackIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const currentTrack = playlist[currentTrackIndex];

  if (playlist.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
        <Header onUploadClick={() => fileInputRef.current?.click()} playlistLength={0} />
        <EmptyState onUploadClick={() => fileInputRef.current?.click()} />
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          multiple
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100">
      <Header onUploadClick={() => fileInputRef.current?.click()} playlistLength={playlist.length} />
     
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 mb-4">
          <Player
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            onPlayPause={togglePlayPause}
            onPrevious={handlePrevious}
            onNext={handleNext}
            canGoPrevious={currentTrackIndex > 0}
            canGoNext={currentTrackIndex < playlist.length - 1 || repeat}
            shuffle={shuffle}
            onToggleShuffle={() => setShuffle(!shuffle)}
            repeat={repeat}
            onToggleRepeat={() => setRepeat(!repeat)}
            onSeek={handleSeek}
            onToggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(currentTrack?.id)}
            volume={volume}
            isMuted={isMuted}
            onVolumeChange={handleVolumeChange}
            onToggleMute={toggleMute}
          />
        </div>
        <Playlist
          playlist={filteredPlaylist}
          currentTrackIndex={currentTrackIndex}
          onPlayTrack={setCurrentTrackIndex}
          onRemoveTrack={removeTrack}
          onDownloadTrack={downloadTrack}
          isPlaying={isPlaying}
          favorites={favorites}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          showPlaylist={showPlaylist}
          setShowPlaylist={setShowPlaylist}
        />
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        multiple
        onChange={handleFileUpload}
        className="hidden"
      />
      {currentTrack && (
        <audio
          ref={audioRef}
          src={currentTrack.url}
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
          onEnded={handleNext}
        />
      )}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
       
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default App;