"use client";

import { cn } from "@/lib/utils";

const Visualizer = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="flex items-end gap-1 h-6">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "w-1 bg-primary transition-all duration-300",
            isPlaying ? "h-full" : "h-0.5"
          )}
          style={{
            animation: isPlaying
              ? `wave 1.2s ease-in-out ${i * 0.2}s infinite alternate`
              : "none",
          }}
        />
      ))}
    </div>
  );
};

export default Visualizer;
