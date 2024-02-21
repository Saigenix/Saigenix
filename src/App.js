import "./styles/App.css";
import React from "react";
import { useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Blank from "./pages/Blank";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="About" element={<About />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
