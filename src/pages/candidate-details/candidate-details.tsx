import React from "react";
import "./candidate-details.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import BackButton from "../../UI/Atoms/TextButton/BackButton";
import Badge from "../../UI/Atoms/Badge/Badge";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import ColoredNumber from "../../UI/Atoms/ColoredNumber/ColoredNumber";
import barChartIcon from "../../assets/icons/bar-chart.svg";

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

        <section className="candidate-summary">
          <CardInfo title="Mohammed Khalil">
            <div className="candidate-info">
              <span>mohammed.khalil@university.edu</span>
              <span className="candidate-info__separator">·</span>
              <span>+351 942 318 705</span>
              <span className="candidate-info__separator">·</span>
              <span>Full-Stack</span>
            </div>

            <div className="candidate-status">
              <Badge text="Nominated" type="nominated" />
              <Badge text="Video: Pass" type="evaluated" />
              <Badge text="Strongly Recommended" type="nominated" />
            </div>
          </CardInfo>
        </section>

        <div className="details-main-container">
          <section className="left-container" />

          <section className="right-container">
            <CardInfo title="Score Overview" icon={<img src={barChartIcon} />}>
              <ColoredNumber score={91} level="high" percent />
              <p>
                Top performer across technical and communication dimensions;
                clear nomination.
              </p>
              <p>
                <strong>Video fluency:</strong> 88
              </p>
              <p>
                <strong>Video presentation:</strong> 84
              </p>
            </CardInfo>
          </section>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default CandidateDetails;
