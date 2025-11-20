import Arrow from "../assets/img/hero/arrow.svg";
import HeaderImg1 from "../assets/img/hero/wedding/hands.webp";
import HeaderImg2 from "../assets/img/hero/event/table2.webp";
import HeaderImg3 from "../assets/img/hero/portrait/men.webp";
import HeaderImg4 from "../assets/img/hero/event/table1.webp";
import HeaderImg5 from "../assets/img/hero/portrait/girl1.webp";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";

function Home() {
  //! Image Animations -----
  useGSAP(() => {
    gsap.fromTo(
      ".header-img",
      {
        opacity: 0,
        scale: 0.75,
      },
      {
        opacity: 1,
        scale: 1,

        duration: 0.3,
        stagger: 0.8,
        delay: 0.2,
        ease: "back.out",
      }
    );

    gsap.utils.toArray(".header-img").forEach((headerImg) => {
      const originalRotation = gsap.getProperty(headerImg, "rotation");

      Observer.create({
        target: headerImg,
        type: "touch, pointer",

        onHover: (self) => {
          gsap.to(self.target, {
            duration: 0.25,
            rotate: "+=5",
            ease: "back.out",
          });
        },

        onHoverEnd: (self) => {
          gsap.to(self.target, {
            duration: 0.25,
            rotation: originalRotation,
            ease: "back.out",
          });
        },
      });
    });
  });

  //! Font-Cycle -----

  const textRef = useRef(null);

  const fonts = [
    "Open Sans",
    "DM Serif Text",
    "Open Sans",
    "DM Serif Text",
    "Roboto Serif",
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    fonts.forEach((font, i) => {
      tl.to(textRef.current, {
        opacity: 1,
        fontFamily: font,
        duration: 0.2,
        ease: "power1",
      });
    });
  }, []);

  return (
    <section className="flex items-center justify-center max-md:flex-col-reverse m-auto h-dvh xl:w-[70%] w-full ">
      <div className="flex flex-col items-center justify-center min-w-[50%] -translate-y-6/12 pl-20 max-md:pl-0">
        <h1 className="font-outfit text-left max-md:text-center w-124.5 ">
          Lukas{" "}
          <span ref={textRef} className=" font-roboto-sans italic opacity-0">
            Meier
          </span>
        </h1>
        <h2 className="text-left opacity-60 max-md:text-center max-md:w-max w-124.5">
          Hochzeiten • Portraits • Events
        </h2>
      </div>
      <div className="flex flex-col gap-10 max-md:gap-5 items-center justify-center min-w-[50%] max-md:mb-20">
        <div className="header-images relative flex px-23.25 py-7.5 w-150.5 h-115 max-[1120px]:w-110">
          <img
            className="header-img w-95 h-[15.8525rem] rotate-3"
            src={HeaderImg1}
          />
          <img
            className="header-img w-95 h-[15.8525rem] -rotate-7"
            src={HeaderImg2}
          />
          <img
            className="header-img w-62.5 h-[20.8331rem] -rotate-7"
            src={HeaderImg3}
          />
          <img
            className="header-img w-95 h-[15.835rem] rotate-9"
            src={HeaderImg4}
          />
          <img
            className="header-img w-62.5 h-[23.4462rem] rotate-6 select-all"
            src={HeaderImg5}
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
