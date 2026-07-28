import "./Button.css";
import React from "react";

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
  onClick: () => void
}


function Button({text, variant = 'primary', icon, onClick}: ButtonProps) {
  return (
    <button
      type="button"
      className={`button btn-${variant}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;


// parameters doesn't have type
// required and optional parameters should be defined
// useEffect is not essential here, remove it if not needed
// variant should be defined as a union type of possible values (e.g., 'primary' | 'secondary' | 'danger')
