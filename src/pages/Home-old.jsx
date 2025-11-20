import Arrow from "../assets/img/hero/arrow.svg";
import HeaderImg1 from "../assets/img/hero/wedding/hands.jpg";
import HeaderImg2 from "../assets/img/hero/event/table2.jpg";
import HeaderImg3 from "../assets/img/hero/portrait/men.jpg";
import HeaderImg4 from "../assets/img/hero/event/table1.jpg";
import HeaderImg5 from "../assets/img/hero/portrait/girl1.jpg";
import { useEffect, useState } from "react";

function Home() {
  const [currentPhoto, setCurrentPhoto] = useState(1);

  function revealPhoto() {
    setCurrentPhoto((prev) => Math.min(prev + 1, 5));
    console.log(currentPhoto); // Achtung: Dieser Log zeigt noch den alten Wert, useState ist async
  }

  useEffect(() => {
    setTimeout(() => {
      setCurrentPhoto((prev) => Math.min(prev + 1, 6));
      console.log(currentPhoto);
    }, 1000);
  });

  return (
    <section className="flex items-center justify-center max-md:flex-col-reverse m-auto h-dvh xl:w-[70%] w-full ">
      <div className="flex flex-col items-center justify-center w-[50%] -translate-y-6/12 pl-20 max-md:pl-0">
        <h1 className="font-outfit text-left max-md:text-center w-124.5 ">
          Lukas <span className="font-roboto-sans">Meier</span>
        </h1>
        <h2 className="text-left max-md:text-center max-md:w-max w-124.5">
          Hochzeiten • Portraits • Events
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%]">
        <div className="relative flex mb-10 px-23.25 py-7.5 w-150.5 h-115 max-[1120px]:w-110">
          <img
            className="header-img w-95 h-[15.8525rem] rotate-3"
            style={{
              display: currentPhoto >= 1 ? "block" : "",
              transform: currentPhoto >= 3 ? "scale(1)" : "",
            }}
            src={HeaderImg1}
          />
          <img
            className="header-img w-95 h-[15.8525rem] -rotate-7"
            style={{
              display: currentPhoto >= 3 ? "block" : "",
              transform: currentPhoto >= 3 ? "scale(1.1)" : "",
            }}
            src={HeaderImg2}
          />
          <img
            className="header-img w-62.5 h-[20.8331rem] -rotate-7"
            src={HeaderImg3}
            style={{
              display: currentPhoto >= 4 ? "block" : "",
              transform: currentPhoto >= 4 ? "scale(1)" : "",
            }}
          />
          <img
            className="header-img w-95 h-[15.835rem] rotate-9"
            src={HeaderImg4}
            style={{
              display: currentPhoto >= 5 ? "block" : "",
            }}
          />
          <img
            className="header-img w-62.5 h-[23.4462rem] rotate-6"
            src={HeaderImg5}
            style={{
              display: currentPhoto >= 6 ? "block" : "",
            }}
          />
        </div>
        <h3>Professionelle Fotografie aus Leidenschaft</h3>
      </div>
      <div className="opacity-60">
        <h3 className="flex flex-col gap-[-0.125rem] items-center justify-center absolute left-6/12 bottom-2 -translate-x-6/12">
          See Portfolio <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="black"
          >
            <path d="M480-240 240-480l56-56 144 144v-368h80v368l144-144 56 56-240 240Z" />
          </svg>
        </h3>
      </div>
    </section>
  );
}

export default Home;
