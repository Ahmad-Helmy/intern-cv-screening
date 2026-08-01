import Logo from "../../Atoms/Logo/Logo.tsx";
import NavLink from "../../Atoms/Navlink/Navlink.tsx";
import settings from "../../../assets/icons/settings.svg";
import candidates from "../../../assets/icons/users.svg";
import "./SideBar.css";
import Button from "../../Atoms/Buttons/Button.tsx";
import signout from "../../../assets/icons/logout.svg";
import { useAuth } from "../../../context/auth-context.ts";
function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar_top">
          <Logo type="sidebar" size="lg" />

          <nav className="sidebar_nav">
            <NavLink label="Candidates" to="/candidates" icon={candidates} />
            <NavLink label="Settings" to="/settings" icon={settings} />
          </nav>
        </div>

        <div className="sidebar_footer">
          <div className="sidebar_profile">
            <div className="sidebar_avatar">
              {user ? user.name.charAt(0).toUpperCase() : "?"}
            </div>
            <div className="sidebar_user">
              <strong>{user ? user.name : "Not signed in"}</strong>
              <span>{user ? user.email : "-"}</span>
            </div>
          </div>
          <Button
            text="Sign Out"
            variant="transparent"
            onClick={logout}
            icon={<img src={signout} alt={"sign out"} />}
          />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
