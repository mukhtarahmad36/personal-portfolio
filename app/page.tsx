"use client";
import { Inter } from "next/font/google";
import { Typewriter } from "react-simple-typewriter";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <div className="home-page text-center ">
        <div className="relative inline-block name-layer	">
          <h1 className="text-8xl font-semibold  tracking-wide  home-info font-livvic  py-4 leading-tight main-heading">
            <p>Hello</p>
            <p>I am</p>
            <p className="">
              <span className="Mukhtar">Mukhtar</span> Ahmad
            </p>
          </h1>

          <p className="frontEndDetails">
            <Typewriter
              words={[
                "Front End Developer",
                "React Js Developer",
                "Next Js Developer",
                "Typescript Developer",
              ]}
              loop={true}
              cursor
              // cursorBlinking={true}
              cursorColor="red"
              cursorStyle="..."
              typeSpeed={50}
              deleteSpeed={20}
              delaySpeed={1500}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </p>
          <span className="circle-switcher"></span>
        </div>

        <div className="faid-btn gap-8  flex justify-center mt-8">
          <button className="home-liquid-btn">
            <p>Download CV</p>
            <div className="liquid"></div>
          </button>

          <button className="home-liquid-btn">
            <span>Contact Me!</span>
            <div className="liquid"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
