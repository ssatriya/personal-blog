"use client";

import Image from "next/image";

import { Icons } from "@/components/icons";
import xclone from "../../../public/x-clone.png";
import typing from "../../../public/typingtest.png";
import quran from "../../../public/quran.png";
import dictionary from "../../../public/dictionary.png";

export default function ProjectCard() {
  return (
    <div className="flex flex-col gap-8 lg:gap-4 group/list">
      <a
        href="https://x-clone.ssatriya.com/"
        target="__blank"
        className="lg:hover:bg-background lg:hover:rounded-sm lg:hover:bg-clip-padding lg:hover:backdrop-filter lg:hover:backdrop-blur-sm lg:hover:bg-opacity-10 lg:transition-all lg:cursor-pointer lg:px-6 lg:py-6 lg:rounded-sm group/xclone lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
      >
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
              <p className="font-semibold hover:text-accent transition-colors group-hover/xclone:text-accent">
                Build a X Clone App
              </p>
              <Icons.arrowUpRight className="w-4 h-4 fill-text group-hover/xclone:mb-1 group-hover/xclone:ml-1 transition-all" />
            </div>
            <p className="text-sm opacity-70 mt-4 font-light">
              A clone to one of the most popular social media App owned by Elon
              Musk, X. Signup using SSO (email) and start posting what you have
              in mind. Get to know a new person and follow them to get their
              latest post.
            </p>
          </div>
        </div>
      </a>
      {/*  */}
      <a
        href="https://typing-ssatriya.vercel.app/"
        target="__blank"
        className="lg:hover:bg-background lg:hover:rounded-sm lg:hover:bg-clip-padding lg:hover:backdrop-filter lg:hover:backdrop-blur-sm lg:hover:bg-opacity-10 lg:transition-all lg:cursor-pointer lg:px-6 lg:py-6 lg:rounded-sm group/typetest lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
      >
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
              <p className="font-semibold hover:text-accent transition-colors group-hover/typetest:text-accent">
                Build a Typing Test App
              </p>
              <Icons.arrowUpRight className="w-4 h-4 fill-text group-hover/typetest:mb-1 group-hover/typetest:ml-1 transition-all" />
            </div>
            <p className="text-sm opacity-70 font-light mt-4">
              Inspired by MonkeyType, this app is used to get the measurement of
              how fast your typing skill is. Used a generated random words and
              custom timing that you can choose.
            </p>
          </div>
        </div>
      </a>
      {/*  */}
      <a
        href="https://quran.ssatriya.com/"
        target="__blank"
        className="lg:hover:bg-background lg:hover:rounded-sm lg:hover:bg-clip-padding lg:hover:backdrop-filter lg:hover:backdrop-blur-sm lg:hover:bg-opacity-10 lg:transition-all lg:cursor-pointer lg:px-6 lg:py-6 lg:rounded-sm group/quran lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
      >
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
              <p className="font-semibold hover:text-accent transition-colors group-hover/quran:text-accent">
                Build a Al-Quran App
              </p>
              <Icons.arrowUpRight className="w-4 h-4 fill-text group-hover/quran:mb-1 group-hover/quran:ml-1 transition-all" />
            </div>
            <p className="text-sm opacity-70 font-light mt-4">
              Learning to utilize an API of Qur&apos;an. Used the app for your
              daily read of qur&apos;an complete with the audio. Track your
              latest read with bookmark that save into localstorage.
            </p>
          </div>
        </div>
      </a>
      {/*  */}
      <a
        href="https://dictionary.ssatriya.com/"
        target="__blank"
        className="lg:hover:bg-background lg:hover:rounded-sm lg:hover:bg-clip-padding lg:hover:backdrop-filter lg:hover:backdrop-blur-sm lg:hover:bg-opacity-10 lg:transition-all lg:cursor-pointer lg:px-6 lg:py-6 lg:rounded-sm group/dictionary lg:group-hover/list:opacity-50 lg:hover:!opacity-100"
      >
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
              <p className="font-semibold hover:text-accent transition-colors group-hover/dictionary:text-accent">
                Build an English Dictionary App
              </p>
              <Icons.arrowUpRight className="w-4 h-4 fill-text group-hover/dictionary:mb-1 group-hover/dictionary:ml-1 transition-all" />
            </div>
            <p className="text-sm opacity-70 font-light mt-4">
              One of the challenge from FrontendMentor.io that utilize an
              English dictionary API. Input the word you want to search and hit
              the search button. The response included audio on how to pronounce
              it if it is available.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
