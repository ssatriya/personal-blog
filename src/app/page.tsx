"use client";

import * as React from "react";

import LeftWrapper from "@/components/left/left-wrapper";
import RightWrapper from "@/components/right/right-wrapper";

export default function Home() {
  React.useEffect(() => {
    document.addEventListener("pointermove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let circleX = (mouseX / document.body.clientWidth) * 100;
      let circleY = (mouseY / document.body.clientHeight) * 100;

      document.body.style.backgroundImage = `radial-gradient(circle 440px at ${circleX}% ${circleY}%, #091b38 0%, transparent)`;
    });
  }, []);

  return (
    <main className="w-full lg:flex max-w-lg:flex-col min-h-screen justify-between xl:container mx-auto px-8 xl:px-40">
      <div className="lg:h-full lg:w-full lg:sticky lg:top-0">
        <LeftWrapper />
      </div>
      <RightWrapper />
    </main>
  );
}
