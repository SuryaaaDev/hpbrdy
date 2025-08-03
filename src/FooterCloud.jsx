import React from "react";

export default function FooterCloud() {
  return (
    <footer className="relative bg-blue-200 overflow-hidden">
      <div className="h-32 bg-blue-200 w-full z-10 relative flex items-center justify-center">
        <p className="text-sm font-semibold text-blue-800 pt-15 px-15 text-center">
          © 2025 Happy Birthday My Love | Made with <span className="text-pink-600">love</span> and happiness❤️❤️
        </p>
      </div>

      {/* Awan SVG di bagian bawah */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,0 C150,100 350,0 600,80 C850,160 1050,20 1200,80 L1200,0 L0,0 Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </footer>
  );
}
