import { NavLink as RouterNavLink } from "react-router";
import "./Navlink.css";

const NavLink = ({
  label,
  to,
  icon,
}: {
  label: string;
  to: string;
  icon?: string;
}) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) => `sidebar_link ${isActive ? "active" : ""}`}
    >
      {icon && <img src={icon} alt="" />}
      <span>{label}</span>
    </RouterNavLink>
  );
};

export default NavLink;
