import React from "react";
import "./candidate-details.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import Title from "../../UI/Atoms/Title/Title";

const CandidateDetails: React.FC = () => {
  return (
    <DefaultTemplate>
      <div className="details-conatiner">
        <CardInfo title="Mohamed Khalil">
          <Title type="small" variant="primary">
            mohammed.khalil@university.edu . +351 942 318 705 . Full-Stack
            Nominated Video: Pass Strongly Recommended{" "}
          </Title>
        </CardInfo>
      </div>
    </DefaultTemplate>
  );
};

export default CandidateDetails;
