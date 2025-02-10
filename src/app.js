import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HomePage } from "./features/pages/homepage.js";
import { ResumePage } from "./features/pages/resume.js";
import { ProjectsPage } from "./features/pages/projects.js";
import { Layout } from "./layout.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="resume" element={<ResumePage/>}/>
          <Route path="projects" element={<ProjectsPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
