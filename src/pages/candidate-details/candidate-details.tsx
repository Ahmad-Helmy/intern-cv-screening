import React from "react";
import { useNavigate, useParams } from "react-router";
import "./candidate-details.css";
import BackButton from "../../UI/Atoms/TextButton/BackButton";
import Badge from "../../UI/Atoms/Badge/Badge";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import ColoredNumber from "../../UI/Atoms/ColoredNumber/ColoredNumber";
import BarTitle from "../../UI/Molecules/BarTitle/BarTitle";
import Table from "../../UI/Molecules/Table/Table";
import { candidateData } from "../candidates/mockData";
import {
  getBadgeTypeForStatus,
  getScoreLevel,
} from "../candidates/candidatesService";
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
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = candidateData.find((c) => c.id === id);

  if (!candidate) {
    return (
      <div className="details-conatiner card-info-left-aligned">
        <div className="back-btn">
          <BackButton
            label="Back to Candidates"
            onClick={() => navigate("/candidates")}
          />
        </div>
        <CardInfo title="Candidate not found">
          <p className="description">
            No candidate matches the id &quot;{id}&quot;.
          </p>
        </CardInfo>
      </div>
    );
  }

  const name = candidate.Candidate ?? "-";
  const score = candidate.Score;

  return (
    <>
      <div className="details-conatiner card-info-left-aligned">
        <div className="back-btn">
          <BackButton
            label="Back to Candidates"
            onClick={() => navigate(-1)}
          />
        </div>

        <section className="candidate-summary" aria-label={name}>
          <CardInfo title={name}>
            <div className="candidate-info">
              <span>{candidate.Email ?? "-"}</span>
              {/* TODO: phone and track are not on RawCandidate yet */}
              <span className="candidate-info__separator">·</span>
              <span>+351 942 318 705</span>
              <span className="candidate-info__separator" aria-hidden="true">
                ·
              </span>
              <span>Full-Stack</span>
            </div>

            <div className="candidate-status" aria-label="Candidate status">
              <Badge
                text={candidate.Status}
                type={
                  candidate.Status
                    ? getBadgeTypeForStatus(candidate.Status)
                    : "default"
                }
              />
              <Badge text="Video: Pass" type="evaluated" />
              <Badge text="Strongly Recommended" type="nominated" />
            </div>
          </CardInfo>
        </section>

        <div className="details-main-container">
          <div className="left-container">
            <section aria-label="Academic Profile">
              <CardInfo title="Academic Profile">
                <div className="field-row">
                  <p className="description">
                    University: {candidate.Uni ?? "-"}
                  </p>
                </div>
                <div className="field-row">
                  <p className="description">Major: {candidate.Major ?? "-"}</p>
                </div>
                <div className="field-row">
                  <p className="description">GPA: {candidate.GPA ?? "-"}</p>
                </div>
                <div className="field-row">
                  {/* TODO: graduation year is not on RawCandidate yet */}
                  <p className="description">Graduation Year: 2027</p>
                </div>
              </CardInfo>
            </section>

            {/* TODO: everything below is still illustrative — skills,
                languages, projects, experience, certifications,
                extracurriculars, the video scores, the breakdown and the
                report have no counterpart on RawCandidate yet. They become
                real when mockData carries a profile and an evaluation. */}
            <section aria-label="Skills">
              <CardInfo title="Skills">
                <div className="skills-badges">
                  <Badge text="Java" type="default" />
                  <Badge text="Spring Boot" type="default" />
                  <Badge text="TypeScript" type="default" />
                  <Badge text="React" type="default" />
                  <Badge text="PostgreSQL" type="default" />
                  <Badge text="Docker" type="default" />
                  <Badge text="AWS" type="default" />
                  <Badge text="REST APIs" type="default" />
                </div>
              </CardInfo>
            </section>

            <section aria-label="Languages">
              <CardInfo title="Languages">
                <p className="description">
                  Portuguese (Native), English (Fluent), Spanish (Intermediate)
                </p>
              </CardInfo>
            </section>

            <section aria-label="Projects">
              <CardInfo title="Projects">
                <ul className="candidate-list">
                  <li>
                    <p className="description">
                      Built a full-stack e-commerce platform with React and
                      Spring Boot serving 1k+ mock orders.
                    </p>
                  </li>
                  <li>
                    <p className="description">
                      Implemented a microservices-based ticketing system with
                      Docker and Kubernetes.
                    </p>
                  </li>
                </ul>
              </CardInfo>
            </section>

            <section aria-label="Experience">
              <CardInfo title="Experience">
                <ul className="candidate-list">
                  <li>
                    <p className="description">
                      Summer intern at a fintech startup — maintained backend
                      services in Java.
                    </p>
                  </li>
                  <li>
                    <p className="description">
                      Teaching assistant for an introductory programming course
                      (2 semesters).
                    </p>
                  </li>
                </ul>
              </CardInfo>
            </section>

            <section aria-label="Certifications">
              <CardInfo title="Certifications">
                <p className="description">-</p>
              </CardInfo>
            </section>

            <section aria-label="Extracurricular">
              <CardInfo title="Extracurricular">
                <ul className="candidate-list">
                  <li>
                    <p className="description">
                      President of the university coding club.
                    </p>
                  </li>
                  <li>
                    <p className="description">
                      Hackathon finalist — built a sustainability tracking app
                      in 24h.
                    </p>
                  </li>
                </ul>
              </CardInfo>
            </section>

            <section aria-label="AI Evaluation Report">
              <CardInfo title="AI Evaluation Report">
                <p className="description">
                  {name} demonstrates strong alignment with the
                  Software Engineering 2026 criteria. Technical skills and
                  project work are the primary contributors to the overall
                  score, weighted against academic performance and
                  communication. The candidate&apos;s CV indicates 8 relevant
                  skills and 2 notable projects.
                </p>
              </CardInfo>
            </section>
          </div>
          <section className="right-container" aria-label="Candidate Scores">
            <CardInfo title="Score Overview" icon={<img src={barChartIcon} />}>
              <ColoredNumber
                score={score}
                level={score !== undefined ? getScoreLevel(score) : null}
                percent
              />
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
    </>
  );
};

export default CandidateDetails;
