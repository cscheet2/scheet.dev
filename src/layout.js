import { Outlet } from "react-router-dom";
import NavBar from "./features/navbar/navbar";

export default function Layout() {
  return (
    <div id="portrait">
      <NavBar/>
      <div className="p-2 sm:p-6 md:p-8">
        <Outlet/>
      </div>
    </div>
  );
}