import { Outlet } from "react-router-dom";
import { useState, useRef } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import ParallaxStars from "../assets/ParallaxStars";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Layout() {
  //refs
  const layoutRef = useRef(null);
  const parallaxRef = useRef(null);

  //state
  const [activeSection, setActiveSection] = useState("home--hero");

  //state

  //animations
  useGSAP(
    () => {
      //variables
      const homeHero = document.getElementById("home--hero");
      const homeTools = document.getElementById("home--tools");
      const homeAbout = document.getElementById("home--about");
      const homePortfolio = document.getElementById("home--portfolio");
      const homeContact = document.getElementById("home--contact");
      const parallaxBg = parallaxRef.current;

      //animations
      // gsap.to(parallaxBg, {
      //   scrollTrigger: {
      //     trigger: homePortfolio,
      //     start: "top 50%",
      //     end: "bottom bottom",
      //     // markers: true,
      //     id: "portfolio-section",
      //     toggleActions: "play reverse play reverse", //onEnter, onLeave, onEnterBack, onLeaveBack
      //     onToggle: (self) => console.log("toggled, isActive:", self.isActive),
      //     // toggleClass: "bg-red-500",
      //   },
      //   duration: 2,
      //   ease: "power4.inOut",
      //   // background:
      //   // "radial-gradient(ellipse at bottom, #134e4a 0%, #090a0f 100%)", //teal
      //   // "radial-gradient(ellipse at bottom, #881337 0%, #090a0f 100%)", //rose
      // })
    },
    { scope: layoutRef.current }
  );

  //jsx
  return (
    <div ref={layoutRef} className="layout relative flex flex-col">
      {/* animated bg */}
      <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden">
        <ParallaxStars ref={parallaxRef} className="" />
      </div>
      {/* header */}
      <div className="flex h-full grow flex-col lg:flex-row">
        <header className="sticky top-0 z-50 flex w-full px-2 pt-2 lg:h-screen lg:w-24 lg:min-w-[88px] lg:py-2 lg:pr-0">
          <Nav />
        </header>
        {/* main */}
        <div className="flex flex-col">
          <main className="mx-auto flex w-full flex-col p-2">
            <Outlet />
          </main>
          {/* footer */}
          <footer className="xl:p-12">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
