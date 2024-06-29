// This component is the layout for the app,
//it includes the header, footer and the main content of the app.
//The main content is rendered using the Outlet component from react-router-dom.
//The layout component is used in the App component to wrap the entire app.

import ParallaxStars from "../assets/ParallaxStars";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="layout relative flex flex-col p-2">
      <ParallaxStars />

      <Header />

      <main className="container border">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
