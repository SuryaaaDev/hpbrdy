import { useRef, useState, useEffect } from "react";
import song from "./assets/hbd.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!playing);
    setShowTitle(true);
    setTimeout(() => setShowTitle(false), 3000);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.warn("Autoplay diblokir, menunggu interaksi...");
        // Tunggu klik pengguna
        const handleUserInteraction = async () => {
          try {
            await audio.play();
            setPlaying(true);
            window.removeEventListener("click", handleUserInteraction);
          } catch (error) {
            console.error("Gagal play setelah interaksi:", error);
          }
        };

        window.addEventListener("click", handleUserInteraction);
      }
    };

    tryAutoplay();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center space-x-2">
      {showTitle && (
        <div className="bg-white e-full text-pink-600 px-3 py-3 rounded-full shadow-md text-sm font-medium animate-fade-in-out">
          🎂 Happy Birthday 🎂
        </div>
      )}

      <div
        onClick={togglePlay}
        className="bg-pink-100 shadow-lg rounded-full p-3 flex justify-center items-center cursor-pointer hover:bg-pink-200 transition"
      >
        <audio ref={audioRef} src={song} loop preload="auto" />
        <button
          className="text-pink-600 hover:text-pink-700 focus:outline-none"
          title={playing ? "Pause lagu" : "Mainkan lagu"}
        >
          {playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
