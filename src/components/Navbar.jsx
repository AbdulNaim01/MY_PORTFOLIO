import React from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  // Set up the GSAP animation
  useGSAP(() => {
    // Create a timeline for the navigation animation
    const tl = gsap.timeline();
    tl.from("#h1_anim", {
      opacity: 0,
      y: -100,
      duration:.5,
    });
    tl.from("#nav_anim > *", {
      opacity: 0,
      y: -100,
      stagger: 0.25,
    });
    tl.fromTo(
      "#nav_border",
      { x: "-80%", width: 0 }, // Initial state
      {
        x: 0,
        width: "100%", // Final state
        duration: .6,
        ease: "power4.in",
      }
    );
  });

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 bg-black text-white z-50 flex justify-between items-center px-16">
        <h1 id="h1_anim" className="text-white text-4xl italic">
          Portfolio
        </h1>
        <div id="nav_anim" className="flex gap-24">
          <NavLink
            id="#home_anim"
            to="/MY_PORTFOLIO/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-300 hover:text-emerald-500"
            }
          >
            <h3>HOME</h3>
          </NavLink>
          <NavLink
            id="#skills_anim"
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-300 hover:text-emerald-500"
            }
          >
            <h3>SKILLS</h3>
          </NavLink>
          <NavLink
            id="#projects_anim"
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-300 hover:text-emerald-500"
            }
          >
            <h3>PROJECTS</h3>
          </NavLink>
          <NavLink
            id="#contact_anim"
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold"
                : "text-gray-300 hover:text-emerald-500"
            }
          >
            <h3>CONTACT</h3>
          </NavLink>
        </div>
        <div
          id="nav_border"
          className="absolute bottom-0 left-0 border-b border-purple-500"
          style={{ height: "1px", width: 0 }}
        />
      </nav>
    </>
  );
}

export default Navbar;
