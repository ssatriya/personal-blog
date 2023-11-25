import * as React from "react";

type Pill = {
  children: React.ReactNode;
};

export default function Pill({ children }: Pill) {
  return (
    <div className="bg-primary/10 w-fit rounded-full mt-2 mr-2">
      <p className="text-xs font-semibold text-primary px-3 py-1">{children}</p>
    </div>
  );
}
