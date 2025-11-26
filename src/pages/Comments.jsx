import Jungle from "../assets/img/galary/wedding/jungle.webp";

function Comments() {
  return (
    <section className="flex max-md:flex-col items-center justify-center">
      <Comment
        img={Jungle}
        heading="Wunderschöne Hochzeitsfotos!"
        text="Lukas hat unsere Hochzeit perfekt eingefangen. Die Fotos sind emotional,
        natürlich und wunderschön!"
      />
      <Comment
        img={Jungle}
        heading="Energie des Konzerts großartig eingefangen."
        text="Atmosphärische Aufnahmen, die Künstler und Publikum begeistert haben."
      />
    </section>
  );
}

function Comment(props) {
  return (
    <div className="flex gap-5 flex-col items-center justify-center w-108 p-10 h-auto text-center">
      <img
        className="h-64.25 rounded-[1.5625rem] shadow-full"
        src={props.img}
        alt=""
      />
      <p className="italic font-roboto-serif font-medium">{props.heading}</p>
      <p>{props.text}</p>
    </div>
  );
}

export default Comments;
