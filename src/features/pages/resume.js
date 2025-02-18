import React from "react";

/**
 * Align right and left items on the same line.
 * Right arg is left, second is right.
 */
function LRAlign(props) {
  const lr = React.Children.toArray(props.children);
  return (
    <div className="flex flex-wrap justify-between">
      <div className="text-left w-full sm:w-auto">{lr[0]}</div>
      <div className="w-full sm:w-auto sm:text-right text-left">{lr[1]}</div>
    </div>
  );
}

/**
 * Changes text depending on whether or not
 * the text can fit
 * 
 * First child is larger text argument
 * Second argument is smaller text argument
 */
function TextScreenFit(props) {
  const children = React.Children.toArray(props.children);
  return (
    <div>
      <div className="hidden sm:block">{children[0]}</div>
      <div className="block sm:hidden">{children[0]}</div>
    </div>
  );
}

/**
 * Section template for each tab
 */
function SectionTemplate(props) {
  return (
    <div className="flex">
      <div className="bg-violet-800 rounded-xl w-3 self-stretch ml-3"/>
      <div className="mx-6 flex-1">
        <h1 className="text-5xl mb-3">{props.section}</h1>
        <div className="p-8 bg-slate-800 rounded-xl w-full flex flex-col gap-y-8">{props.children}</div>
      </div>
    </div>
  );
}

/**
 * Subsections template for each position
 */
function SubsectionTemplate(props) {
  return (
    <div className="">
      {props.children}
    </div>
  );
}

/**
 * List points unorderedly
 */
function Bullets(props) {
  const points = React.Children.toArray(props.children);
  return (
      <ul className={'list-disc pl-5'}>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
  );
}

function Education() {
  return (
    <SectionTemplate section="Education">
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>University of Nebraska-Lincoln</strong></p>
          <p>Lincoln, NE</p>
        </LRAlign>
        <LRAlign>
        <TextScreenFit>
          <p>Bachelor of Science in Software Engineering</p>
          <p>BS Software Engineering</p>
        </TextScreenFit>
        <p>Aug 2023-Present</p>
        </LRAlign>
        <p>Minor in Mathematics</p>
      </SubsectionTemplate>
    </SectionTemplate>
  );
}

function Experience() {
  return (
    <SectionTemplate section="Experience">
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>Undergraduate Teaching Assistant</strong></p>
          <p>Jan 2025-Present</p>
        </LRAlign>
        <p>Discrete Mathematics (Honors)</p>
        <p><i>School of Computing, UNL</i></p>
        <div className="my-2"/>
        <Bullets>
          <p>Designed rigorous and impactful assignments to enhance student learning</p>
          <p>Detailed student feedback through weekly office hours and comprehensive coursework evaluations</p>
          <p>Occasional in-class lectures on various discrete mathematics topics</p>
        </Bullets>
      </SubsectionTemplate>
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>Undergraduate Research Assistant</strong></p>
          <p>Aug 2024-Present</p>
        </LRAlign>
        <p><i>Constraint Systems Laboratory, UNL</i></p>
        <div className="my-2"/>
        <Bullets>
          <p>Designed and built SATVIZ, a web-based interactive visualization tool for a SAT Solver <a href="https://satviz.unl.edu/">satviz.unl.edu</a></p>
          <p>Desgined a MySQL database; used JavaScript, D3.js, and PHP</p>
        </Bullets>
      </SubsectionTemplate>
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>Learning Assistant</strong></p>
          <p>Jan 2024-Present</p>
        </LRAlign>
        <p>Computer Science I & II</p>
        <p><i>School of Computing, UNL</i></p>
        <div className="my-2"/>
        <Bullets>
          <p>Mentored students over intro computer science topics through collaborative teaching</p>
          <p>Monitored weekly lab sessions and gave individualized help sessions to students</p>
          <p>Participated in professional-development meetings to enhance skills in effectively addressing students’ needs</p>
        </Bullets>
      </SubsectionTemplate>
    </SectionTemplate>
  );
}

