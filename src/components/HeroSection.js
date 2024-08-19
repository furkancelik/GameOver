import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import { PiSunFill } from "react-icons/pi";
import { BsFillMoonFill } from "react-icons/bs";

import Link from "next/link";
import { toast } from "react-toastify";

export default function HeroSection() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#7adefe] dark:from-black  to-[#e1f4f4] dark:to-[#250811] w-full relative overflow-hidde z-10">
      <MouseParallaxContainer globalFactorX={0.2} globalFactorY={0.2}>
        <div className="absolute  dark:text-white left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/4 transform  text-center">
          <MouseParallaxChild factorX={0.2} factorY={0.3}>
            <h1 className=" lg:text-6xl md:text-4xl sm:text-2xl text-xl font-semibold tracking-tighter my-4 mb-6	">
              Welcome to Gmover Farming
            </h1>
            <p className="w-[85%] mx-auto my-8 opacity-70">
              Start your journey in Gmover with free Farmer and Shovel NFTs,
              earning daily GMOVER tokens. Expand your farm with investments in
              Wheelbarrow and Tractor NFTs to rapidly increase your earnings.
            </p>

            <Link
              href="#"
              onClick={() => {
                toast("Coming soooonn!");
              }}
              className="bg-[url('/images/play-button.png')] bg-no-repeat bg-contain bg-center h-[80px] w-auto flex items-center justify-center text-2xl font-semibold text-[#422716] cursor-pointer"
            >
              <span className="-mt-2 drop-shadow-md">Play Game</span>
            </Link>
          </MouseParallaxChild>
        </div>

        <div className="bg-[url('/images/header-bg.png')] bg-no-repeat bg-bottom bg-contain w-full h-screen">
          <MouseParallaxChild factorX={0.4} factorY={0.1}>
            <PiSunFill className="absolute top-20 right-1/4 m-auto text-black dark:text-white opacity-80 size-20 dark:hidden" />
            <BsFillMoonFill className="absolute top-20 right-1/4 m-auto text-black dark:text-white opacity-80 size-20  hidden dark:block" />
          </MouseParallaxChild>
        </div>

        <MouseParallaxChild factorX={0.2} factorY={0.1}>
          <img
            src="/images/pepe.png"
            alt=""
            className="absolute bottom-6 left-1/4 h-72 -translate-x-20"
          />
        </MouseParallaxChild>

        <MouseParallaxChild factorX={0.5} factorY={0.2}>
          <img
            src="/images/straw-2x.png"
            alt=""
            className="absolute -bottom-3 left-1/2 w-56 h-auto translate-x-60 "
          />
        </MouseParallaxChild>

        <MouseParallaxChild factorX={0.3} factorY={0.1}>
          <img
            src="/images/straw.png"
            alt=""
            className="absolute -bottom-3 left-1/4 w-36 h-auto translate-x-60 "
          />
        </MouseParallaxChild>

        <MouseParallaxChild factorX={0.5} factorY={0.3}>
          <img
            src="/images/chicken.png"
            alt=""
            className="absolute bottom-10 left-8  w-20 h-auto"
          />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
}
