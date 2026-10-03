import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, X, ShoppingBag, RotateCcw } from 'lucide-react';
import { Ebook } from '../types';

interface AudioPlayerBarProps {
  ebook: Ebook | null;
  onClose: () => void;
  onAddToCart: (ebook: Ebook) => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  ebook,
  onClose,
  onAddToCart,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!ebook) return;
    setIsPlaying(true);
    setProgress(0);
  }, [ebook]);

  // Audio timer simulation & gentle audio chime indicator
  useEffect(() => {
    let interval: any;
    if (isPlaying && ebook) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.8 * playbackSpeed;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, ebook, playbackSpeed]);

  if (!ebook) return null;

  const totalSeconds = 180; // 3 min excerpt
  const currentSeconds = Math.floor((progress / 100) * totalSeconds);
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const togglePlay = () => {
    // Generate gentle subtle binaural tone on user interaction to provide authentic audible presence
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(!isPlaying ? 432 : 320, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (err) {
      // AudioContext not critical
    }

    if (progress >= 100) {
      setProgress(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-4xl mx-auto z-40 bg-[#1A1615] text-[#FAF8F5] rounded-2xl shadow-2xl border border-white/10 p-3 sm:p-4 backdrop-blur-lg animate-in slide-in-from-bottom duration-300">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left: Book Meta */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <img
            src={ebook.coverImage}
            alt={ebook.title}
            className="w-10 h-13 object-cover rounded-md shadow shrink-0"
          />
          <div className="min-w-0 flex-1">
            <div className="text-[11px] text-[#D4AF37] uppercase tracking-wider font-semibold flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Extrait Audio · Introduction</span>
            </div>
            <h4 className="text-sm font-serif font-semibold text-white truncate max-w-[220px] sm:max-w-xs">
              {ebook.title}
            </h4>
            <div className="text-[11px] text-[#FAF8F5]/60">
              Voix de synthèse guidée · {ebook.author}
            </div>
          </div>
        </div>

        {/* Center: Controls & Audio Waveform / Progress */}
        <div className="flex-1 w-full max-w-md flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setProgress(0)}
              className="text-[#FAF8F5]/60 hover:text-white transition-colors cursor-pointer"
              title="Recommencer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-[#9E7A4A] hover:bg-[#8A6739] text-white flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-md"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>

            {/* Speed toggle */}
            <button
              onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 1.25 : 1)}
              className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white/80 hover:text-white cursor-pointer"
              title="Vitesse de lecture"
            >
              {playbackSpeed}x
            </button>
          </div>

          {/* Progress bar & timeline */}
          <div className="w-full flex items-center gap-2 text-[11px] text-[#FAF8F5]/60 font-mono">
            <span>{formatTime(currentSeconds)}</span>
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newProgress = Math.min(100, Math.max(0, (clickX / rect.width) * 100));
                setProgress(newProgress);
              }}
              className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
            >
              <div
                className="h-full bg-[#D4AF37] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>{ebook.audioDuration}</span>
          </div>
        </div>

        {/* Right: Add to cart & Close */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => onAddToCart(ebook)}
            className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Acheter ({ebook.price} €)</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-white/50 hover:text-white rounded-md transition-colors cursor-pointer"
            aria-label="Fermer le lecteur"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
