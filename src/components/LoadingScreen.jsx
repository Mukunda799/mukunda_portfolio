import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const fullText = "<Code. Create. Innovate. />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      setProgress(Math.min((index / fullText.length) * 100, 100));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
          document.body.classList.add("loaded");
        }, 800);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508]">
      {/* Ambient glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

      {/* Typing text */}
      <div className="relative mb-8">
        <p className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight">
          {text}
          <span className="animate-blink ml-0.5 text-indigo-400">|</span>
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-52 sm:w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #6366f1, #06b6d4)",
            boxShadow: "0 0 20px rgba(99,102,241,0.6)",
          }}
        />
      </div>

      {/* Tagline */}
      <p className="mt-6 text-xs text-white/30 tracking-widest uppercase">
        Loading experience...
      </p>
    </div>
  );
};
