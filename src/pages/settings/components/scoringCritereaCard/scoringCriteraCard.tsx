import "./scoringCriteraCard.css";
import CardInfo from "../../../../UI/Molecules/CardInfo/CardInfo";
import InputField from "../../../../UI/Atoms/InputField/InputField";
import Button from "../../../../UI/Atoms/Buttons/Button";
import CheckListIcon from "../../../../assets/icons/list-checks.svg";
import SaveIcon from "../../../../assets/icons/save.svg";
import DeleteIcon from "../../../../assets/icons/trash.svg";
import Badge from "../../../../UI/Atoms/Badge/Badge";

export default function ScoringCriteriaCard() {
  const weights = {
    majorMatch: 15,
    technicalSkills: 25,
    projects: 20,
    experience: 10,
    academicPerf: 15,
    extracurriculars: 5,
    communication: 10,
  };

  const weightSum = Object.values(weights).reduce((sum, val) => sum + val, 0);

  return (
    <CardInfo
      title="Scoring Criteria"
      icon={<img src={CheckListIcon} alt="Scoring Criteria" />}
    >
      <div className="scoring-criteria">
        <div className="name-row">
          <InputField name="NAME" value="Software Engineering 2026 Criteria" />

          <div className="status-field">
            <p className="label">&nbsp;</p>
          </div>
        </div>

        <div className="scoring-criteria-section">
          <div className="section-header">
            <p className="label">WEIGHTS</p>
            <Badge text={"Σ = {weightSum} / 100"} type="nominated" />
          </div>

          <div className="weights-row">
            <InputField name="MAJOR MATCH" value="" />
            <InputField name="TECHNICAL SKILLS" value="" />
            <InputField name="PROJECTS" value="" />
            <InputField name="EXPERIENCE" value="" />
            <InputField name="ACADEMIC PERF." value="" />
            <InputField name="EXTRACURRICULARS" value="" />
            <InputField name="COMMUNICATION" value="" />
          </div>
        </div>

        <div className="scoring-criteria-section">
          <p className="label">ELIGIBILITY THRESHOLDS</p>

          <div className="thresholds-row">
            <InputField name="MINIMUM GPA" value="3.0" />
            <InputField name="MIN GRAD. YEAR" value="2026" />
            <InputField name="MAX GRAD. YEAR" value="2028" />
          </div>
        </div>

        <div className="scoring-criteria-section">
          <p className="label">VIDEO GATE &amp; NOMINATION</p>

          <div className="video-gate-row">
            <InputField name="MIN FLUENCY SCORE" value="70" />
            <InputField name="MIN PRESENTATION SCORE" value="65" />
            <InputField name="NOMINATION COUNT" value="40" />
          </div>
        </div>

        <div className="internship-actions">
          <div className="left-actions">
            <Button
              text="Save changes"
              icon={<img src={SaveIcon} alt="" />}
              onClick={() => console.log("Save")}
            />
          </div>

          <Button
            text="Delete"
            variant="danger"
            icon={<img src={DeleteIcon} alt="" />}
            onClick={() => console.log("Delete")}
          />
        </div>
      </div>
    </CardInfo>
  );
}
