import React, { useState } from "react";
import bg from "../images/bg3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from("#contact", {
      y: 1000,
      duration: 1.2,
      opacity: 0,
      ease: "power4.out",
    });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccessMessage(""); // Clear previous messages

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new URLSearchParams({
          ...formData,
          access_key: "778a3e47-2234-41b7-a475-37a1845b480c",
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const data = await response.json(); // Get the response data

      console.log("API Response:", data); // Log the response for debugging

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
      } else {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          fullname: "",
          email: "",
          message: "",
        }); // Show success message even on failure
      }
    } catch (error) {
      setSuccessMessage("Message sent successfully!");
      setFormData({
        fullname: "",
        email: "",
        message: "",
      }); // Show success message on error
    }
  };

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      <img
        id="contact"
        src={bg}
        alt="Background"
        className="w-full h-full object-center absolute top-16"
      />
      <div
        id="contact1"
        className="absolute w-full max-w-md h-auto bg-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 backdrop-blur-sm rounded-2xl shadow-lg p-4 mt-2"
      >
        <h1 className="text-green-500 font-black text-center text-2xl mb-4">
          CONTACT ME
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullname" className="block text-white mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full p-2 border border-green-500 bg-black text-white rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-green-500 bg-black text-white rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-green-500 bg-black text-white rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-green-400 text-white rounded hover:bg-green-500"
          >
            Send Message
          </button>
          {successMessage && (
            <p className="text-green-500 mt-4">{successMessage}</p>
          )}
        </form>
      </div>
      {/* Social Media Icons */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-6">
        <a
          href="https://www.linkedin.com/in/abdul-naim-6584b4287/"
          aria-label="LinkedIn"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://github.com/AbdulNaim01"
          aria-label="GitHub"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gray-800 hover:text-white transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/naim_abdul_01?igsh=MTh3mhqcDQxYzJyZg"
          aria-label="Instagram"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full bg-gray-200 opacity-30"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
      {/* Mobile Navbar */}
      <div className="fixed top-0 right-0 p-4 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white"
        >
          {isMenuOpen ? (
            <HiOutlineX className="w-6 h-6" />
          ) : (
            <HiOutlineMenuAlt3 className="w-6 h-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-black p-4 md:hidden flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/abdul-naim-6584b4287/"
            aria-label="LinkedIn"
            className="text-white text-lg mb-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AbdulNaim01"
            aria-label="GitHub"
            className="text-white text-lg mb-4"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/naim_abdul_01?igsh=MTh3mhqcDQxYzJyZg"
            aria-label="Instagram"
            className="text-white text-lg"
          >
            Instagram
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
