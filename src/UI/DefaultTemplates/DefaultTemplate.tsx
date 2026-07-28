import Sidebar from "../Organisms/sideBar/Sidebar";
import "./DefaultTemplate.css";

type props = {
  children: React.ReactNode;
};

const DefaultTemplate = ({ children }: props) => {
  return (
    <main>
      <div>
        <Sidebar />
      </div>

      <div className="container">{children}</div>
    </main>
  );
};

export default DefaultTemplate;
