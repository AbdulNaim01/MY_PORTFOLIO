import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import html from "../images/html.png";
import css from "../images/css-3.png";
import js from "../images/javascript.png";
import boot from "../images/bootstrap.png";
import tail from "../images/tailwind.png";
import gsap1 from "../images/Gsap.png";
import react from "../images/react-.png";
import ScrollTrigger from "gsap/ScrollTrigger";

function Skills() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Create a timeline for animations
    const tl = gsap.timeline({ delay: 0.5 });

    // Animation for #title
    tl.to("#title", {
      y: -100,
      scale: 1.2,
      scrollTrigger: {
        trigger: ".page0",
        scrub: 1.4,
        start: "top top",
        end: "bottom top",
      },
    });

    // Animation for each skill
    const sections = ["html", "css", "js", "boot", "tail", "gsap"];
    sections.forEach((section, index) => {
      tl.from(`#${section}`, {
        y: 450,
        scale: 1.2,
        scrollTrigger: {
          trigger: `.page${index + 1}`,
          scrub: 1.4,
          start: "top center",
          end: "bottom top",
        },
      });
    });
    tl.fromTo(
      "#react",
      { y: -100, opacity: 0 }, // Start position and opacity
      {
        y: 0, // End position
        opacity: 1, // End opacity
        scale: 1.2,
        scrollTrigger: {
          trigger: ".page7",
          scrub: 1, // Adjust scrub value for smoothness
          start: "top center",
          end: "bottom center",
        },
      }
    );
    tl.from(".head", {
      scale: 0,
      duration: 1,
      opacity: 0,
      ease: "power4.out",
    });

    tl.from("#line", {
      x: -500,
      duration: 1.2,
      opacity: 0,
      ease: "power4.out",
    });

    tl.from(".spin", {
      scale: 0,
      rotate: 360,
      duration: 1,
      opacity: 0,
      ease: "power4.out",
    });
  }, []);
  function customScrollToTop(duration = 5) {
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(timestamp) {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start - start * easeInOut);

      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, 0); // Ensure it ends exactly at top
      }
    }

    requestAnimationFrame(scrollStep);
  }

  // Call this function when navigating
  customScrollToTop(5); // Adjust duration as needed

  return (
    <div className="scrollbar-custom">
      <div className="w-full h-[80vh] bg-black relative text-white page0 border border-l-purple-500 border-r-purple-500 border-b-black">
        <div
          id="title"
          className="absolute top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 head"
        >
          <h1 className="text-[8.5vw] font-bold">MY SKILLS</h1>
          <div id="line" className="border-b-2 border-orange-300"></div>
        </div>
        <div
          id="title"
          className="absolute w-80 h-80 flex items-center justify-center text-white top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          <div className="relative w-full h-full spin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              className="absolute inset-0 w-full h-full animate-rotate"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
                />
              </defs>
              <circle cx="150" cy="150" r="75" fill="none" />
              <g>
                <use xlinkHref="#circlePath" fill="none" />
                <text
                  fill="#FFFFFF"
                  className="text-sm font-bold"
                  style={{ fontFamily: "'Helvetica Neue', Arial" }}
                >
                  <textPath xlinkHref="#circlePath">
                    Scroll down !! Scroll down !! Scroll down !! Scroll down !!
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full h-[85vh] bg-black relative page1 border border-orange-600 border-t-black">
        <div id="html" className="absolute w-44 h-44 left-44 mt-2">
          <img src={html} alt="" />
        </div>
        <h1
          id="html"
          className="w-7 h-7 rounded-full border border-emerald-400 text-white text-center absolute ml-3 "
        >
          01
        </h1>
        <div
          id="html"
          className="w-44 h-44 absolute right-44 mt-20 flex justify-center items-center font-semibold"
        >
          <div className="relative w-44 h-44 bg-purple-500 animate-fluid-effect hover:bg-orange-400">
            <span className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold">
              HTML
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[90vh] bg-black relative page2 border border-blue-500">
        <div id="css" className="absolute w-44 h-44 left-44 mt-2">
          <img src={css} alt="" />
        </div>
        <h1
          id="css"
          className="w-7 h-7 rounded-full border border-emerald-400 text-white text-center absolute ml-3 "
        >
          02
        </h1>
        <div id="css" className="w-44 h-44 absolute right-44 mt-16">
          <div className="relative w-44 h-44 bg-purple-500 animate-fluid-effect hover:bg-blue-500">
            <span className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold">
              CSS
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[90vh] bg-black relative page3 border border-yellow-500">
        <div id="js" className="absolute w-44 h-44 left-44 mt-2">
          <img src={js} alt="" />
        </div>
        <h1
          id="js"
          className="w-7 h-7 rounded-full border border-emerald-400 text-white text-center absolute ml-3 "
        >
          03
        </h1>
        <div id="js" className="w-44 h-44 absolute right-44 mt-16">
          <div className="relative w-44 h-44 bg-purple-500 animate-fluid-effect hover:bg-yellow-500">
            <span className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold">
              JAVASCRIPT
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[90vh] bg-black relative page4 border  border-violet-500">
        <div id="boot" className="absolute w-44 h-44 left-44 mt-2">
          <img src={boot} alt="" />
        </div>
        <h1
          id="boot"
          className="w-7 h-7 rounded-full border border-emerald-400 text-white text-center absolute ml-3 "
        >
          04
        </h1>
        <div id="boot" className="w-44 h-44 absolute right-44 mt-16">
          <div className="relative w-44 h-44 bg-purple-500 animate-fluid-effect hover:bg-violet-700">
            <span className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold">
              BOOTSTRAP
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[90vh] bg-black relative page5 border  border-cyan-500">
        <div id="tail" className="absolute w-44 h-44 left-44 mt-2">
          <img src={tail} alt="" />
        </div>
        <h1
          id="tail"
          className="w-7 h-7 rounded-full border border-emerald-400 text-white text-center absolute ml-3 "
        >
          05
        </h1>
        <div id="tail" className="w-44 h-44 absolute right-44 mt-16">
          <div className="relative w-44 h-44 bg-purple-500 animate-fluid-effect hover:bg-cyan-500">
            <span className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold">
              TAILWIND CSS
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[90vh] bg-black relative page6 border  border-green-700">
        <div id="gsap" className="absolute w-44 h-44 left-44 mt-2">
          <img src={gsap1} alt="" />
        </div>
        <h1
          id="gsap"
          className="w-7 h-7 rounded-full border border-emerald-400 text-white text-center absolute ml-3 "
        >
          06
        </h1>
        <div id="gsap" className="w-44 h-44 absolute right-44 mt-16">
          <div className="relative w-44 h-44 bg-purple-500 animate-fluid-effect hover:bg-green-600">
            <span className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold">
              GSAP
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-screen bg-black relative page7 border border-blue-500">
        <div id="react" className="absolute w-44 h-44 left-44 mt-96 ">
          <img src={react} alt="" />
        </div>
        <h1
          id="react"
          className="w-7 h-7 rounded-full border border-emerald-400 text-white text-center absolute ml-3 mt-60"
        >
          07
        </h1>
        <div id="react" className="w-44 h-44 absolute right-44 mt-96 ">
          <div className="relative w-44 h-44 bg-purple-500 animate-fluid-effect hover:bg-blue-500">
            <span className="absolute inset-0 flex items-center justify-center text-black text-2xl font-semibold">
              REACT JS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
