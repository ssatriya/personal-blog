import * as React from "react";
import { Icons } from "../icons";

export default function About() {
  return (
    <div id="about" className="lg:px-6 pt-12 lg:pt-32">
      <h2 className="tracking-widest text-lg font-bold lg:hidden mb-8">
        About
      </h2>
      <p className="">
        <span className="opacity-70 font-light">My name is</span> Muhammad Yusuf
        Donny Satriyo, <span className="opacity-70">you can call me</span>{" "}
        Donny.{" "}
        <span className="opacity-70 font-light">
          I am an aspiring web developer from Indonesia. I currently use React
          with Nextjs for most of my personal projects. I&apos;ve been learning
          by making project for about 6-8 months now.
        </span>
      </p>
      <div className="mt-12 lg:hidden flex gap-4">
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
  );
}