function Involvement() {
  return (
    <SectionTemplate section="Involvement">
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>Lunabotics, Aerospace Club</strong></p>
          <p>Aug 2024-Present</p>
        </LRAlign>
        <p><i>College of Engineering, UNL</i></p>
        <div className="my-2"/>
        <Bullets>
          <p>Designed and programmed an excavation rover for NASA’s Lunabotics Mining Competition</p>
          <p>Developed the drivetrain systems using Python with ROS2</p>
        </Bullets>
      </SubsectionTemplate>
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>Operating Systems and Open-Source Group (OS2G)</strong></p>
          <p>Aug 2023-Present</p>
        </LRAlign>
        <p><i>School of Computing, UNL</i></p>
        <div className="my-2"/>
        <Bullets>
          <p>Collaborate with peers to facilitate regular technical presentations delivered by club members and faculty</p>
          <p>Organize and participate in technical talks on Linux and other various open-source computing topics</p>
        </Bullets>
      </SubsectionTemplate>
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>Troop 308 Eagle Scout</strong></p>
          <p>Jan 2011-Nov 2022</p>
        </LRAlign>
        <p><i>Scouting America</i></p>
        <div className="my-2"/>
        <Bullets>
          <p>Elected as troop leader, responsible for coordinating weekly meetings and monthly camp-outs</p>
          <p>Organized door-to-door clothing drive, raising $18,000 in clothing donations for the NorthStar Foundation</p>
        </Bullets>
      </SubsectionTemplate>
    </SectionTemplate>
  );
}

function PersonalProjects() {
  return (
    <SectionTemplate section="Personal Projects">
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>Perlin Color</strong></p>
          <p><a href="https://github.com/cscheet2/Perlin-Color">github.com/cscheet2/Perlin-Color</a></p>
        </LRAlign>
        <div className="my-2"/>
        <Bullets>
          <p>Developing a desktop app that generates smooth visuals by mapping Perlin and Simplex noise values to color palettes</p>
          <p>Tools Used: C, CMake, SDL2</p>
        </Bullets>
      </SubsectionTemplate>
      <SubsectionTemplate>
        <LRAlign>
          <p><strong>scheet.dev</strong></p>
          <p><a href="https://github.com/cscheet2/scheet.dev">github.com/cscheet2/scheet.dev</a></p>
        </LRAlign>
        <div className="my-2"/>
        <Bullets>
          <p>Developing a personal developer/blog website to keep track of my personal and professional projects</p>
          <p>Tools Used: Cloudflare, JavaScript, Node.js, React.js, TailwindCSS</p>
        </Bullets>
      </SubsectionTemplate>
    </SectionTemplate>
  );
}

function Honors() {
  return (
    <SectionTemplate section="Honors">
      <SubsectionTemplate>
      <div className="my-2"/>
        <Bullets>
          <LRAlign>
            <p>UNL College of Engineering Dean’s List</p>
            <p>Jan 2024–Present</p>
          </LRAlign>
          <LRAlign>
            <p>Undergraduate Creative Activities and Research Experience (UCARE), $3,600</p>
            <p>Aug 2024–Present</p>
          </LRAlign>
          <LRAlign>
            <p>NACME Scholarship, $5,000</p>
            <p>Jun 2024–Present</p>
          </LRAlign>
        </Bullets>
      </SubsectionTemplate>
    </SectionTemplate>
  );
}

function TechnicalSkills() {
  return (
    <SectionTemplate section="Technical Skills">
      <SubsectionTemplate>
          <Bullets>
            <p><strong>Languages</strong>: C, C++, Python, Java, JavaScript, TypeScript, PHP, Bash, MySQL, Racket, HTML, CSS </p>
            <p><strong>Skills</strong>: Git, Linux, ROS2, Node.js, SDL2, LaTeX, Taiga, CMake, Cloudflare, PlatfromIO, TailwindCSS, MiniSAT</p>
          </Bullets>
      </SubsectionTemplate>
    </SectionTemplate>
  );
}

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-20">
      <Education/>
      <Experience/>
      <Involvement/>
      <PersonalProjects/>
      <Honors/>
      <TechnicalSkills/>
    </div>
  );
}

