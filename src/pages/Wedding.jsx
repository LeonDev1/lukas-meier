import React from "react";
import Hands from "../assets/img/galary/wedding/hands.webp";
import Rings from "../assets/img/galary/wedding/rings.webp";
import Jungle from "../assets/img/galary/wedding/jungle.webp";
import Sky from "../assets/img/galary/wedding/sky.webp";

import WeddingImg from "../assets/img/galary/wedding/wedding.webp";
import Beach from "../assets/img/galary/wedding/beach.webp";
import Hands2 from "../assets/img/hero/wedding/hands.webp";
import Carrying from "../assets/img/hero/wedding/carrying.webp";

function Wedding() {
  return (
    <section className="relative flex flex-col gap-11 justify-center items-center h-dvh w-full">
      <h1 className="absolute top-5 left-6/12 -translate-x-6/12">Hochzeit</h1>
      <div className="flex flex-wrap max-md:flex-col justify-baseline gap-4 max-w-6xl mx-auto">
        <img className="h-[209px] w-auto object-cover" src={Hands} alt="" />
        <img className="h-[209px] w-auto object-cover" src={Rings} alt="" />
        <img className="h-[209px] w-auto object-cover" src={Jungle} alt="" />
        <img className="h-[209px] w-auto object-cover" src={Sky} alt="" />
      </div>
      <div className="flex flex-wrap max-md:flex-col justify-baseline gap-4 max-w-6xl mx-auto">
        <img
          className="h-[209px] w-auto object-cover"
          src={WeddingImg}
          alt=""
        />
        <img className="h-[209px] w-auto object-cover" src={Beach} alt="" />
        <img className="h-[209px] w-auto object-cover" src={Hands2} alt="" />
        <img className="h-[209px] w-auto object-cover" src={Carrying} alt="" />
      </div>
      {/* <div className="flex justify-between w-[25%] h-[209px]">
        <img className="" src={WeddingImg} alt="" />
        <img className="" src={Beach} alt="" />
        <img className="" src={Hands2} alt="" />
        <img className="" src={Carrying} alt="" />
      </div> */}
      <div></div>
    </section>
  );
}

export default Wedding;
