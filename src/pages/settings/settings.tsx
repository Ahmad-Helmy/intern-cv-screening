import React from "react";
import "./settings.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import Badge from "../../UI/Atoms/Badge/Badge.tsx";
import Button from "../../UI/Atoms/Buttons/Button.tsx";
import DropdownMenu from "../../UI/Atoms/DropdownMenu/DropdownMenu.tsx";
import InputField from "../../UI/Atoms/InputField/InputField";
import Title from "../../UI/Atoms/Title/Title";
import Logo from "../../UI/Atoms/Logo/Logo";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle.tsx";

const Settings: React.FC = () => {
  return (
    <DefaultTemplate>
      <div className="settings">Settings</div>
    </DefaultTemplate>
  );
};

export default Settings;
