"use client";

import * as React from "react";

import LeftWrapper from "@/components/left/left-wrapper";
import RightWrapper from "@/components/right/right-wrapper";
import { Icons } from "@/components/icons";
import { Particle } from "jparticles";

export default function PageWrapper() {
  React.useEffect(() => {
    new Particle("#particles", {
      maxSpeed: 0.1,
      range: 700,
      proximity: 100,
      lineShape: "spider",
    });
  }, []);

  return (
    <>
      <div id="particles" className="absolute inset-0" />
      <div className="w-full lg:flex max-w-lg:flex-col min-h-screen justify-between xl:container mx-auto px-8 xl:px-24 ">
        <div className="lg:h-full lg:w-full lg:sticky lg:top-0">
          <div className="flex flex-col justify-between lg:min-h-screen">
            <LeftWrapper />
            <div className="mb-12 lg:flex gap-4 hidden">
              <button aria-label="github">
                <Icons.github className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
              </button>
              <button aria-label="twitter">
                <Icons.twitter className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
              </button>
              <button aria-label="linkedin">
                <Icons.linkedIn className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
        <RightWrapper />
      </div>
    </>
  );
}
