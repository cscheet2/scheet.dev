import React from "react";
import Resume from "./../../documents/pdf/Resume.pdf";

import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumePage() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Document file={Resume} error="error loading resume pdf">
        <Page pageNumber={1} size="A4" renderTextLayer={false} />
      </Document>
    </div>
  );
}
{/* <iframe src={Resume} title="Resume" className="w-full h-full border-none"></iframe> */}
