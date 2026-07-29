import Sidebar from "../Organisms/sideBar/Sidebar";
import "./DefaultTemplate.css";

type props = {
  children: React.ReactNode;
};

const DefaultTemplate = ({ children }: props) => {
  return (
    <>
      <Sidebar />

      <div className="main-container">{children}</div>
    </>
  );
};

export default DefaultTemplate;
