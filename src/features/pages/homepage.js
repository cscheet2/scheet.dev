import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";

import Raegan from "./../../images/Raegan.png";
import GitHubImage from "./../../images/github-mark-white.png";
import LinkedInImage from "./../../images/In-White-26.png"

import AboutMeText from "./../../documents/text/aboutme.md";


function Header() {
  return (
    <div className="mb-8 p-4 bg-slate-800 rounded-xl text-center text-2xl">
      scheet.dev
    </div>
  );
}

function Myself({ className }) {
  return (
    <div className={`p-8 bg-slate-800 rounded-xl ${className}`}>
      <img className="rounded-xl" src={Raegan} alt="Scheet Dev"/>
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
    <div className={`p-8 bg-slate-800 rounded-xl object ${className}`}>
      <Markdown>{about_me_text}</Markdown>
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
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
        <AboutMe className="flex-grow basis-0"/>
        <Myself className="flex-shrink basis-0 min-w-[200px] max-h-fit"/>
      </div>
    </div>
  );
}