import { Routes, Route } from "react-router-dom";

import { HomePage } from "./features/pages/homepage/homepage.js";
import { ResumePage } from "./features/pages/resume/resume.js";
import { Layout } from "./layout.js";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="resume" element={<ResumePage/>}/>
      </Route>
    </Routes>
  );
}
