import ArrowLeftIcon from "../../../assets/icons/arrow-left.svg";
import "./BackButton.css";

const BackButton = ({ label = "Back", onClick, className = "" }) => {
  return (
    <button
      type="button"
      className={`back-button ${className}`}
      onClick={onClick}
    >
      <img src={ArrowLeftIcon} alt="" className="back-button__icon" />
      <span className="back-button__text">{label}</span>
    </button>
  );
};

export default BackButton;