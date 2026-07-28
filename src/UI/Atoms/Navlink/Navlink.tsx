import "./Navlink.css";

const NavLink = ({
  label,
  active,
  icon,
  onClick,
}: {
  label: string;
  active?: boolean;
  icon?: string;
  onClick?: () => void;
}) => {
  return (
    <div className={`sidebar_link ${active ? "active" : ""}`} onClick={onClick}>
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default NavLink;
