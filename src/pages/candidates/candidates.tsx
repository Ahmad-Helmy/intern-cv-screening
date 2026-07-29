import React from "react";
import "./candidates.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle";

const Candidates: React.FC = () => {
  return (
    <DefaultTemplate>
      <div className="candidates">
        <InfoTitle
          label="Candidates"
          value="Select an internship to review its applicants"
        />
      </div>
    </DefaultTemplate>
  );
};

export default Candidates;
