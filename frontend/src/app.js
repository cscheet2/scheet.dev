import { Routes, Route } from "react-router-dom";

import { HomePage } from "./features/pages/homepage/homepage.js";

export function App() {
  const page = 
  <>
    <HomePage/>
  </>;
  return (
    <Routes>
      <Route path={"/*"} element={page}/>
    </Routes>
  );
}
