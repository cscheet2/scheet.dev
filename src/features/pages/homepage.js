import React from "react";

import Raegan from "./../../images/Raegan.png";
import GitHubImage from "./../../images/github-mark-white.png";
import LinkedInImage from "./../../images/In-White-26.png"
import InstagramImage from "./../../images/instagram-social-image.png";
import EmailImage from "./../../images/email-social-image.png";

function Header() {
  return (
    <div className="mb-8 p-4 rounded-xl text-center">
      <h1 className="text-6xl font-bold bg-gradient-to-r from-violet-300 via-purple-600 to-violet-900 text-transparent bg-clip-text bg-300% animate-gradient">
        scheet.dev
      </h1>
    </div>
  );
}

function AboutMe({ className }) {
  return (
    <div className={`p-8 bg-slate-800 rounded-xl ${className}`}> 
      <h2 className="text-3xl mb-4">Welcome!</h2>
      <p className="leading-relaxed max-w-prose text-lg">
        Hello, I'm Cameron! I'm pursuing a Bachelor of Science in Software Engineering at the University of Nebraska-Lincoln. 
        My current interests include data visualization and robotics, but I’m always eager to explore new areas of computing. 
        I’m currently working as a UCARE researcher in the Constraint Systems Laboratory at UNL, where I’m developing a MiniSAT visualization tool to enhance SAT education within the School of Computing. 
        I’m seeking a Software Engineering internship in the Lincoln/Omaha area but am open to out-of-state opportunities for the summer.
      </p>
    </div>
  ); 
}

function Myself({ className }) {
  return (
    <div className={`p-8 bg-slate-800 rounded-xl ${className}`}>
      <img className="rounded-xl w-auto max-h-[400px] object-cover mx-auto" src={Raegan} alt="Scheet Dev"/>
    </div>
  );
}

function Socials({ className }) {
  return (
      <div className={`p-8 bg-slate-800 rounded-xl flex flex-col justify-evenly ${className}`}>
        <button onClick={() => window.location.href = "https://github.com/cscheet2"}><img src={GitHubImage} className="w-10 h-10"/></button>
        <button onClick={() => window.location.href = "https://www.linkedin.com/in/cameron-scheet/"}><img src={LinkedInImage} className="w-10 h-10"/></button>
        <button onClick={() => window.location.href = "https://www.instagram.com/camisdum"}><img src={InstagramImage} className="w-10 h-10"/></button>
        <button onClick={() => window.location.href = "mailto:camscheet@gmail.com"}><img src={EmailImage} className="w-10 h-10"/></button>
      </div>
  );
}

export default function HomePage() {
  return (
    <div>
      <Header/>
      <div className="flex flex-col lg:flex-row gap-8 justify-center">
        <AboutMe className=""/>
        <div className="flex flex-row gap-8 justify-center">
          <Myself className=""/>
          <Socials className=""/>
        </div>
      </div>
    </div>
  );
}
