"use client";

import * as React from "react";

import LeftWrapper from "@/components/left/left-wrapper";
import RightWrapper from "@/components/right/right-wrapper";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Icons } from "@/components/icons";

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
    <main className="w-full lg:flex max-w-lg:flex-col min-h-screen justify-between xl:container mx-auto px-8 xl:px-24">
      <div className="lg:h-full lg:w-full lg:sticky lg:top-0">
        <div className="flex flex-col justify-between lg:min-h-screen">
          <LeftWrapper />
          <div className="mb-12 lg:flex gap-4 hidden">
            <button>
              <Icons.github className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
            </button>
            <button>
              <Icons.twitter className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
            </button>
            <button>
              <Icons.linkedIn className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
      <RightWrapper />
    </main>
  );
}
