"use client";

export default function Nav() {
  return (
    <div className="lg:flex w-full mt-32 hidden">
      <ul className="opacity-75 flex flex-col gap-4 font-semibold text-sm uppercase tracking-wider">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  );
}
