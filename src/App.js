import "./styles/App.css";
import React from "react";
import { useRef } from "react";

import { Link } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Blank from "./pages/Blank";

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;
