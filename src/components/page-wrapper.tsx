"use client";

import * as React from "react";

import LeftWrapper from "@/components/left/left-wrapper";
import RightWrapper from "@/components/right/right-wrapper";
import { Icons } from "@/components/icons";
import { Particle } from "jparticles";
import { Button } from "./ui/button";
import { File } from "lucide-react";

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
              <a href="/resume.pdf" aria-label="Github link" target="_blank">
                <Button aria-label="Github link" size="icon">
                  <File className="h-6 w-6 fill-slate-600 group-hover:fill-slate-400 transition-colors" />
                </Button>
              </a>
              <a
                href="https://github.com/ssatriya"
                aria-label="Github link"
                target="_blank"
              >
                <Button aria-label="Github link" size="icon">
                  <Icons.github className="h-6 w-6 fill-slate-600 group-hover:fill-slate-400 transition-colors" />
                </Button>
              </a>
              <a
                href="https://twitter.com/ssatriyaaa"
                aria-label="Twitter link"
                target="_blank"
              >
                <Button aria-label="Twitter link" size="icon">
                  <Icons.twitter className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/ssatriya/"
                aria-label="Linkedin link"
                target="_blank"
              >
                <Button aria-label="Linkedin link" size="icon">
                  <Icons.linkedIn className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
                </Button>
              </a>
            </div>
          </div>
        </div>
        <RightWrapper />
      </div>
    </>
  );
}
