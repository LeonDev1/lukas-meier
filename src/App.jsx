import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer, ScrollTrigger, SplitText } from "gsap/all";

// pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Galary from "./pages/Galary.jsx";
import Comments from "./pages/Comments.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, Observer);
  return (
    <>
      <Home />
      <About />
      <Galary />
      <Comments />
      <Footer />
    </>
  );
}

export default App;
