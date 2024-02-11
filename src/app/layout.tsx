import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "500"] });

export const metadata: Metadata = {
  title: "Muhammad Yusuf Donny Satriyo",
  description: "Personal Web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen dark font-sans antialiased bg-[#160A1E]",
          poppins.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
