// components
import Hero from "./Hero";
import Tools from "./Tools";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="home flex h-full w-full flex-col items-center gap-20 xl:gap-52">
      <Hero />
      <Tools />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
