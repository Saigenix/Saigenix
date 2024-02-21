import React from "react";
import Contact from "../images/Contact.png";
import "../styles/Home.css";
import cursor from "../images/cursor.png";
import l1 from "../images/l1.png";
import snow from "../images/snow.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Blank from "./Blank";

const Home = () => {
    const snowRef = useRef();
    const container = useRef();

    useGSAP(
        () => {
            // gsap code here...
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".title",
                    scrub: 1,
                    pin: container.current,
                    markers: true,
                    start: "top-=500 top",
                    end: "+=100%",
                },
            });
            gsap.from(".scroll", {
                scrollTrigger: {
                    trigger: ".scroll",
                    markers: true,
                    scrub: true,
                    start: "top-=300 top",
                    end: "+=30px",
                },
                opacity: 1,
                duration: 0.1,
            });
            t1.from(".title", {
                y: "400px",
                opacity: 0,
                // rotate: "50deg",
                // scale:50,

                duration: 5,
                ease: "power1.out",
                stagger: 0.3,
            }); // <-- automatically reverted

            t1.fromTo(
                ".snow",
                {
                    y: "-100%",
                    x: "-100px",
                },
                {
                    y: "0px",
                    x: "0px",
                    duration: 5,
                }
            );
        },
        { scope: container }
    );

    return (
        <>
            <div className="App" ref={container}>
                <div className="scroll  opacity-0 absolute flex flex-col place-self-center justify-center content-center animate-bounce duration-1000 z-10">
                    <span className=" text-xs pb-2">Scroll To See...</span>
                    <img src={cursor} alt="img" className="h-14 w-14 ml-10" />
                </div>
                <img
                    src={snow}
                    alt="img"
                    className="snow absolute z-[1] object-contain h-[100%] w-[100vw]"
                />
                <div className="paper z-[0] pwhite title">
                    <span className=" absolute translate-x-[-20vw] translate-y-[15vh] text-[25px] text-[#003858]">
                        Hey, I am
                    </span>
                    <h1 className="text-[20vw] text-[#FD3044] p-0 m-0 relief">
                        Saigenix
                    </h1>
                </div>
            </div>
            {/* <div className="">
                <Blank />
            </div> */}
        </>
    );
};

export default Home;
