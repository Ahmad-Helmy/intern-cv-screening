import React from "react";
import "./candidate-details.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import BackButton from "../../UI/Atoms/TextButton/BackButton";
import Badge from "../../UI/Atoms/Badge/Badge";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";

const CandidateDetails: React.FC = () => {
  return (
    <DefaultTemplate>
      <div className="details-conatiner">
        <div className="back-btn">
          <BackButton
            label="Back to Candidates"
            onClick={() => window.history.back()}
          />
        </div>

        <section className="candidate-summary" aria-label="Mohammed Khalil">
          <CardInfo title="Mohammed Khalil">
            <div className="candidate-info">
              <span>mohammed.khalil@university.edu</span>
              <span className="candidate-info__separator">·</span>
              <span>+351 942 318 705</span>
              <span className="candidate-info__separator" aria-hidden="true">
                ·
              </span>
              <span>Full-Stack</span>
            </div>

            <div className="candidate-status" aria-label="Candidate status">
              <Badge text="Nominated" type="nominated" />
              <Badge text="Video: Pass" type="evaluated" />
              <Badge text="Strongly Recommended" type="nominated" />
            </div>
          </CardInfo>
        </section>
      </div>
    </DefaultTemplate>
  );
};

export default CandidateDetails;
