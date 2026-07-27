import "./Button.css";
import {useEffect } from 'react';
function Button({text, type, variant, icon, onClick}) {
  useEffect(() => {
    console.log('Button component');
  }, []);
  return (
    <button
      type={type}
      className={` button btn-${variant}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
