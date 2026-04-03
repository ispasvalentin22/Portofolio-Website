"use client";

import { useEffect, useState } from "react";

export default function WavyLines() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wavy-lines-container" style={{ transform: `translateY(${scrollY * -0.4}px)` }}>
      <svg 
        className="wavy-svg" 
        viewBox="0 0 1000 1000" 
        preserveAspectRatio="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g strokeWidth="2" fill="none">
          {/* Subtle white lines */}
          <path d="M0,100 C200,300 400,-100 1000,100" stroke="rgba(255, 255, 255, 0.04)" className="path-1" />
          <path d="M0,250 C300,500 600,0 1000,250" stroke="rgba(255, 255, 255, 0.05)" className="path-2" />
          <path d="M0,450 C400,700 800,200 1000,450" stroke="rgba(255, 255, 255, 0.03)" className="path-3" />
          
          {/* Accent red-orange lines */}
          <path d="M0,600 C250,800 550,400 1000,600" stroke="rgba(255, 87, 34, 0.08)" className="path-4" />
          <path d="M0,800 C350,1000 700,600 1000,800" stroke="rgba(255, 87, 34, 0.06)" className="path-5" />
          <path d="M0,950 C450,1100 850,800 1000,950" stroke="rgba(255, 87, 34, 0.04)" className="path-6" />
        </g>
      </svg>
    </div>
  );
}
