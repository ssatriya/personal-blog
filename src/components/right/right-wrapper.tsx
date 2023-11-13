"use client";

import * as React from "react";

import About from "./about";
import Projects from "./projects";

export default function RightWrapper() {
  return (
    <div className="w-full flex flex-col items-center gap-40">
      <About />
      <Projects />
    </div>
  );
}
