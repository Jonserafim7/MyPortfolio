import React, { useEffect, useState, useRef, forwardRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
import "./parallaxStars.css";

const ParallaxStars = forwardRef((props, ref) => {
  // Refs
  const startsContainerRef = useRef(null);
  let tl = useRef(null);

  // State
  const [dynamicStyles, setDynamicStyles] = useState("");

  // Function to generate random box shadows
  function generateBoxShadows(n) {
    let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(
      Math.random() * 2000
    )}px #FFF`;
    for (let i = 2; i <= n; i++) {
      value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(
        Math.random() * 2000
      )}px #FFF`;
    }
    return value;
  }

  // Generate box shadows on mount
  useEffect(() => {
    // Generate unique box shadows for each layer
    const shadow1 = generateBoxShadows(700);
    const shadow2 = generateBoxShadows(200);
    const shadow3 = generateBoxShadows(100);

    // Dynamic style tag content
    const styles = `
      #stars1, #stars1::after { box-shadow: ${shadow1}; }
      #stars2, #stars2::after { box-shadow: ${shadow2}; }
      #stars3, #stars3::after { box-shadow: ${shadow3}; }
    `;

    setDynamicStyles(styles);
  }, []); // Empty dependency array means this effect runs only once on mount

  // animations
  useGSAP(() => {}, { scope: ref || startsContainerRef.current });

  // jsx
  return (
    <div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden">
      <style>{dynamicStyles}</style>
      <section
        ref={ref || startsContainerRef} // Use forwarded ref if provided, else use local ref
        className={`stars-container`}
      >
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
      </section>
    </div>
  );
});

export default ParallaxStars;
