"use client";

import * as React from "react";
import gsap from "gsap";

import LeftWrapper from "@/components/left/left-wrapper";
import RightWrapper from "@/components/right/right-wrapper";

export default function Home() {
  React.useEffect(() => {
    document.addEventListener("pointermove", (pos) => {
      let x = gsap.utils.mapRange(0, window.innerWidth, 0, 100, pos.clientX);
      let y = gsap.utils.mapRange(0, window.innerHeight, 0, 100, pos.clientY);
      gsap.set(".mask", {
        "--mouse-x": x + "%",
      });
      gsap.set(".mask", {
        "--mouse-y": y + "%",
      });
    });
  }, []);

  return (
    <div className="">
      <main className="w-full flex min-h-screen justify-between container mx-auto px-40">
        <LeftWrapper />
        <RightWrapper />
      </main>
    </div>
  );
}
