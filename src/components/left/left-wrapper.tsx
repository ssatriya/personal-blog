"use client";

import { Github } from "lucide-react";
import MainHeader from "./main-header";
import Nav from "./nav";

export default function LeftWrapper() {
  return (
    <div className="w-full flex flex-col items-center pt-12 md:pt-32">
      <MainHeader />
      <Nav />
    </div>
  );
}
