import React from "react";
import icon from "../icons/download.gif";
import img from "../images/MyPassport1.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import resume from "../images/MY_RESUME1.pdf";
function Home() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#loading_text", {
      x: -500,
      opacity: 0,
      stagger: 0.4,
      duration: 0.9,
      delay: 1,
      ease: "power1.out",
    });
    tl.from("#loader", {
      x: -500,
      opacity: 0,
    });
    tl.from("#para", {
      scale: 0.1,
      opacity: 0,
      y: 400,
      duration: 0.4,
      ease: "power4.Out",
    });
    tl.from("#resume_container", {
      y: 500,
      opacity: 0,
      duration: 0.4,
      ease: "power4.out",
    });
    tl.from("#img", {
      scale: 0,
      duration: .5,
      ease: "power4.out",
    });
  });

  return (
    <>
      <div id="home" className="w-full h-screen bg-black relative">
        <div
          id="home_container"
          className="w-1/2 h-96 absolute top-44 left-20 text-5xl leading-tight px-1"
        >
          <div>
            <h1 id="loading_text">Hey there, </h1>
          </div>
          <div>
            <h1 id="loading_text">I'm Abdul Naim,</h1>
          </div>
          <div>
            <span id="loading_text">a </span>
            <span id="loader"></span>
          </div>
          <div
            id="para"
            className="w-fit text-white text-sm  font-light leading-snug px-1 mt-2 "
          >
            <p>
              As a Frontend Developer with proficiency in React, Tailwind CSS,
              and GSAP, I excel at crafting dynamic and visually captivating web
              experiences. I thrive on turning creative ideas into interactive,
              high-performance solutions. Passionate about continuous learning
              and innovation, I’m eager to tackle exciting new projects. Let’s
              connect and build something exceptional together!
            </p>
          </div>

          <div id="resume_container" className="flex space-x-1 mt-2">
            <a
              id="download-link"
              href={resume}
              download="AbdulNaim_Resume.pdf"
              className="hidden"
            ></a>
            <button
              className="rounded-lg px-2 py-0 m-1 overflow-hidden relative group cursor-pointer border-2 font-normal border-indigo-600 text-2xl active:border-black"
              onClick={() => document.getElementById("download-link").click()}
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                RESUME
              </span>
            </button>
            <img
              src={icon}
              alt="Download here"
              className="w-7 h-7 mt-2 rounded-full "
            />
          </div>
        </div>
        <div id="img_container" className="w-96 h-72  absolute right-20 top-44">
          <div id="img" className="relative w-72 h-72">
            {/* Outer Loader */}
            <div className="absolute inset-0 border-4 border-transparent border-t-[#9370DB] rounded-full animate-spin"></div>
            {/* Middle Loader */}
            <div className="absolute inset-4 border-4 border-transparent border-t-[#BA55D3] rounded-full animate-spin-slow"></div>
            {/* Inner Loader */}
            <div className="absolute inset-6 border-4 border-transparent border-t-[#FF00FF] rounded-full animate-spin-fast"></div>
          </div>
          <div id="img" className="absolute top-10 left-10">
            <img
              src={img}
              alt="image"
              className="rounded-full w-52 h-52 object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
