import React from "react";
import Markdown from "react-markdown";

import Raegan from "./../../../images/Raegan.png";

import AboutMeText from "./../../../text/aboutme.json";

function Header() {
  <div>scheet.dev</div>
}

function Myself() {
  return (
    <div className="p-4 bg-slate-800 rounded-xl">
      <img className="p-4" src={Raegan} alt="Scheet Dev"/>
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
    <div className="container grid grid-cols-2 space-x-16">
      <AboutMe/>
      <Myself/>
    </div>
  );
}