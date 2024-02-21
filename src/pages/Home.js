import React from "react";
import Contact from "../images/Contact.png";
import "../styles/Home.css";
import cursor from "../images/cursor.png";
const Home = () => {
    return (
        <div className="app h-[100%] w-[100%] flex justify-center flex-col">
            <div className="flex flex-col place-self-center justify-center content-center animate-bounce duration-1000">
                <span className=" text-xs pb-2">Scroll To See...</span>
                <img src={cursor} alt="img" className="h-14 w-14 ml-10" />
            </div>
            <div className="paper">
                <span className=" absolute translate-x-[-20vw] translate-y-[15vh] text-[25px] text-[#003858]">
                    Hey, I am
                </span>
                <h1 className="text-[20vw] text-[#FD3044] p-0 m-0 relief">
                    Saigenix
                </h1>
                
            </div>
        </div>
    );
};

export default Home;
