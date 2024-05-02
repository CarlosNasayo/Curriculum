"use client";
import React from "react";
import Image from "next/image";
import Photo from "../public/fotocv.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
export default function Intro() {
  return (
    <section
      className="mb-29 max-w-[50rem]
    text-center sm:mb-0"
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={Photo}
              alt="carlos nasayo photo"
              width="192"
              height="192"
              quality="80"
              priority={true}
              className="h-24 w-24 rounded-full 
         object-cover border-[0.35rem] border-white
         shadow-xl"
            />
          </motion.div>

          <motion.span
            className=" absolute bottom-0 right-0 text-4xl "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 text-2xl px-4 font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Carlos.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">apps fronted and backend</span>. My
        focus is <span className="">fullstack development</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row
      items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 text-white px-7
         py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110
         hover:scale-110 hover:bg-gray-950 active:scale-105
         transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          className="group bg-white px-7
         py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15]
         hover:scale-[1.15] active:scale-105
         transition cursor-pointer border border-black/10"
          href="/CarlosNasayo.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full  focus:scale-110
          hover:scale-110 hover:text-gray-950 active:scale-105
          transition cursor-pointer border border-black/10 "
          href="https://co.linkedin.com/in/carlos-mario-nasay%C3%B3-valverde-abb717221"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700
          flex items-center gap-2 rounded-full text-[1.35rem]  focus:scale-[1.15]
          hover:scale-110 hover:text-gray-950 active:scale-[1.15]
          transition cursor-pointer border border-black/10"
          href="https://github.com/CarlosNasayo"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
