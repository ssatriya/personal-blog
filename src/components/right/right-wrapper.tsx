import * as React from "react";

import About from "./about";
import Projects from "./projects";
import Footer from "../footer";

export default function RightWrapper() {
  return (
    <div className="w-full flex flex-col items-center gap-12 lg:gap-40">
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
