import React from "react";
import "./candidate-details.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import BackButton from "../../UI/Atoms/TextButton/BackButton";
import Badge from "../../UI/Atoms/Badge/Badge";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import ColoredNumber from "../../UI/Atoms/ColoredNumber/ColoredNumber";
import BarTitle from "../../UI/Molecules/BarTitle/BarTitle";
import Table from "../../UI/Molecules/Table/Table";
import barChartIcon from "../../assets/icons/bar-chart.svg";
import videoIcon from "../../assets/icons/video.svg";
import strengthsIcon from "../../assets/icons/check-circle.svg";
import weaknessesIcon from "../../assets/icons/alert-circle.svg";
import riskIcon from "../../assets/icons/alert-triangle.svg";

const scoreBreakdown = [
  ["Major Match", 95, "15%", 14.3],
  ["Technical Skills", 92, "25%", 23],
  ["Projects", 90, "20%", 18],
  ["Experience", 85, "10%", 8.5],
  ["Academic Performance", 93, "15%", 14],
  ["Extracurriculars", 88, "5%", 4.4],
  ["Communication", 90, "10%", 9],
].map(([dimension, score, weight, contribution]) => ({
  dimension,
  score,
  weight,
  contribution,
}));

const strengths = [
  "Strong fundamentals in data structures and algorithms.",
  "Clear, well-structured technical communication.",
  "Demonstrated ownership of end-to-end projects.",
];

const weaknesses = [
  "Limited professional (non-academic) experience.",
  "Backend depth stronger than frontend polish.",
];

const CandidateDetails: React.FC = () => {
  return (
    <DefaultTemplate>
      <div className="details-conatiner card-info-left-aligned">
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

            <CardInfo title="Score Breakdown" icon={<img src={barChartIcon} />}>
              <div className="table-wrapper">
                <Table
                  columns={["Dimension", "Score", "Weight", "Contribution"]}
                  data={scoreBreakdown}
                />
              </div>
            </CardInfo>

            <CardInfo title="Video Assessment" icon={<img src={videoIcon} />}>
              <BarTitle label="Fluency: 88 / 100" percentage={88} />
              <BarTitle label="Presentation: 84 / 100" percentage={84} />
            </CardInfo>

            <CardInfo title="Strengths" icon={<img src={strengthsIcon} />}>
              <ul className="projects-list">
                {strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </CardInfo>

            <CardInfo title="Weaknesses" icon={<img src={weaknessesIcon} />}>
              <ul className="projects-list">
                {weaknesses.map((weakness) => (
                  <li key={weakness}>{weakness}</li>
                ))}
              </ul>
            </CardInfo>

            <CardInfo title="Risk Notes" icon={<img src={riskIcon} />}>
              <ul className="projects-list">
                <li>Stated availability not yet confirmed.</li>
              </ul>
            </CardInfo>
          </section>
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default CandidateDetails;
