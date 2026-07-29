import { Outlet } from "react-router";
import Sidebar from "../Organisms/sideBar/Sidebar";
import "./DefaultTemplate.css";

const DefaultTemplate = () => {
  return (
    <>
      <Sidebar />

      <div className="main-container">
        <Outlet />
      </div>
    </>
  );
};

export default DefaultTemplate;
