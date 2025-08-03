import "./App.css";
import FireworksPage from "./FireworksPage";
import BirthdayCard from "./BirthdayCard";
import BirthdayCake from "./BirthdayCake";
import FloatingBalloons from "./FloatingBalloons";
import FooterCloud from "./FooterCloud";
import MusicPlayer from "./MusicPlayer";
import cloud from "./assets/image.png";
import cloud2 from "./assets/image2.png";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <FireworksPage />
        <BirthdayCake />
        <BirthdayCard />

        <div className="relative min-h-screen">
          <div className="bg-pink-100 sm:h-[200px]"></div>

          <img
            src={cloud}
            alt="awan"
            className="absolute top-13 sm:top-45 -left-10 sm:-left-45 w-4/5 sm:w-1/2 sm:object-cover z-10"
            style={{ transform: "translateY(-50%)" }}
          />
          <img
            src={cloud}
            alt="awan"
            className="absolute top-11 sm:op-42 left-20 sm:-left-25 w-4/5 sm:w-1/2 object-cover z-10"
            style={{ transform: "translateY(-50%)" }}
          />
          <img
            src={cloud}
            alt="awan"
            className="absolute top-11 sm:top-42 left-60 sm:left-75 w-4/5 sm:w-1/2 object-cover z-10"
            style={{ transform: "translateY(-50%)" }}
          />
          <img
            src={cloud}
            alt="awan"
            className="absolute top-10 sm:top-42 left-100 sm:left-175 w-1/2 object-cover z-10"
            style={{ transform: "translateY(-50%)" }}
          />
          <img
            src={cloud}
            alt="awan"
            className="absolute top-6 sm:top-42 left-40 sm:left-275 w-1/2 object-cover z-10"
            style={{ transform: "translateY(-50%)" }}
          />

          <div className="bg-pink-100 min-h-[50px] z-0 relative mb-10"></div>
          <FloatingBalloons />
        </div>
        <div className="relative h-full overflow-visible">
          <div className="bg-fuchsia-50/50 sm:h-[150px] -z-30"></div>

          <img
            src={cloud2}
            alt="awan"
            className="absolute top-13 sm:top-30 -left-20 sm:-left-45 w-4/5 sm:w-1/2 sm:object-cover z-[999]"
            style={{ transform: "translateY(-50%)" }}
          />
          <img
            src={cloud2}
            alt="awan"
            className="absolute top-11 sm:top-32 left-20 sm:left-75 w-4/5 sm:w-1/2 object-cover z-50"
            style={{ transform: "translateY(-50%)" }}
          />
          <img
            src={cloud2}
            alt="awan"
            className="absolute top-20 sm:top-30 left-65 sm:left-175 w-1/2 object-cover z-50"
            style={{ transform: "translateY(-50%)" }}
          />
          <img
            src={cloud2}
            alt="awan"
            className="absolute top-6 sm:top-28 left-70 sm:left-275 w-1/2 object-cover z-50"
            style={{ transform: "translateY(-50%)" }}
          />

          <div className="bg-white min-h-[50px] z-0 relative mb-10"></div>
          <FooterCloud />
        </div>
      </div>
      <MusicPlayer />
    </>
  );
}

export default App;
