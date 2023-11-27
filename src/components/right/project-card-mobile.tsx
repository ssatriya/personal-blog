import Image from "next/image";

import { Icons } from "@/components/icons";
import xclone from "../../../public/x-clone.png";
import typing from "../../../public/typingtest.png";
import quran from "../../../public/quran.png";
import dictionary from "../../../public/dictionary.png";
import Pill from "../pill";

export default function ProjectCardMobile() {
  return (
    <div className="flex flex-col gap-8 lg:gap-4 group/list">
      <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:gap-6 items-start">
        <Image
          className="rounded-sm object-contain"
          src={xclone}
          height={100}
          width={200}
          alt="x-clone"
        />
        <div>
          <div className="flex gap-1 items-end group/xclone">
            <a
              href="https://x-clone.ssatriya.com/"
              target="_blank"
              className="font-semibold text-accent hover:text-text transition-colors group-hover/xclone:text-text"
            >
              X Clone App
            </a>
            <Icons.arrowUpRight className="w-4 h-4 fill-accent group-hover/xclone:fill-text group-hover/xclone:mb-1 group-hover/xclone:ml-1 transition-all" />
          </div>
          <p className="text-sm opacity-80 mt-4">
            A clone to one of the most popular social media App owned by Elon
            Musk, X. Signup using SSO (email) and start posting what you have in
            mind. Get to know a new person and follow them to get their latest
            post.
          </p>
          <div className="flex flex-wrap">
            <Pill>TypeScript</Pill>
            <Pill>Javascript</Pill>
            <Pill>React</Pill>
            <Pill>Next.js</Pill>
            <Pill>Tailwind CSS</Pill>
            <Pill>Planetscale</Pill>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:gap-6 items-start">
        <Image
          className="rounded-sm object-contain"
          src={typing}
          height={100}
          width={200}
          alt="x-clone"
        />
        <div>
          <div className="flex gap-1 items-end group/typetest">
            <a
              href="https://typing-ssatriya.vercel.app/"
              target="_blank"
              className="font-semibold text-accent hover:text-text transition-colors group-hover/typetest:text-text cursor-pointer"
            >
              Typing Test App
            </a>
            <Icons.arrowUpRight className="w-4 h-4 fill-accent group-hover/typetest:fill-text group-hover/typetest:mb-1 group-hover/typetest:ml-1 transition-all" />
          </div>
          <p className="text-sm opacity-80 mt-4">
            Inspired by MonkeyType, this app is used to get the measurement of
            how fast your typing skill is. Used a generated random words and
            custom timing that you can choose.
          </p>
          <div className="flex flex-wrap">
            <Pill>TypeScript</Pill>
            <Pill>Javascript</Pill>
            <Pill>React</Pill>
            <Pill>Next.js</Pill>
            <Pill>Tailwind CSS</Pill>
            <Pill>Redux Toolkit</Pill>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:gap-6 items-start">
        <Image
          className="rounded-sm object-contain"
          src={quran}
          height={100}
          width={200}
          alt="x-clone"
        />
        <div>
          <div className="flex gap-1 items-end group/quran">
            <a
              href="https://quran.ssatriya.com/"
              target="_blank"
              className="font-semibold text-accent hover:text-text transition-colors group-hover/quran:text-text cursor-pointer"
            >
              Al-Quran App
            </a>
            <Icons.arrowUpRight className="w-4 h-4 fill-accent group-hover/quran:fill-text group-hover/quran:mb-1 group-hover/quran:ml-1 transition-all" />
          </div>
          <p className="text-sm opacity-80 mt-4">
            Learning to utilize an API of Qur&apos;an. Used the app for your
            daily read of qur&apos;an complete with the audio. Track your latest
            read with bookmark that save into localstorage.
          </p>
          <div className="flex flex-wrap">
            <Pill>TypeScript</Pill>
            <Pill>Javascript</Pill>
            <Pill>React</Pill>
            <Pill>Next.js</Pill>
            <Pill>Tailwind CSS</Pill>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:gap-6 items-start">
        <Image
          className="rounded-sm object-contain"
          src={dictionary}
          height={100}
          width={200}
          alt="x-clone"
        />
        <div>
          <div className="flex gap-1 items-end group/dictionary">
            <a
              href="https://dictionary.ssatriya.com/"
              target="_blank"
              className="font-semibold text-accent hover:text-text transition-colors group-hover/dictionary:text-text cursor-pointer"
            >
              English Dictionary App
            </a>
            <Icons.arrowUpRight className="w-4 h-4 fill-accent group-hover/dictionary:fill-text group-hover/dictionary:mb-1 group-hover/dictionary:ml-1 transition-all" />
          </div>
          <p className="text-sm opacity-80 mt-4">
            One of the challenge from FrontendMentor.io that utilize an English
            dictionary API. Input the word you want to search and hit the search
            button. The response from the API included audio on how to pronounce
            it if it is available.
          </p>
          <div className="flex flex-wrap">
            <Pill>TypeScript</Pill>
            <Pill>Javascript</Pill>
            <Pill>React</Pill>
            <Pill>Next.js</Pill>
            <Pill>Tailwind CSS</Pill>
          </div>
        </div>
      </div>
    </div>
  );
}
