import React from "react";
import Resume from "./../../documents/pdf/Resume.pdf";

export function ResumePage() {
return (
  <div className="w-full h-screen overflow-hidden">
    <iframe src={Resume} title="Resume" className="w-full h-full border-none"></iframe>
  </div>
  );
}