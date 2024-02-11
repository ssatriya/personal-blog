"use client";

import Image from "next/image";

import { Icons } from "@/components/icons";
import xclone from "../../../public/x-clone.png";
import typing from "../../../public/typingtest.png";
import quran from "../../../public/quran.png";
import dictionary from "../../../public/dictionary.png";
import Pill from "../pill";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-8 lg:gap-4 group/list">
      <a href="https://x-clone.ssatriya.com/" target="_blank">
        <div className="lg:hover:bg-background/30 lg:hover:rounded-sm lg:hover:bg-clip-padding lg:hover:backdrop-filter lg:hover:backdrop-blur-sm lg:hover:bg-opacity-10 lg:transition-all lg:cursor-pointer lg:px-6 lg:py-6 lg:rounded-sm group/xclone lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:gap-6 items-start">
            <Image
              className="rounded-sm object-contain"
              src={xclone}
              height={100}
              width={200}
              alt="x-clone"
            />
            <div>
              <div className="flex gap-1 items-end">
                <p className="font-semibold text-foreground hover:text-text transition-colors group-hover/xclone:text-text">
                  X Clone App
                </p>
                <Icons.arrowUpRight className="w-4 h-4 fill-foreground group-hover/xclone:fill-text group-hover/xclone:mb-1 group-hover/xclone:ml-1 transition-all" />
              </div>
              <p className="text-sm opacity-70 mt-4 font-light">
                A clone to one of the most popular social media App owned by
                Elon Musk, X. Signup using SSO (email) and start posting what
                you have in mind. Get to know a new person and follow them to
                get their latest post.
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
        </div>
      </a>
      {/*  */}
      <a href="https://typing-ssatriya.vercel.app/" target="_blank">
        <div className="lg:hover:bg-background/30 lg:hover:rounded-sm lg:hover:bg-clip-padding lg:hover:backdrop-filter lg:hover:backdrop-blur-sm lg:hover:bg-opacity-10 lg:transition-all lg:cursor-pointer lg:px-6 lg:py-6 lg:rounded-sm group/typetest lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:gap-6 items-start">
            <Image
              className="rounded-sm object-contain"
              src={typing}
              height={100}
              width={200}
              alt="x-clone"
            />
            <div>
              <div className="flex gap-1 items-end">
                <p className="font-semibold text-foreground hover:text-text transition-colors group-hover/typetest:text-text">
                  Typing Test App
                </p>
                <Icons.arrowUpRight className="w-4 h-4 fill-foreground group-hover/typetest:fill-text group-hover/typetest:mb-1 group-hover/typetest:ml-1 transition-all" />
              </div>
              <p className="text-sm opacity-70 font-light mt-4">
                Inspired by MonkeyType, this app is used to get the measurement
                of how fast your typing skill is. Used a generated random words
                and custom timing that you can choose.
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
        </div>
      </a>
      {/*  */}
      <a href="https://quran.ssatriya.com/" target="_blank">
        <div className="lg:hover:bg-background/30 lg:hover:rounded-sm lg:hover:bg-clip-padding lg:hover:backdrop-filter lg:hover:backdrop-blur-sm lg:hover:bg-opacity-10 lg:transition-all lg:cursor-pointer lg:px-6 lg:py-6 lg:rounded-sm group/quran lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:gap-6 items-start">
            <Image
              className="rounded-sm object-contain"
              src={quran}
              height={100}
              width={200}
              alt="x-clone"
            />
            <div>
              <div className="flex gap-1 items-end">
                <p className="font-semibold text-foreground hover:text-text transition-colors group-hover/quran:text-text">
                  Al-Quran App
                </p>
                <Icons.arrowUpRight className="w-4 h-4 fill-foreground group-hover/quran:fill-text group-hover/quran:mb-1 group-hover/quran:ml-1 transition-all" />
              </div>
              <p className="text-sm opacity-70 font-light mt-4">
                Learning to utilize an API of Qur&apos;an. Used the app for your
                daily read of qur&apos;an complete with the audio. Track your
                latest read with bookmark that save into localstorage.
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
      </a>
      {/*  */}
      <a href="https://dictionary.ssatriya.com/" target="_blank">
        <div className="lg:hover:bg-background/30 lg:hover:rounded-sm lg:hover:bg-clip-padding lg:hover:backdrop-filter lg:hover:backdrop-blur-sm lg:hover:bg-opacity-10 lg:transition-all lg:cursor-pointer lg:px-6 lg:py-6 lg:rounded-sm group/dictionary lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full md:gap-6 items-start">
            <Image
              className="rounded-sm object-contain"
              src={dictionary}
              height={100}
              width={200}
              alt="x-clone"
            />
            <div>
              <div className="flex gap-1 items-end">
                <p className="font-semibold text-foreground hover:text-text transition-colors group-hover/dictionary:text-text">
                  English Dictionary App
                </p>
                <Icons.arrowUpRight className="w-4 h-4 fill-foreground group-hover/dictionary:fill-text group-hover/dictionary:mb-1 group-hover/dictionary:ml-1 transition-all" />
              </div>
              <p className="text-sm opacity-70 font-light mt-4">
                One of the challenge from FrontendMentor.io that utilize an
                English dictionary API. Input the word you want to search and
                hit the search button. The response from the API included audio
                on how to pronounce it if it is available.
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
      </a>
    </div>
  );
}
