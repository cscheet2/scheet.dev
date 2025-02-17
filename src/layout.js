import { Outlet } from "react-router-dom";
import NavBar from "./features/navbar/navbar";

export default function Layout() {
  return (
    <div id="portrait">
      <NavBar/>
      <div className="p-10 sm:p-4">
        <Outlet/>
      </div>
    </div>
  );
}