import Sidebar from "../Organisms/sideBar/Sidebar";
import "./DefaultTemplate.css";

type props = {
  children: React.ReactNode;
};

const DefaultTemplate = ({ children }: props) => {
  return (
    <>
      <Sidebar />
      <main className="main-container">{children}</main>
    </>
  );
};

export default DefaultTemplate;
