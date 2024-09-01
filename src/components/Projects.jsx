import React from "react";
import Model from "./Model";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaCode } from "react-icons/fa";
import Tags from "./Tags";
import { Projects_data } from "../utils/config";
function Projects() {
  return (
    <Model
      id="projects"
      width={600}
      height={600}
      x={"left"}
      y={100}
      title={"Projects"}
    >
      <div className="bg-[#233142] p-5 text-white">
        <h2 className="text-2xl text-[#f95959] font-bold">Projects...</h2>
        <p>Here's my some of the cool projects</p>
        <div className="flex flex-col my-4 space-y-4">
          {Projects_data.map((project) => (
            <div className="rounded overflow-hidden shadow-lg bg-[#455d7a]">
              <img
                className="w-full"
                src={project.image}
                alt="Gemini Toolkit"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 flex ">
                  <h2 className="text-xl p-1">{project.name}</h2>
                  <div className="ml-auto flex">
                    <a href={project.link} target="_blank" className="p-1">
                      <HiOutlineExternalLink size={25} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-1"
                    >
                      <FaCode size={25} />
                    </a>
                  </div>
                </div>
                <p className=" text-base text-[#e3e3e3]">
                  {project.description}
                </p>
              </div>
              <Tags tags={project.tags} />
            </div>
          ))}
        </div>
      </div>
    </Model>
  );
}

export default Projects;
