import "./Button.css";
import React from "react";

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: React.ReactNode;
  onClick: () => void
}


export default function Button({text, variant = 'primary', icon, onClick}: ButtonProps) {
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

