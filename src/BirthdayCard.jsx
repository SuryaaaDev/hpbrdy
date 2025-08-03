import React, { useState } from "react";
import "./BirthdayCard.css";
import background from "./assets/background2.png";

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [animation, setAnimation] = useState(""); // animasi flip

  const pages = [
    {
      title: "🎉🎂 Happy Birthday 🎂🎉",
      content:
        "cieeee hariii iniii pacarrkuuuu ulangg tahunnn, selamattt bertambahh usiaaa sayanggg, semogaa sehatt selaluu, panjangg umurrr, bahagiaa selaluu, suksess selaluu, dan semogaa cita-citamu tercapai yaaa sayanggg, AAMIIN. doa terbaikkk untukmu sayanggg, semoga kamu selalu bahagiaa, dan semoga kita selalu bersamaa, AAMIIN❤️❤️",
    },
    {
      title: "🎉🎂 Happy Birthday 🎂🎉",
      content:
        "padaa umur kali inii semoga kamuu bisaa lebih dewasaa, lebih sabarr, lebih sayangg sama akuu hehe, lebih sayangg sama diri sendiri, lebih sayangg sama orang tuaaa, dan semoga kamuu bisa lebih baik lagi dari sebelumnya yaaa sayanggg, AAMIIN💖💖. semogaa wishlist kamuu di tahun inii tercapai yaa sayangg, akuu akan selaluu mendoakan muu disini",
    },
    {
      title: "🎉🎂 Happy Birthday 🎂🎉",
      content:
        "kamuu jangan lupa jaga kesehatann sayangg, kuranginn mie nyaaa😡😡, gantii mie nyaa dengann ayam geprekk hehe, ingattt kalauu adaa apaa apaa selaluu bilang yaaa sayanggg, luapinn semuaa keluh kesah kamuu ke akuuu, akuu akann selaluu berusahaa yang terbaikk untukk dirimuuu🥰🥰",
    },
    {
      title: "🎉🎂 Happy Birthday 🎂🎉",
      content:
        "jangann takut untukk menggapai citaa citaa kamuu yaa sayanggg, jangann takutt gagal, akuu akann selaluu dukung dan support kamuu,sekalii lagii jangan pernahh merasaa sendirii, i'm here for you baby, akuu bangga padamuu sayangg karenaa kamuu sudah bisaa bertahan sejauhh inii, jangann lupaa tersenyumm dan bersyukurr setiap hari yaa sayanggg",
    },
    {
      title: "I LOVEE YOUUU❤️",
      content: "Intinyaa kamuu bahagiaa teruss yaaa sayanggg, dan semogaa di saat kamuu bahagiaa selaluu adaa akuu di sampingmuu, akuuu berharapp kamuu bisaa bersamaakuu selamanyaa AAMIIN YA ALLAH🥺🥺🤲🤲, hidupp lebihh lamaa lagiii yaaa sayangggg, akuuu sangattt mencintaimuu melebihii cintaaaakuuu padaa dirikuu🥺❤️",
    },
    {
      title: "I'M ALWAYS HERE FOR U💖",
      content: "I LOVEE YOUUU MOREEE SAYANGGGKUUU CINTAAAAKUUUU PACARRRKUUU IMUTTTKKUUU DUNIAAAKUUUU GEMESSSSKUUU CALONNNN ISTRIKUUUUU ❤️❤️💓💓",
    },
  ];

  const handlePageChange = (direction) => {
    if (
      (direction === 1 && page < pages.length - 1) ||
      (direction === -1 && page > 0)
    ) {
      setAnimation(direction === 1 ? "flip-next" : "flip-prev");

      setTimeout(() => {
        setPage((prev) => prev + direction);
        setAnimation("");
      }, 600);
    }
  };

  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen py-36">
      <img
        src={background}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className={`birthdayCard ${isOpen ? "open" : ""}`}>
        <div className="cardFront">
          <h3 className="happy">HAPPY BIRTHDAY MY LOVE</h3>
          <div className="balloons">
            <div className="balloonOne" />
            <div className="balloonTwo" />
            <div className="balloonThree" />
            <div className="balloonFour" />
          </div>
        </div>

        <div className={`cardInside ${animation}`}>
          <div className="cardContent flex flex-col justify-between h-full px-4 pb-16">
            <h3 className="back">{pages[page].title}</h3>
            <p>{pages[page].content}</p>

            {page === pages.length - 1 && <p className="name">– Dari Pacarrrmuuu</p>}

            <div className="flex justify-between items-center mt-10 px-1 text-sm">
              <button
                className="px-2.5 py-1 bg-black hover:bg-gray-600 rounded"
                onClick={() => handlePageChange(-1)}
                disabled={page === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="m2 10l8 8l1.4-1.4L5.8 11H18V9H5.8l5.6-5.6L10 2z"
                  />
                </svg>
              </button>
              <p className="text-center my-4 text-gray-300 text-sm mt-4 italic">
                Halaman {page + 1} dari {pages.length}
              </p>
              <button
                className="px-2.5 py-1 bg-black hover:bg-gray-600 rounded"
                onClick={() => handlePageChange(1)}
                disabled={page === pages.length - 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="mt-6 px-6 py-2 bg-yellow-300 hover:bg-yellow-400 transition rounded shadow font-semibold"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Tutup Kartu" : "Buka Kartu"}
      </button>
    </div>
  );
}
