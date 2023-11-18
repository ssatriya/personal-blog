export default function Footer() {
  return (
    <div className="container flex items-center justify-center mb-12">
      <p className="text-sm">
        <span className="opacity-70 font-light">
          This site is inspired from{" "}
        </span>
        <a target="__blank" href="https://brittanychiang.com/">
          Brittany Chiang
        </a>
        . <span className="opacity-70 font-light">Coded in</span>{" "}
        <a target="__blank" href="https://code.visualstudio.com/">
          Visual Studio Code
        </a>
        , <span className="opacity-70 font-light">build with</span>{" "}
        <a target="__blank" href="https://nextjs.org/">
          Next.js
        </a>{" "}
        <span className="opacity-70 font-light">and</span>{" "}
        <a target="__blank" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>
        , <span className="opacity-70 font-light">deployed with</span>{" "}
        <a target="__blank" href="https://vercel.com/">
          Vercel
        </a>
      </p>
    </div>
  );
}
