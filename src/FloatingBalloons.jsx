import React, { useEffect, useState } from "react";
import "./FloatingBalloons.css";
import background from "./assets/background.png";
import foto1 from "./assets/foto1.jpeg";
import foto2 from "./assets/foto2.jpeg";
import foto3 from "./assets/foto3.jpeg";
import foto4 from "./assets/foto4.jpeg";
import foto5 from "./assets/foto5.jpeg";
import foto6 from "./assets/foto6.jpeg";
import foto7 from "./assets/foto7.jpeg";
import foto8 from "./assets/foto8.jpeg";
import foto9 from "./assets/foto9.jpeg";
import foto10 from "./assets/foto10.jpeg";
import foto11 from "./assets/foto11.jpeg";
import foto12 from "./assets/foto12.jpeg";
import foto13 from "./assets/foto13.jpeg";
import foto14 from "./assets/foto14.jpeg";
import foto15 from "./assets/foto15.jpeg";
import foto16 from "./assets/foto16.jpeg";
import foto17 from "./assets/foto17.jpeg";
import foto18 from "./assets/foto18.jpeg";
import foto19 from "./assets/foto19.jpeg";
import foto20 from "./assets/foto20.jpeg";

const NUM_BALLOONS = 8;

const random = (min, max) => Math.random() * (max - min) + min;

const fotoList = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9,
  foto10,
  foto11,
  foto12,
  foto13,
  foto14,
  foto15,
  foto16,
  foto17,
  foto18,
  foto19,
  foto20,
];

function generateNonOverlappingPositions(
  screenWidth,
  count,
  balloonWidth = 120,
  minDistance = 20
) {
  const positions = [];
  const maxLeft = screenWidth - balloonWidth;
  let tries = 0;

  while (positions.length < count && tries < count * 10) {
    const candidate = random(0, maxLeft);
    const isFar = positions.every(
      (pos) => Math.abs(pos - candidate) > balloonWidth + minDistance
    );
    if (isFar) {
      positions.push(candidate);
    }
    tries++;
  }

  return positions;
}

function getRandomColor() {
  const colors = ["#f472b6", "#34d399", "#60a5fa", "#facc15", "#a78bfa"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomUniqueItems(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function FloatingBalloons() {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const positions = generateNonOverlappingPositions(
      screenWidth,
      NUM_BALLOONS
    );

    const selectedPhotos = getRandomUniqueItems(fotoList, NUM_BALLOONS);

    const generated = Array.from({ length: NUM_BALLOONS }, (_, i) => ({
      id: i,
      left: positions[i],
      delay: random(0, 8),
      duration: random(10, 18),
      size: random(130, 180),
      img: selectedPhotos[i],
      color: getRandomColor(),
    }));

    setBalloons(generated);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden relative">
      <img
        src={background}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon-container"
          style={{
            left: `${b.left}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <div
            className="balloon"
            style={{
              width: `${b.size}px`,
              height: `${b.size + 20}px`,
              backgroundColor: b.color,
              border: "2px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "45% 45% 50% 50% / 40% 40% 60% 60% ",
              boxShadow:
                "inset -5px -10px 15px rgba(255,255,255,0.5), 5px 10px 20px rgba(0,0,0,0.2)",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "14px solid",
              borderBottomColor: b.color,
              zIndex: 1,
              borderRadius: "45% 45% 50% 50% / 40% 40% 60% 60% ",
              margin: "0 auto",
            }}
          />
          <svg
            width="60"
            height="100"
            viewBox="0 0 60 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[-10px]"
          >
            <path
              d="M30 0 C10 30, 50 60, 30 100"
              stroke="#555"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <img
            src={b.img}
            alt={`Foto ${b.id}`}
            className="w-[100px] h-[130px] sm:w-[140px] sm:h-[170px] object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
}
