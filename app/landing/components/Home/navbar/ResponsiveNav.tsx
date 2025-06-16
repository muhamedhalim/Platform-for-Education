"use client";

import { useEffect, useState } from "react";
import { navlinks } from "@/app/landing/constant/constant";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight, HiArrowRight } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [navBg, setNavBg] = useState(false);

  // Change navbar background on scroll
  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock scroll when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);

  return (
    <>
      {/* ======= TOP NAVBAR ======= */}
      <div
        className={`fixed w-full transition-all duration-200 h-[12vh] z-[1000] ${
          navBg ? "bg-indigo-800" : "bg-indigo-900"
        }`}
      >
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[98%] mx-auto">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={130}
              height={130}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navlinks */}
          <div className="hidden lg:flex items-center space-x-10">
            {navlinks.map((link) => (
              <Link key={link.id} href={link.url}>
                <p className="text-white font-medium cursor-pointer transition-all duration-300 hover:text-pink-400 hover:underline underline-offset-4">
                  {link.Label}
                </p>
              </Link>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/pages/login"
              className="hidden md:inline-block px-6 py-2 bg-pink-600 hover:bg-pink-800 text-white font-semibold rounded-lg text-sm md:text-base transition"
            >
              Login
            </Link>
            <Link
              href="/pages/JoinNow"
              className="hidden md:inline-block px-6 py-2 bg-white text-indigo-900 hover:bg-gray-200 font-semibold rounded-lg text-sm md:text-base transition"
            >
              Join For Free
            </Link>

            {/* Mobile Menu Button */}
            <HiBars3BottomRight
              onClick={() => setShowNav(true)}
              className=" flex justify-center w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>

      {/* ======= MOBILE NAV OVERLAY ======= */}
      {showNav && (
        <div
          className="flex justify-center inset-0 left-7 bg-black/60 z-[10000]"
          onClick={() => setShowNav(false)}
        />
      )}

      {/* ======= MOBILE NAV MENU ======= */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[60%] bg-indigo-900 text-white flex flex-col justify-between transition-transform duration-500 z-[10001] px-6 pt-8 pb-10 transform ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } shadow-xl rounded-r-2xl`}
      >
        {/* Close Icon */}
        <CgClose
          onClick={() => setShowNav(false)}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer hover:text-pink-400 transition"
        />

        {/* Navigation Links */}
        <div className="flex flex-col gap-5 mt-12">
          {navlinks.map((link) => (
            <Link key={link.id} href={link.url} onClick={() => setShowNav(false)}>
              <div className="flex items-center justify-between border-b border-white/20 pb-3 group">
                <p className="text-white font-medium text-[18px] sm:text-[22px] group-hover:text-pink-400 transition">
                  {link.Label}
                </p>
                <HiArrowRight className="w-5 h-5 text-white group-hover:text-pink-400 transition" />
              </div>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex flex-col gap-4 mt-10">
          <Link
            href="/pages/login"
            onClick={() => setShowNav(false)}
            className="w-full text-center px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-xl font-semibold text-base shadow-md transition"
          >
            Login
          </Link>
          <Link
            href="/pages/JoinNow"
            onClick={() => setShowNav(false)}
            className="w-full text-center px-6 py-3 bg-white text-indigo-900 hover:bg-gray-100 rounded-xl font-semibold text-base shadow-md transition"
          >
            Join For Free
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNav;
