"use client";

import { Fragment, useState, useEffect } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/sanity/image";
import cx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { myLoader } from "@/utils/all";
import Logo from "./logo";
import styles from "../styles/navbar.module.css";
export default function Navbar(props) {
  const [showSidebar, setShowSidebar] = useState(false);
  // useRef to change the state of the sidebar if the user clicks outside the sidebar

  useEffect(() => {
    // change showSidebar to false if the user starts scrolling
    window.addEventListener("scroll", () => {
      setShowSidebar(false);
    });
  }, []);

  const link = process.env.NEXT_MAIN_SITE;

  return (
    <div>
      <div className="hidden w-full items-center  justify-between bg-white p-4 shadow-md lg:flex">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav
            className={`${styles.navbarItems} flex items-center space-x-8 text-gray-500`}>
            <a href={`${link}`}>Home</a>
            <a href={`${link}about`}>About Us</a>
            <a href={`${link}events`}>Events</a>
            <a href={`${link}contact`}>Contact Us</a>
            <a href={`https://blog.eventsimplify.com`}>Blogs</a>
          </nav>
          <div className="flex items-center ">
            <button
              className={` x-5 border-blue rounded-md border-2 px-2 py-2 font-bold text-primary transition duration-500 hover:scale-110 hover:transform hover:bg-primary hover:text-white`}>
              Request a demo
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-between p-4 shadow-md  lg:hidden">
        <figure>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.064 14.4349L17.1149 18.9503C16.7479 19.0893 16.371 19.1553 16.0011 19.1553C14.7269 19.1553 13.5269 18.3775 13.0502 17.1153C12.4345 15.4852 13.2559 13.6654 14.8856 13.0498L23.4587 9.80981C24.1482 10.6362 24.688 11.5615 25.0686 12.5714C25.6748 14.1788 27.4516 15.0007 29.064 14.4349Z"
              fill="#B192F7"
            />
            <path
              d="M30.2531 13.6869C30.2255 13.7145 30.197 13.7426 30.1678 13.7694C30.1389 13.7966 30.1084 13.8238 30.0775 13.8502C30.0177 13.9017 29.955 13.9512 29.8907 13.9982C29.8907 13.999 29.8898 13.999 29.8894 13.9995C29.8251 14.0469 29.7587 14.0914 29.6902 14.1343C29.6643 14.1508 29.6387 14.1656 29.6119 14.1817C29.583 14.1982 29.5538 14.2147 29.5241 14.2304C29.5125 14.2366 29.5018 14.2423 29.4907 14.2485C29.4791 14.2543 29.468 14.2601 29.4564 14.2654C29.4267 14.2807 29.3966 14.2955 29.3657 14.3104C29.3649 14.3112 29.3645 14.3116 29.3637 14.3116C29.289 14.3463 29.2127 14.3784 29.1348 14.4081L29.0824 14.4275C29.0762 14.43 29.0705 14.432 29.0643 14.4345C27.4519 15.0003 25.675 14.1784 25.0689 12.571C24.6887 11.5611 24.1485 10.6358 23.459 9.80941L26.9051 8.50757C28.5327 7.89273 30.3504 8.71211 30.9686 10.3377C30.9694 10.3401 30.9698 10.3426 30.9711 10.3451C31.035 10.5141 31.0832 10.6853 31.1162 10.8568C31.1232 10.8898 31.129 10.9224 31.1339 10.9554C31.136 10.9636 31.1372 10.9719 31.1376 10.9801C31.1447 11.023 31.1508 11.0659 31.1554 11.1096C31.263 12.0667 30.9216 13.0164 30.2531 13.6869Z"
              fill="#3E6AB3"
            />
            <path
              d="M29.083 14.4279L29.1354 14.4085C29.2137 14.3788 29.29 14.3467 29.3642 14.312C29.2892 14.3475 29.2121 14.3801 29.1333 14.4097C29.1164 14.4159 29.0999 14.4221 29.083 14.4279Z"
              fill="#0F4C81"
            />
            <path
              d="M29.3662 14.3107C29.4784 14.2575 29.5868 14.199 29.6903 14.1346C29.5868 14.199 29.4792 14.2584 29.3662 14.3107Z"
              fill="#0F4C81"
            />
            <path
              d="M29.8896 14.0785C29.8253 14.1259 29.7589 14.1713 29.6904 14.2133C29.7589 14.1704 29.8253 14.1255 29.8896 14.0785Z"
              fill="#0F4C81"
            />
            <path
              d="M30.9711 21.655C30.167 23.7877 28.9361 25.6916 27.3139 27.3139C24.2925 30.3361 20.274 32 16.0002 32C11.7264 32 7.70835 30.3361 4.68612 27.3139C1.66472 24.2916 0 20.2736 0 15.9998C0 11.726 1.66472 7.70794 4.68612 4.68612C7.70835 1.6639 11.7264 0 16.0002 0C20.274 0 24.2921 1.6639 27.3139 4.68612C28.9345 6.3059 30.1637 8.20773 30.9687 10.3376C30.3505 8.71205 28.5324 7.89268 26.9052 8.50752L23.4591 9.80936C23.2686 9.58049 23.0669 9.35947 22.8533 9.14627C19.0748 5.36694 12.9256 5.36694 9.14669 9.14627C7.31619 10.9768 6.30796 13.4105 6.30796 15.9994C6.30796 18.5882 7.31578 21.0224 9.14669 22.8529C12.926 26.6314 19.0748 26.6314 22.8533 22.8529C23.8372 21.869 24.5828 20.7164 25.0685 19.4282C25.6834 17.7981 27.5027 16.975 29.1328 17.5899C30.7629 18.2059 31.5856 20.0249 30.9711 21.655Z"
              fill="#5A86EF"
            />
          </svg>
        </figure>
        <figure
          onClick={() => {
            setShowSidebar(true);
          }}>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.599609 2.00005C0.599609 1.68179 0.726038 1.37656 0.951081 1.15152C1.17612 0.926477 1.48135 0.800049 1.79961 0.800049H16.1996C16.5179 0.800049 16.8231 0.926477 17.0481 1.15152C17.2732 1.37656 17.3996 1.68179 17.3996 2.00005C17.3996 2.31831 17.2732 2.62353 17.0481 2.84858C16.8231 3.07362 16.5179 3.20005 16.1996 3.20005H1.79961C1.48135 3.20005 1.17612 3.07362 0.951081 2.84858C0.726038 2.62353 0.599609 2.31831 0.599609 2.00005ZM0.599609 8.00005C0.599609 7.68179 0.726038 7.37656 0.951081 7.15152C1.17612 6.92648 1.48135 6.80005 1.79961 6.80005H16.1996C16.5179 6.80005 16.8231 6.92648 17.0481 7.15152C17.2732 7.37656 17.3996 7.68179 17.3996 8.00005C17.3996 8.31831 17.2732 8.62353 17.0481 8.84858C16.8231 9.07362 16.5179 9.20005 16.1996 9.20005H1.79961C1.48135 9.20005 1.17612 9.07362 0.951081 8.84858C0.726038 8.62353 0.599609 8.31831 0.599609 8.00005ZM7.79961 14C7.79961 13.6818 7.92604 13.3766 8.15108 13.1515C8.37613 12.9265 8.68135 12.8 8.99961 12.8H16.1996C16.5179 12.8 16.8231 12.9265 17.0481 13.1515C17.2732 13.3766 17.3996 13.6818 17.3996 14C17.3996 14.3183 17.2732 14.6235 17.0481 14.8486C16.8231 15.0736 16.5179 15.2 16.1996 15.2H8.99961C8.68135 15.2 8.37613 15.0736 8.15108 14.8486C7.92604 14.6235 7.79961 14.3183 7.79961 14Z"
              fill="black"
            />
          </svg>
        </figure>
        {showSidebar && (
          <div className="sidebar absolute bottom-0 left-0 right-0 top-0 z-10 bg-primary duration-150">
            <figure
              onClick={() => {
                setShowSidebar(false);
              }}
              className="absolute right-0 top-0 cursor-pointer p-4">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.25 12C2.25 6.61704 6.61704 2.25 12 2.25C17.383 2.25 21.75 6.61704 21.75 12C21.75 17.383 17.383 21.75 12 21.75C6.61704 21.75 2.25 17.383 2.25 12ZM12 3.75C7.44546 3.75 3.75 7.44546 3.75 12C3.75 16.5545 7.44546 20.25 12 20.25C16.5545 20.25 20.25 16.5545 20.25 12C20.25 7.44546 16.5545 3.75 12 3.75Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967Z"
                  fill="white"
                />
              </svg>
            </figure>
            <div>
              <nav
                className={`${styles.navbarItemsMobile} mt-10 flex h-screen flex-col items-center  justify-center gap-4`}>
                <a href={`${link}`}>Home</a>
                <a href={`${link}about`}>About Us</a>
                <a href={`${link}events`}>Events</a>
                <a href={`${link}contact`}>Contact Us</a>
                <a href={`https://blog.eventsimplify.com`}>Blogs</a>
                <div className="mt-10 lg:hidden"></div>
                <button className="x-5 rounded-md bg-white p-2 font-bold text-primary shadow-lg  ">
                  Request a demo
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
