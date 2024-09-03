import React from "react";
import Model from "./Model";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { CustomStyles } from "../utils/config";
function Contact() {
  return (
    <Model
      id="contact"
      width={400}
      height={181}
      x={"center"}
      y={50}
      title={"Contact"}
    >
      <div className="bg-[#233142] p-5 text-white">
        <h2 className="text-2xl text-[#f95959] font-bold">Contact Me...</h2>
        <p>here's my social handles</p>
        <div className="flex items-center pt-4 space-x-2">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/saigenix77/"
            className={`${CustomStyles.hover}`}
          >
            <FaLinkedin size={30} color="#0077B5" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/saigenix"
            className={`${CustomStyles.hover}`}
          >
            <FaSquareXTwitter size={30} color="black" />
          </a>
          <a
            target="_blank"
            href="mailto:sainathkumar805@gmail.com"
            className={`${CustomStyles.hover}`}
          >
            <SiGmail size={30} color="#e64830" />
          </a>
        </div>
      </div>
    </Model>
  );
}

export default Contact;
