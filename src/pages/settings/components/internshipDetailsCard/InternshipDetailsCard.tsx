import "./InternshipDetailsCard.css";
import CardInfo from "../../../../UI/Molecules/CardInfo/CardInfo";
import InputField from "../../../../UI/Atoms/InputField/InputField";
import Title from "../../../../UI/Atoms/Title/Title";
import DropdownMenu from "../../../../UI/Atoms/DropdownMenu/DropdownMenu";
import Button from "../../../../UI/Atoms/Buttons/Button";
import BriefCaseIcon from "../../../../assets/icons/briefcase.svg";
import SaveIcon from "../../../../assets/icons/save.svg";
import DeleteIcon from "../../../../assets/icons/trash.svg";

export default function InternshipDetailsCard() {
  return (
    <CardInfo
      title="Internship details"
      icon={<img src={BriefCaseIcon} alt="Internship" />}
    >
      <div className="internship-details">
        <InputField
          name="TITLE"
          value="EDC Software Engineering Internship 2026"
        />

        <div className="internship-row">
          <InputField name="YEAR" value="2026" />

          <InputField name="DURATION (WEEKS)" value="8" />

          <div className="status-field">
            <p className="label">Status</p>
            <DropdownMenu
              size="large"
              options={["Open", "Closed", "Draft"]}
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>

        <InputField name="EXTERNAL JOB ID" value="EDC-TEST-JOB-001" />

        <div className="internship-actions">
          <div className="left-actions">
            <Button
              text="Save changes"
              icon={<img src={SaveIcon} alt="" />}
              onClick={() => console.log("Save")}
            />

            <Button
              text="Cancel"
              variant="secondary"
              onClick={() => console.log("Cancel")}
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
