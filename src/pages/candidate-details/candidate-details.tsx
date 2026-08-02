// candidate-details.tsx
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./candidate-details.css";
import BackButton from "../../UI/Atoms/TextButton/BackButton";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import BarTitle from "../../UI/Molecules/BarTitle/BarTitle";
import Table from "../../UI/Molecules/Table/Table";
import barChartIcon from "../../assets/icons/bar-chart.svg";
import videoIcon from "../../assets/icons/video.svg";
import strengthsIcon from "../../assets/icons/check-circle.svg";
import weaknessesIcon from "../../assets/icons/alert-circle.svg";
import riskIcon from "../../assets/icons/alert-triangle.svg";
import { getCandidateById } from "../../services/candidates";
import type { CandidateDetail } from "../../types/api/candidates";
import {
  getCandidateSummary,
  getCandidateAcademicProfile,
  getCandidateEvaluationSummary,
  renderSkillBadges,
} from "./candidate-details-service";

const CandidateDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [candidate, setCandidate] = useState<CandidateDetail | null>(null);
  const [status, setStatus] = useState<
    "loading" | "ready" | "not-found" | "error"
  >("loading");

  useEffect(() => {
    if (!id) {
      setStatus("not-found");
      return;
    }

    setStatus("loading");
    getCandidateById(id)
      .then((data) => {
        setCandidate(data);
        setStatus("ready");
      })
      .catch((err) => {
        if (err?.response?.status === 404) {
          setStatus("not-found");
        } else {
          console.error("failed to load candidate:", err);
          setStatus("error");
        }
      });
  }, [id]);

  if (status === "loading") {
    return (
      <div className="details-conatiner">
        <div className="back-btn">
          <BackButton label="Back to Candidates" onClick={() => navigate(-1)} />
        </div>
        <p className="description">Loading...</p>
      </div>
    );
  }

  if (status === "error" || status === "not-found" || !candidate) {
    return (
      <div className="details-conatiner">
        <div className="back-btn">
          <BackButton label="Back to Candidates" onClick={() => navigate(-1)} />
        </div>
        <p className="description">
          {status === "error"
            ? "Something went wrong."
            : "Candidate not found."}
        </p>
      </div>
    );
  }

  const summary = getCandidateSummary(candidate);
  const academicProfile = getCandidateAcademicProfile(candidate);
  const evaluationSummary = getCandidateEvaluationSummary(candidate);
  const { profile } = candidate;

  return (
    <div className="details-conatiner card-info-left-aligned">
      <div className="back-btn">
        <BackButton label="Back to Candidates" onClick={() => navigate(-1)} />
      </div>

      <section className="candidate-summary" aria-label={summary.name}>
        <CardInfo title={summary.name}>
          <div className="candidate-info">
            <span>{summary.email}</span>
            <span className="candidate-info__separator">·</span>
            <span>{summary.phone}</span>
            <span className="candidate-info__separator" aria-hidden="true">
              ·
            </span>
            <span>{summary.trackPreference}</span>
          </div>

          <div className="candidate-status" aria-label="Candidate status">
            {summary.statusBadge}
            {summary.videoStatusBadge}
            {summary.recommendationBadge}
          </div>
        </CardInfo>
      </section>

      <div className="details-main-container">
        <div className="left-container">
          <section aria-label="Academic Profile">
            <CardInfo title="Academic Profile">
              <div className="field-row">
                <p className="description">
                  University: {academicProfile.university}
                </p>
              </div>
              <div className="field-row">
                <p className="description">Major: {academicProfile.major}</p>
              </div>
              <div className="field-row">
                <p className="description">GPA: {academicProfile.gpa}</p>
              </div>
              <div className="field-row">
                <p className="description">
                  Graduation Year: {academicProfile.graduationYear}
                </p>
              </div>
            </CardInfo>
          </section>

          <section aria-label="Skills">
            <CardInfo title="Skills">
              <div className="skills-badges">
                {profile?.skills.length ? (
                  renderSkillBadges(profile.skills)
                ) : (
                  <p className="description">-</p>
                )}
              </div>
            </CardInfo>
          </section>

          <section aria-label="Languages">
            <CardInfo title="Languages">
              <p className="description">
                {profile?.languages.length ? profile.languages.join(", ") : "-"}
              </p>
            </CardInfo>
          </section>

          <section aria-label="Projects">
            <CardInfo title="Projects">
              {profile?.projects.length ? (
                <ul className="candidate-list">
                  {profile.projects.map((project) => (
                    <li key={project}>
                      <p className="description">{project}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="description">-</p>
              )}
            </CardInfo>
          </section>

          <section aria-label="Experience">
            <CardInfo title="Experience">
              {profile?.experience.length ? (
                <ul className="candidate-list">
                  {profile.experience.map((exp) => (
                    <li key={exp}>
                      <p className="description">{exp}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="description">-</p>
              )}
            </CardInfo>
          </section>

          <section aria-label="Certifications">
            <CardInfo title="Certifications">
              {profile?.certifications.length ? (
                <ul className="candidate-list">
                  {profile.certifications.map((cert) => (
                    <li key={cert}>
                      <p className="description">{cert}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="description">-</p>
              )}
            </CardInfo>
          </section>

          <section aria-label="Extracurricular">
            <CardInfo title="Extracurricular">
              {profile?.extracurriculars.length ? (
                <ul className="candidate-list">
                  {profile.extracurriculars.map((activity) => (
                    <li key={activity}>
                      <p className="description">{activity}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="description">-</p>
              )}
            </CardInfo>
          </section>

          {evaluationSummary && (
            <section aria-label="AI Evaluation Report">
              <CardInfo title="AI Evaluation Report">
                <p className="description">{evaluationSummary.reportText}</p>
              </CardInfo>
            </section>
          )}
        </div>

        {evaluationSummary && (
          <section className="right-container" aria-label="Candidate Scores">
            <CardInfo title="Score Overview" icon={<img src={barChartIcon} />}>
              {evaluationSummary.score}
              <p>{evaluationSummary.selectionReason}</p>
              <p>
                <strong>Video fluency:</strong>{" "}
                {evaluationSummary.videoFluencyScore}
              </p>
              <p>
                <strong>Video presentation:</strong>{" "}
                {evaluationSummary.videoPresentationScore}
              </p>
            </CardInfo>

            <CardInfo title="Score Breakdown" icon={<img src={barChartIcon} />}>
              <div className="table-wrapper">
                <Table
                  columns={["Dimension", "Score", "Weight", "Contribution"]}
                  data={evaluationSummary.scoreBreakdown}
                />
              </div>
            </CardInfo>

            <CardInfo title="Video Assessment" icon={<img src={videoIcon} />}>
              <BarTitle
                label={`Fluency: ${evaluationSummary.videoFluencyScore} / 100`}
                percentage={evaluationSummary.videoFluencyScore}
              />
              <BarTitle
                label={`Presentation: ${evaluationSummary.videoPresentationScore} / 100`}
                percentage={evaluationSummary.videoPresentationScore}
              />
            </CardInfo>

            <CardInfo title="Strengths" icon={<img src={strengthsIcon} />}>
              <ul className="projects-list">
                {evaluationSummary.strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </CardInfo>

            <CardInfo title="Weaknesses" icon={<img src={weaknessesIcon} />}>
              <ul className="projects-list">
                {evaluationSummary.weaknesses.map((weakness) => (
                  <li key={weakness}>{weakness}</li>
                ))}
              </ul>
            </CardInfo>

            <CardInfo title="Risk Notes" icon={<img src={riskIcon} />}>
              <ul className="projects-list">
                {evaluationSummary.riskNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </CardInfo>
          </section>
        )}
      </div>
    </div>
  );
};

export default CandidateDetails;
