import * as React from "react";
import { Icons } from "../icons";

export default function About() {
  return (
    <div id="about" className="lg:px-6 pt-12 lg:pt-32">
      <h2 className="tracking-widest text-lg font-bold lg:hidden mb-8">
        About
      </h2>
      <p>
        {/* <span className="opacity-70 font-light">My name is</span> Muhammad Yusuf
        Donny Satriyo, <span className="opacity-70">you can call me</span>{" "}
        Donny.{" "}
        <span className="opacity-70 font-light">
          I am an aspiring web developer from Indonesia. I currently use React
          with Nextjs for most of my personal projects. I&apos;ve been learning
          by making project for about 6-8 months now.
        </span> */}
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
        <a href="https://github.com/ssatriya" target="_blank">
          <button>
            <Icons.github className="h-6 w-6 fill-slate-600" />
          </button>
        </a>
        <a href="https://twitter.com/ssatriyaaa" target="_blank">
          <button>
            <Icons.twitter className="h-6 w-6 fill-slate-600" />
          </button>
        </a>
        <a href="https://www.linkedin.com/in/ssatriya/" target="_blank">
          <button>
            <Icons.linkedIn className="h-6 w-6 fill-slate-600" />
          </button>
        </a>
      </div>
    </div>
  );
}
