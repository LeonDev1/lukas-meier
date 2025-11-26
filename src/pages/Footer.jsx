import profile from "../assets/img/footer/profilepicture-nobg.png";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <section className="flex flex-col items-center justify-center gap-1.25 mt-[10dvh]">
      <a
        className="hover:scale-110 transition-all duration-255"
        href="https://leondev1.github.io/portfolio/"
      >
        <img className="w-7 h-7" src={profile} alt="" />
      </a>
      <h3>
        Made by <a href="https://leondev1.github.io/portfolio/">Leondev</a>
      </h3>
      <h3>This Website was made for educational Purposes</h3>
      <h3>
        Copyright © {year}{" "}
        <a href="https://leondev1.github.io/portfolio/">Leondev</a>
      </h3>
    </section>
  );
}

export default Footer;
