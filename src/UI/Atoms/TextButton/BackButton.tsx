import ArrowLeft from "../../../assets/icons/arrow-left.svg";
import Button from "../Buttons/Button";

const BackButton = ({ label = "Back", onClick }) => {
  return (
    <Button
      text={label}
      onClick={onClick}
      icon={<img src={ArrowLeft} alt="" className="back-button__icon" />}
      variant={'ghost'}
    />
  );
};
export default BackButton;

