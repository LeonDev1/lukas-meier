import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer, ScrollTrigger, SplitText } from "gsap/all";

import Portrait from "../assets/img/about/portrait.jpg";
import { useRef } from "react";

function About() {
  useGSAP(() => {
    //! ImgHover
    const originalRotation = gsap.getProperty(".about-img", "rotation");

    Observer.create({
      target: ".about-img",
      type: "touch, pointer",

      onHover: (self) => {
        gsap.to(self.target, {
          duration: 0.25,
          rotate: "+=2.5",
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

    //! TextReveal
    let split = SplitText.create(".about-textblock", { type: "chars" });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: ".about-textblock",
        start: "top 80%",
        end: "top 40%",
        scrub: true,
      },
      opacity: 0.4,
      stagger: 0.5,
    });
  });

  return (
    <section className="flex flex-col items-center justify-center h-dvh w-full">
      <div className="flex max-md:flex-col gap-10 items-center justify-between w-[89.58%] max-w-260 px-7">
        <img
          className="about-img h-67.5 w-67.5 rounded-[.9375rem] hover:cursor-pointer"
          src={Portrait}
          alt="Lukas"
        />
        <div>
          <p className="about-textblock max-w-155">
            Ich bin Lukas Meier, Fotograf aus München mit über 5 Jahren
            Erfahrung in den Bereichen Hochzeits-, Portrait- und
            Eventfotografie. <br /> <br /> Meine Bilder sollen echte Emotionen
            einfangen - authentisch, natürlich und zeitlos.
            <br />
            Mir ist wichtig, eine entspannte Atmosphäre zu schaffen, in der sich
            jeder wohlfühlt und die besten Bilder entstehen können.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
