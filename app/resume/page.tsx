"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faPhone,
  faMapMarker,
  faEnvelope,
  faHome,
  faGraduationCap,
  faBriefcase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faGithubSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

import styles from "../resume.module.css";
import Link from "next/link";
export default function Portfolio() {
  return (
    <div className="container">
      <div className={`${styles.resume} sm:gap-4`}>
        <div className={`${styles.base} w-full sm:w-7/12 `}>
          <div className={styles.profile}>
            <div className={` ${styles.photo} text-center py-4`}>
              <FontAwesomeIcon
                icon={faRocket}
                size="3x"
                className={`${styles.fa_rocket} `}
              />
            </div>
            <div className={styles.info}>
              <h1
                className={`${styles.name} font-montserrat font-medium text-2xl sm:text-3xl`}
              >
                Mukhtar Ahmad
              </h1>

              <h2 className={`${styles.job} text-sm sm:text-base mt-3`}>
                Frontend Developer
              </h2>
            </div>
          </div>
          <div className={styles.about}>
            <h3 className="h3">About Me</h3>
            I am professional Frontend Developer. I Develop Your Website and
            will happy to help you. I will give 100% refund If you are not
            satisfied with my work. <br /> <br />
            Delivering work within time and budget which meets clients
            requirements is my moto.
          </div>
          <div className={styles.contact}>
            <h3 className="h3">Contact Me</h3>
            <div className={styles.call}>
              <div className="flex items-baseline">
                <Link href="tel:123-456-7890">
                  <FontAwesomeIcon icon={faPhone} className="contactIcon" />
                </Link>
                <span>123-456-7890</span>
              </div>
            </div>
            <div className={styles.address}>
              <div className="flex items-baseline">
                <Link href="https://goo.gl/maps/fiTBGT6Vnhy">
                  <FontAwesomeIcon icon={faMapMarker} />
                </Link>
                <span>Lhr, Pak</span>
              </div>
            </div>

            <div className={styles.email}>
              <div className="flex items-baseline">
                <Link href="h.mukhtarahmad1@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
                <span>Mukhtar</span>
              </div>
            </div>
            <div className={styles.website}>
              <div className="flex items-baseline">
                <Link href="http://astronaomical.com/" target="_blank">
                  <FontAwesomeIcon icon={faHome} />
                </Link>
                <span>h.mukhtarahmad1@gmail.com</span>
              </div>
            </div>
          </div>
          <div className={styles.follow}>
            <h3 className="h3">Follow Me</h3>
            <div className={styles.box}>
              <div className="flex">
                <Link
                  href="https://www.facebook.com/profile.php?id=100084602019686"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="boxIcon"
                    size="lg"
                  />
                </Link>

                <Link
                  href="https://twitter.com/H_MukhtarAhmad1"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="boxIcon"
                    size="lg"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/mukhtar-ahmad-b53998250/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="boxIcon"
                    size="lg"
                  />
                </Link>
              </div>

              <div className="flex">
                <Link href="/" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    className="boxIcon"
                    size="lg"
                  />
                </Link>

                <Link href="/" target="_blank">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="boxIcon"
                    size="lg"
                  />
                </Link>

                <Link href="/" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} className="boxIcon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.func} grid grid-cols-2  gap-4 sm:text-sm md:text-md lg:text-lg`}
        >
          <div className={styles.work}>
            <h3 className="flex items-center">
              <div className={`${styles.funcIconBox} `}>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className={styles.funcIcon}
                />
              </div>
              <span className={styles.h3}>Experience</span>
            </h3>
            <ul className="mt-3">
              <li>
                <span>Frontend Developer</span>
                <small>Expert</small>
                <small>Aug 2017 - Now</small>
              </li>
              <li>
                <span>
                  React / NextJS -<br />
                  <span className="text-xs">Developer</span>
                </span>
                <small>Expert</small>
                <small>Apr 2019 - Now</small>
              </li>
              <li>
                <span>Javascript / Typescript</span> - <br />
                <span className="text-xs">Developer</span>
                <small>Intermediate</small>
                <small>Jan 2019 - Now</small>
              </li>
            </ul>
          </div>
          <div className={`${styles.edu} `}>
            <h3 className="flex items-center">
              <div className={`${styles.funcIconBox} `}>
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className={styles.funcIcon}
                />
              </div>
              <span className={styles.h3}>Education</span>
            </h3>
            <ul className="mt-3">
              <li>
                <span>
                  Bachelor of Science
                  <br />
                  Web Design and Development
                </span>
                <small>Expert</small>
                <small>Apr. 2019 - Now</small>
              </li>
              <li>
                <span>Blockchain & Metaverse</span>
                <small>Junior</small>
                <small>Continued</small>
              </li>
              <li>
                <span>Institute</span> <br />
                <span className="text-sm">PIAIC</span>
                <small>63 - A UMT </small>
                <small> Feb 2019 - Now</small>
              </li>
            </ul>
          </div>

          <div className={`${styles.skills_prog} col-span-2`}>
            <h3 className="flex items-center">
              <div className={`${styles.funcIconBox} `}>
                <FontAwesomeIcon icon={faCode} className={styles.funcIcon} />
              </div>
              <span className={styles.h3}>Programming Skills</span>
            </h3>
            <ul className="py-8">
              <li data-percent="95">
                <span>HTML5</span>
                <div className={styles.skills_bar}>
                  <div className={styles.bar}></div>
                </div>
              </li>
              <li data-percent="90">
                <span>CSS3 & SCSS</span>
                <div className={styles.skills_bar}>
                  <div className={styles.bar}></div>
                </div>
              </li>
              <li data-percent="60">
                <span> Typescript</span>
                <div className={styles.skills_bar}>
                  <div className={styles.bar}></div>
                </div>
              </li>
              <li data-percent="50">
                <span>NextJS </span>
                <div className={styles.skills_bar}>
                  <div className={styles.bar}></div>
                </div>
              </li>
              <li data-percent="40">
                <span>API </span>
                <div className={styles.skills_bar}>
                  <div className={styles.bar}></div>
                </div>
              </li>
              <li data-percent="55">
                <span>Bootstrap</span>
                <div className={styles.skills_bar}>
                  <div className={styles.bar}></div>
                </div>
              </li>
              <li data-percent="40">
                <span>Tailwind</span>
                <div className={styles.skills_bar}>
                  <div className={styles.bar}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
