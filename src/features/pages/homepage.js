import React from "react";
import Markdown from "react-markdown";

import Raegan from "./../../images/Raegan.png";
import GitHubImage from "./../../images/github-mark-white.png";
import LinkedInImage from "./../../images/In-White-26.png"

import AboutMeText from "./../../documents/text/aboutme.json";


function Header() {
  return (
    <div className="mb-8 p-4 bg-slate-800 rounded-xl text-center text-2xl">
      scheet.dev
    </div>
  );
}

function Myself() {
  return (
    <div className="p-8 bg-slate-800 rounded-xl">
      <img className="rounded-xl mx-auto" src={Raegan} alt="Scheet Dev"/>
      <div className="pt-4 flex justify-evenly">
        <button onClick={() => window.location.href = "https://github.com/cscheet2"}><img src={GitHubImage} className="w-10 h-10"/></button>
        <button onClick={() => window.location.href = "https://www.linkedin.com/in/cameron-scheet/"}><img src={LinkedInImage} className="w-10 h-10"/></button>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="p-8 bg-slate-800 rounded-xl">
      <Markdown>{AboutMeText.text}</Markdown>
    </div>
  ); 
}

function Highlights() {
  return (
    <div>
      
    </div>
  );
}

export function HomePage() {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Header/>
      <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
        <AboutMe className=""/>
        <Myself/>
      </div>
    </div>
  );
}