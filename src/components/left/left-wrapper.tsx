"use client";

import MainHeader from "./main-header";
import Nav from "./nav";

export default function LeftWrapper() {
  return (
    <div className="w-full flex flex-col items-center pt-32">
      <MainHeader />
      <Nav />
    </div>
  );
}
