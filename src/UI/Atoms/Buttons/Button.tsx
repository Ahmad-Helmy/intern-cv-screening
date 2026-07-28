import "./Button.css";
import {useEffect } from 'react';
function Button({text, variant, icon, onClick}) {
  useEffect(() => {
    console.log('Button component');
  }, []);
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
