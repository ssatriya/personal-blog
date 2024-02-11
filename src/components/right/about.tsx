import * as React from "react";
import { Icons } from "../icons";
import { Button } from "../ui/button";

export default function About() {
  return (
    <div id="about" className="lg:px-6 pt-12 lg:pt-32 z-20">
      <h2 className="tracking-widest text-lg font-bold lg:hidden mb-8">
        About
      </h2>
      <p>
        <span className="opacity-70">Hello, I&apos;m</span> Muhammad Yusuf Donny
        Satriyo, <span className="opacity-70">you can call me </span>Donny,{" "}
        <span className="opacity-70">
          and I am a junior-level Frontend Web Developer specializing in React
          and Next.js. Despite being in the early stages of my web development
          journey, I am enthusiastic and dedicated to expanding my skills and
          contributing to the world of web development.
        </span>
      </p>
      <br />
      <p className="opacity-80">
        I am passionate about creating user-friendly interfaces and leveraging
        the power of React and Next.js to build dynamic and responsive websites.
        Eager to collaborate, learn, and grow within the ever-evolving field of
        web development, I am excited to take on new challenges and contribute
        to innovative projects.
      </p>
      <div className="mt-12 lg:hidden flex gap-4 relative">
        <a
          href="https://github.com/ssatriya"
          aria-label="Github link"
          target="_blank"
        >
          <Button size="icon">
            <Icons.github className="h-6 w-6 fill-slate-600 group-hover:fill-slate-400 transition-colors" />
          </Button>
        </a>
        <a
          href="https://twitter.com/ssatriyaaa"
          aria-label="Twitter link"
          target="_blank"
        >
          <Button size="icon">
            <Icons.twitter className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/ssatriya/"
          aria-label="Linkedin link"
          target="_blank"
        >
          <Button size="icon">
            <Icons.linkedIn className="h-6 w-6 fill-slate-600 hover:fill-slate-400 transition-colors" />
          </Button>
        </a>
      </div>
    </div>
  );
}
