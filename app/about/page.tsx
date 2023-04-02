"use client";
import Image from "next/image";
import IMAGES from "@/utils/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import SocialIcons from "@/components/socialicons";
export default function About() {
  return (
    <div className="container about-page ">
      <div className="grid grid-cols-4 grid-cols-lg-1 about-details-main">
        <div className="thumbnail  ">
          <Image src={IMAGES.b10} alt="" />
        </div>

        <div className="col-span-3  px-12 about-details">
          <div className="text-justify">
            <h5 className="py-6 tracking-widest ">welcome to my world</h5>

            <h2 className="font-bold  md:text-4xl text-lg tracking-wider font-montserrat ">
              Hi I am <span className="mukhtar-ahmad"> Mukhtar Ahmad </span> a
              <div>
                <Typewriter
                  words={["Developer.", "Professional Coder."]}
                  loop={true}
                  cursor
                  cursorColor="red"
                  cursorStyle=".."
                  typeSpeed={40}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </div>
            </h2>

            <div className="text-xs sm:text-base">
              <p className="py-6">
                I am professional Frontend Developer. I Develop Your Website and
                will happy to help you. I wll give 100% refund If you are not
                satisfied with my work
              </p>
              <p>
                I enjoy every step of the Development process, from discussion
                and collaboration I use animation for user interaction.
                Delivering work within time and budget which meets clients
                requirements is my moto.
              </p>
            </div>

            <div className="flex  gap-12 my-6 faid-btn text-xs sm:text-base md_all_center">
              <Link href="portfolio" className="neon-border">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                See My Work
              </Link>

              <Link href="/" className="neon-border">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Hire Me
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <SocialIcons />

              <div>
                <h5 className="tracking-widest">Best Skills on </h5>
                <div className="flex gap-8 my-6 social-icons ">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="fIcon"
                    color="aqua"
                  />
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="fIcon"
                    color="#f46424"
                  />
                  <FontAwesomeIcon
                    icon={faCss3}
                    color="#389cd4"
                    className="fIcon"
                  />
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    color="#940cfc"
                    className="fIcon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Skills  */}
      <section className="my-8">
        <h3 className="text-5xl text-start md:text-center my-6 font-montserrat font-semibold">
          Main <span className="skills">Skills</span>{" "}
        </h3>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-8 ">
          <div className="progress-bar">
            <div className="flex justify-between font-livvic">
              <p>HTML</p>
              <p>95%</p>
            </div>
            <progress max="100" value="95"></progress>
          </div>
          <div className="progress-bar">
            <div className="flex justify-between font-montserrat">
              <p>CSS </p>
              <p>85%</p>
            </div>
            <progress max="100" value="85"></progress>
          </div>
          <div className="progress-bar">
            <div className="flex justify-between font-montserrat">
              <p>Tailwind </p>
              <p>85%</p>
            </div>
            <progress max="100" value="85"></progress>
          </div>

          <div className="progress-bar">
            <div className="flex justify-between font-montserrat">
              <p>Bootstrap </p>
              <p>90%</p>
            </div>
            <progress max="100" value="90"></progress>
          </div>
          <div className="progress-bar">
            <div className="flex justify-between font-livvic">
              <p>Typescript &nbsp; / &nbsp; Javascript</p>
              <p>70%</p>
            </div>
            <progress max="100" value="70"></progress>
          </div>
          <div className="progress-bar">
            <div className="flex justify-between">
              <p>NextJs &nbsp; / &nbsp; ReactJs / Redux</p>
              <p>80%</p>
            </div>
            <progress max="100" value="80"></progress>
          </div>
        </div>
      </section>
    </div>
  );
}
