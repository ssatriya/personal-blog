import * as React from "react";

import dynamic from "next/dynamic";

const PageWrapperComponent = dynamic(
  () => {
    return import("../components/page-wrapper");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <main className="relative w-full h-full">
      <PageWrapperComponent />
    </main>
  );
}
