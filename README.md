Device Beats
React Tailwind CSS Lucide React
A modern, responsive web-based music player built with React. Device Beats allows users to upload local audio files, manage playlists, control playback with advanced features like shuffle, repeat, and favorites, all in a sleek, intuitive interface.
✨ Features

Local File Upload: Drag-and-drop or browse to upload multiple audio files (MP3, WAV, etc.).
Playlist Management: Add/remove tracks, search within the library, and toggle playlist visibility.
Playback Controls: Play/pause, skip forward/back, seek progress bar, volume control with mute.
Advanced Options: Shuffle mode, repeat (single/all), favorites (heart icon for quick access).
Responsive Design: Optimized for mobile, tablet, and desktop with Tailwind CSS.
Visual Feedback: Animated album art, equalizer bars during playback, and smooth transitions.
Download Support: Download uploaded tracks directly from the playlist.
Empty State: User-friendly onboarding when no songs are loaded.

🛠 Tech Stack

Frontend: React 18+ with Hooks (useState, useRef, useEffect)
Styling: Tailwind CSS for responsive, utility-first design
Icons: Lucide React for clean, scalable icons
Audio Handling: Native HTML5 <audio> element with object URLs for local files
Build Tool: Vite (assumed for fast development; can be adapted to Create React App)

📸 Screenshots
Desktop View
Desktop Screenshot
(Player controls, large album art, expanded playlist)
Mobile View
Mobile Screenshot
(Compact controls, collapsible playlist, touch-friendly buttons)
Empty State
Empty State Screenshot
(Encourages upload with gradient CTA button)
🚀 Quick Start
Prerequisites

Node.js (v18+)
npm or yarn

Installation

Clone the repository:textgit clone https://github.com/yourusername/device-beats.git
cd device-beats
Install dependencies:textnpm install
# or
yarn install
Run the development server:textnpm run dev
# or
yarn dev
Open http://localhost:5173 in your browser.

Build for Production
textnpm run build
# or
yarn build
Serve the dist folder with any static server (e.g., npx serve dist).
📖 Usage

Upload Songs: Click the "Upload Songs" button in the header or use the empty state prompt. Select multiple audio files.
Play Tracks: The first uploaded song auto-plays. Use the central play/pause button or click any track in the playlist.
Controls:
Seek Bar: Drag to jump to a specific time.
Volume: Slider with mute toggle.
Navigation: Previous/Next buttons (disabled when unavailable).
Modes: Toggle shuffle (random order) or repeat (loop playlist).

Playlist: Search by song name, favorite tracks (red heart), download, or remove items.
Favorites: Toggle heart on the current track; favorited items show in the playlist.

Note: Audio files are handled locally via browser URLs—no server storage. Revoke object URLs on cleanup for memory efficiency (future enhancement).
🔧 Customization

Add Album Art: Extend the TrackInfo component to accept image metadata from files.
Persistence: Integrate localStorage for saving playlists across sessions.
Themes: Use Tailwind's dark mode for a night theme toggle.
PWA: Add a manifest and service worker for offline playback.

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a feature branch (git checkout -b feature/amazing-feature).
Commit changes (git commit -m 'Add amazing feature').
Push to the branch (git push origin feature/amazing-feature).
Open a Pull Request.

Code Style

Use ESLint/Prettier for formatting.
Follow React best practices (functional components, hooks).
Write tests with Jest/React Testing Library for new features.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

Lucide Icons for beautiful, accessible icons.
Tailwind CSS for rapid UI development.
Inspired by modern music apps like Spotify and Apple Music.
