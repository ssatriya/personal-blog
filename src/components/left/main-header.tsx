"use client";

import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="w-full">
      <Link href="/">
        <h1 className="text-4xl md:text-6xl font-bold">Yusuf Donny</h1>
      </Link>
      <h2 className="text-lg py-2 md:text-xl">Frontend Web Developer</h2>
    </div>
  );
}
