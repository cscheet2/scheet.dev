import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import Raegan from "./../../images/Raegan.png";
import GitHubImage from "./../../images/github-mark-white.png";
import LinkedInImage from "./../../images/In-White-26.png"

import AboutMeText from "./../../documents/text/aboutme.md";

function Header() {
  return (
    <div className="mb-8 p-4 rounded-xl text-center">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-300 via-purple-600 to-violet-900 text-transparent bg-clip-text bg-300% animate-gradient">
        scheet.dev
      </h1>
    </div>
  );
}

function Myself({ className }) {
  return (
    <div className={`p-8 pb-[72px] bg-slate-800 rounded-xl flex-0 w-auto h-full ${className}`}>
        <img className="rounded-xl w-auto h-full" src={Raegan} alt="Scheet Dev"/>
      <div className="pt-4 flex justify-evenly">
        <button onClick={() => window.location.href = "https://github.com/cscheet2"}><img src={GitHubImage} className="w-10 h-10"/></button>
        <button onClick={() => window.location.href = "https://www.linkedin.com/in/cameron-scheet/"}><img src={LinkedInImage} className="w-10 h-10"/></button>
      </div>
    </div>
  );
}

function AboutMe({ className }) {
  const [about_me_text, set_about_me_text] = useState("");
  useEffect(() => { fetch(AboutMeText).then(response => response.text()).then(text => set_about_me_text(text)); }, []);
  return (
    <div className={`p-8 bg-slate-800 rounded-xl object prose ${className}`}>
      <ReactMarkdown className="text-white">{about_me_text}</ReactMarkdown>
    </div>
  ); 
}

function Highlights() {
  return (
    <div>

    </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <Header/>
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:h-[calc(100svh-16em)]">
        <AboutMe className=""/>
        <Myself className=""/>
      </div>
    </div>
  );
}
