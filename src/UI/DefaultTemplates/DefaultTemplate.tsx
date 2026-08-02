import Sidebar from "../Organisms/sideBar/Sidebar";
import "./DefaultTemplate.css";
import { Outlet } from "react-router";

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
