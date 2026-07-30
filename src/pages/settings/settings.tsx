import React from "react";
import "./settings.css";
import "../../index.css";
import Badge from "../../UI/Atoms/Badge/Badge.tsx";
import Button from "../../UI/Atoms/Buttons/Button.tsx";
import DropdownMenu from "../../UI/Atoms/DropdownMenu/DropdownMenu.tsx";
import InputField from "../../UI/Atoms/InputField/InputField";
import Title from "../../UI/Atoms/Title/Title";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle.tsx";
import suitcaseIcon from "../../assets/icons/briefcase.svg";
// import Card from "../../UI/Atoms/Card/Card.tsx";

const suitcase = <img src={suitcaseIcon} alt="suicase-icon" />;

const Settings: React.FC = () => {
  return (
    <>
      <header>
        <InfoTitle
          label="Settings"
          value="Manage internships and configure how candidates are scored for each
            one."
        ></InfoTitle>
      </header>
      <div className="settings">
        <div className="internships-panel">
          <CardInfo title="Internships" icon={suitcase}>
            <div className="card-info-header-row">
              <Badge text={"2"} type="default" />
              <Button text="+ New" variant="primary" onClick={() => {}} />
            </div>
            <div className="intersnhip-list">
              <div className="internship-card">
                <InfoTitle
                  label="EDC Software Engineering Internship 2026"
                  value="Year:2026 | Status: Open"
                ></InfoTitle>
              </div>
              <div className="internship-card">
                <InfoTitle
                  label="Global Design UI/UX Intern"
                  value="Year:2026 | Status: Draft"
                ></InfoTitle>
              </div>
            </div>
          </CardInfo>
        </div>
      </div>
    </>
  );
};

export default Settings;
