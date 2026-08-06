import React from "react";
import "./settings.css";
import "../../index.css";
import Badge from "../../UI/Atoms/Badge/Badge.tsx";
import Button from "../../UI/Atoms/Buttons/Button.tsx";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle.tsx";
import suitcaseIcon from "../../assets/icons/briefcase.svg";
import InternshipDetailsCard from "./components/internshipDetailsCard/InternshipDetailsCard.tsx";
import ScoringCriteriaCard from "./components/scoringCritereaCard/scoringCriteraCard.tsx";
import { useEffect, useState } from "react";
import { getInternships } from "../../services/internships.ts";
import Title from "../../UI/Atoms/Title/Title.tsx";

const suitcase = <img src={suitcaseIcon} alt="suicase-icon" />;

const Settings: React.FC = () => {
  const [, setInternships] = useState<any[]>([]);

  useEffect(() => {
    async function initializeInternships() {
      const data = await getInternships();
      console.log(data);

      setInternships(data);
    }
    initializeInternships();
  }, []);

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
          <CardInfo
            title={
              <div className="card-info-header-row">
                <Title type="large" variant="primary">
                  Internships
                </Title>
                <Badge text={"2"} type="default" />
                <Button text="+ New" variant="primary" onClick={() => {}} />
              </div>
            }
            icon={suitcase}
          >
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
          <InternshipDetailsCard />
          <ScoringCriteriaCard />
        </div>
      </div>
    </>
  );
};

export default Settings;
