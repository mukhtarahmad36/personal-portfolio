"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [showCog, setCog] = useState(false);
  let checkToggle = showCog ? "active" : "";

  const [isMenu, setIsMenu] = useState(true);

  const cogToggle = () => {
    setCog((showCog) => !showCog);

    let colors = document.getElementsByClassName("colors");
    for (let i = 0; i < colors.length; i++) {
      colors[i].addEventListener("click", function (this: any) {
        let color = this.getAttribute("data-color");
        document.documentElement.style.setProperty("--primary-color", color);
      });
    }
  };
  // == Navbar ==
  const navData = [
    {
      name: "home",
      link: "/",
    },
    {
      name: "about",
      link: "/about",
    },
    {
      name: "services",
      link: "/services",
    },
    {
      name: "resume",
      link: "/resume",
    },
    {
      name: "testimonials",
      link: "/testimonials",
    },
    {
      name: "contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <div
        className="sticky top-0 bg-black z-50"
        onClick={() => {
          setIsMenu(!isMenu);
        }}
      >
        <div className="container">
          <header className="flex justify-between items-center  py-1  text-sm">
            <Link href="/">
              <div className="tracking-widest font-bold text-3xl">
                <span className="mukh">Mukh</span>
                <span className="text-white">tar</span>.
                <p className="list-border"></p>
              </div>
            </Link>

            <ul
              className={`${
                isMenu ? "nav-links" : "nav-mob-links nav-mob-links-open"
              } nav-links`}
              onClick={() => {
                setIsMenu(!isMenu);
              }}
            >
              {navData.map((item) => {
                return (
                  <li key={item.name}>
                    <Link href={item.link}> {item.name} </Link>
                    <div className="list-border"></div>
                  </li>
                );
              })}
            </ul>
            <div
              className="menu-icons hover:text-white duration-500"
              onClick={() => {
                setIsMenu(!isMenu);
              }}
            >
              {isMenu ? (
                <FontAwesomeIcon icon={faBarsStaggered} className="text-2xl" />
              ) : (
                <FontAwesomeIcon icon={faCircleXmark} className="text-2xl " />
              )}
            </div>
          </header>
        </div>
      </div>
      {/* Theme Toggler  */}
      <div className={`${checkToggle} theme-toggler  rounded`}>
        <div className="toggler-cog rounded" onClick={cogToggle}>
          <FontAwesomeIcon icon={faCog} className="text-3xl cog" />
        </div>

        <div className="toggler-btns">
          <h3 className="text-center font-livvic font-semibold mt-2">
            COLOR SWITCHER
          </h3>
          <div className="px-5 py-5">
            <div className="flex gap-4">
              <p className="colors" id="dark" data-color="#FA5B04"></p>
              <p className="colors" id="green" data-color="#9ACD32"></p>
              <p className="colors" id="yellow" data-color="#ffb300"></p>
              <p className="colors" id="red" data-color="#f72b1c"></p>
            </div>

            <div className="flex gap-4 mt-4">
              <p className="colors" id="blue" data-color="#007bff"></p>
              <p className="colors" id="lime" data-color="#72b626"></p>
              <p className="colors" id="orange" data-color="#FFB400"></p>
              <p className="colors" id="pink" data-color="#ff1466"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
