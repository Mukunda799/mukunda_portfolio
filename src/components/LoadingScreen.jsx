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
        setTimeout(() => onComplete(), 400);
      }
    }, 50); // Faster typing speed

    // Safety: force complete after 3 seconds no matter what
    const safety = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(safety);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050508]">
      {/* Ambient glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      {/* Typing text */}
      <div className="relative mb-8 px-4">
        <p className="text-lg sm:text-2xl md:text-4xl font-mono font-bold text-white tracking-tight text-center">
          {text}
          <span className="animate-blink ml-0.5 text-indigo-400">|</span>
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-40 sm:w-52 h-1 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-150 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #6366f1, #06b6d4)",
            boxShadow: "0 0 15px rgba(99,102,241,0.5)",
          }}
        />
      </div>
    </div>
  );
};
