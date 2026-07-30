import CardInfo from "../../Molecules/CardInfo/CardInfo";
import InputField from "../../Atoms/InputField/InputField";
import DropdownMenu from "../../Atoms/DropdownMenu/DropdownMenu";
import Button from "../../Atoms/Buttons/Button";
import "./InternshipDetailsCard.css";
import BriefCaseIcon from "../../../assets/icons/briefcase.svg";
import SaveIcon from "../../../assets/icons/save.svg";
import DeleteIcon from "../../../assets/icons/trash.svg";

export default function InternshipDetails() {
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
            <DropdownMenu
              label="STATUS"
              size="medium"
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
