import * as React from "react";

import dynamic from "next/dynamic";

const PageWrapperComponent = dynamic(
  () => {
    return import("../components/page-wrapper");
  },
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div className="loader" />
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="relative w-full h-full">
      <PageWrapperComponent />
    </main>
  );
}
