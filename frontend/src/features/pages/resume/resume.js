import React from "react";
import Resume from "./../../../documents/pdf/Resume.pdf";

export function ResumePage() {
return (
  <div className="">
    <iframe src={Resume} width="100%" height="750" title="Resume"></iframe>
  </div>
  );
}