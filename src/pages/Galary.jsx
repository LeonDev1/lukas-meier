import wedding1 from "../assets/img/galary/preview/wedding/carrying.png";
import wedding2 from "../assets/img/galary/preview/wedding/samantha-gades-RHAtRIT3-CE-unsplash.png";
import wedding3 from "../assets/img/galary/preview/wedding/sandy-millar-8vaQKYnawHw-unsplash 1.png";

import portrait1 from "../assets/img/galary/preview/portrait/portrait1.png";
import portrait2 from "../assets/img/galary/preview/portrait/portrait2.png";
import portrait3 from "../assets/img/galary/preview/portrait/portrait3.png";

import events1 from "../assets/img/galary/preview/event/event3.png";
import events2 from "../assets/img/galary/preview/event/event1.png";
import events3 from "../assets/img/galary/preview/event/event2.png";
import { Link } from "react-router-dom";

function Galary() {
  return (
    <section className="relative flex justify-center items-center h-dvh w-full">
      <h1 className="absolute top-0 left-6/12 -translate-x-6/12">Galary</h1>
      <div className="flex gap-12.5 flex-col justify-center items-center w-[50%] max-w-150 min-h-50 h-auto">
        <Link to="/wedding">
          <GalaryPreview
            name="Hochzeit"
            img1={wedding1}
            img2={wedding2}
            img3={wedding3}
          />
        </Link>
        <GalaryPreview
          name="Portraits"
          img1={portrait1}
          img2={portrait2}
          img3={portrait3}
        />
        <GalaryPreview
          name="Events"
          img1={events1}
          img2={events2}
          img3={events3}
        />
      </div>
    </section>
  );
}

function GalaryPreview(props) {
  return (
    <div className="flex items-center justify-center w-full min-h-9">
      <p className="text-left min-w-auto w-50">{props.name}</p>
      <div className="galary-div relative flex items-center justify-center w-[300px] h-[100px] pr-12 pl-12 transition-all">
        <img className="galary-img z-3 left-0" src={props.img1} />
        <img
          className="galary-img galary-images-right1 left-10 z-2"
          src={props.img2}
          alt=""
        />
        <img
          className="galary-img galary-images-right2 left-20 z-1"
          src={props.img3}
          alt=""
        />
      </div>
    </div>
  );
}

export default Galary;
