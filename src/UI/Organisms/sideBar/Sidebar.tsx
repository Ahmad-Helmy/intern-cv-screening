import Logo from "../../Atoms/Logo/Logo.tsx";
import "./SideBar.css";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar_top">
          <Logo type="sidebar" size="lg" />

          <nav className="sidebar_nav">
            <div className="sidebar_link active">
              <span>Candidates</span>
            </div>

            <div className="sidebar_link">
              <span>Settings</span>
            </div>
          </nav>
        </div>

        <div className="sidebar_footer">
          <div className="sidebar_profile">
            <div className="sidebar_avatar">U</div>
            <div className="sidebar_user">
              <strong>User</strong>
              <span>Role</span>
            </div>
          </div>

          <div className="sidebar_link sidebar_sign_out">
            <span>Sign out</span>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
