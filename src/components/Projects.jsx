import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from'../images/dribble.png'
import img2 from'../images/justlook.png'
import img3 from'../images/click.png'
import img4 from'../images/anime.png'

function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(".head", {
      scale: 0,
      duration: 1,
      opacity: 0,
      ease: "power4.out",
    });
    tl.from("#line", {
      x: -500,
      duration: 0.5,
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
    tl.to(".head", {
      y: -500,
      scrollTrigger: {
        trigger: "#card2",
        start: "top 0px",
        end: "center 5px",
        scrub: 2.5,
      },
    });
    tl.from(".card", {
      x: -1000,
      scale: 1.2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#card",
        start: "top 250px",
        end: "center 170px",
        scrub: 1,
      },
    });
    tl.from(".card1", {
      x: 1000,
      scale: 1.2,
      opacity: 0,
      scrollTrigger: {
        trigger: "#card1",
        start: "top 200px",
        end: "center 500px",
        scrub: 2,
      },
    });
  });

  function customScrollToTop(duration = 50) {
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
  customScrollToTop(50); // Adjust duration as needed

  return (
    <>
      <div
        id="card2"
        className="w-full h-screen bg-black realtive overflow-hidden"
      >
        <div className="w-fit  text-white top-44 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-center head">
          <h1 className="text-[7.55vw] font-bold">MY PROJECTS</h1>
          <div id="line" className="border-b-2 border-orange-300"></div>
          <div
            id="title"
            className="absolute w-80 h-80 flex items-center justify-center text-white top-80 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
                      Scroll down !! Scroll down !! Scroll down !! Scroll down
                      !!
                    </textPath>
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div id="card" className="w-full h-[90vh] bg-black relative">
          <div className="absolute w-1/3 h-72  rounded-tl-3xl rounded-tr-3xl overflow-hidden top-52 left-36 group card">
            <img src={img1} alt="" className="object-cover w-full h-full" />
            <div className="absolute inset-0.5 bg-white bg-opacity-20 backdrop-blur-sm transition-transform duration-300 ease-in-out transform translate-y-full  group-hover:translate-y-0"></div>
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <div>
                <h2 className="text-xl font-bold">DRIBBLE WEBSITE CLONE</h2>
                <p>HTML,CSS,JAVASCRIPT</p>
                <a href='https://github.com/AbdulNaim01?tab=repositories'>PROJECT-1</a>
              </div>
            </div>
          </div>
          
          <div className="absolute w-1/3 h-72 rounded-tl-3xl rounded-tr-3xl overflow-hidden top-52 right-36 group card">
          <img src={img2} alt="" className="object-fill w-full h-full" />
            {/* Glass effect */}
            <div className="absolute inset-0.5 bg-white bg-opacity-20 backdrop-blur-sm transition-transform duration-300 ease-in-out transform translate-y-full  group-hover:translate-y-0"></div>
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <div>
                <h2 className="text-xl font-bold">JUST LOOK</h2>
                <p>HTML,CSS,JAVASCRIPT</p>
                <a href='https://github.com/AbdulNaim01?tab=repositories'>PROJECT-2</a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="card1"
          className="w-full h-[90vh] bg-black relative overflow-hidden"
        >
          <div className="absolute w-1/3 h-72 rounded-tl-3xl rounded-tr-3xl overflow-hidden top-52 left-36 group card1">
          <img src={img3} alt="" className="object-contain w-full h-full" />
            {/* Glass effect */}
            <div className="absolute inset-0.5 bg-white bg-opacity-20 backdrop-blur-sm transition-transform duration-300 ease-in-out transform translate-y-full  group-hover:translate-y-0"></div>
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <div>
                <h2 className="text-xl font-bold">STATIC PAGE USING GSAP</h2>
                <p>HTML,CSS,GSAP</p>
                <a href='https://github.com/AbdulNaim01?tab=repositories'>PROJECT-3</a>
              </div>
            </div>
          </div>
          <div className="absolute w-1/3 h-72 rounded-tl-3xl rounded-tr-3xl overflow-hidden top-52 right-36 group card1">
          <img src={img4} alt="" className="object-contain w-full h-full" />
            {/* Glass effect */}
            <div className="absolute inset-0.5 bg-white bg-opacity-20 backdrop-blur-sm transition-transform duration-300 ease-in-out transform translate-y-full  group-hover:translate-y-0"></div>
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100">
              <div>
                <h2 className="text-xl font-bold">CLICK_ME WEBSITE</h2>
                <p>HTML,CSS,JAVASCRIPT</p>
                <a href='https://github.com/AbdulNaim01?tab=repositories'>PROJECT-4</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
