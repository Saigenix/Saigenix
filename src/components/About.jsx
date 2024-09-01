import React from "react";
import Model from "./Model";
import { FaLinkedin } from "react-icons/fa";
function About() {
  return (
    <Model id="about" width={400} height={235} x={"150"} y={50} title={"About"}>
      <div className="bg-[#233142] p-5 text-white">
        <h2 className="text-2xl text-[#f95959] font-bold">About Me...</h2>
        <p>
          Hey! I’m Sai, aka Saigenix. I love coding and building new things, and
          I’m always curious about how things work. If there's something to
          tinker with, I'm probably on it!
        </p>
        <div className="flex items-center pt-4 space-x-2">
          <a target="_blank" href="https://www.linkedin.com/in/saigenix77/">
            <FaLinkedin size={30} color="#0077B5" />
          </a>
        </div>
      </div>
    </Model>
  );
}

export default About;
