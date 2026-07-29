import "./candidates.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle";
import Table from "../../UI/Molecules/Table/Table";
import { candidateColumns, candidateData } from "./mockData";
import { mapCandidatesToRows } from "./candidatesService";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import Title from "../../UI/Atoms/Title/Title";
import DropdownMenu from "../../UI/Atoms/DropdownMenu/DropdownMenu";
import InputField from "../../UI/Atoms/InputField/InputField";
import Badge from "../../UI/Atoms/Badge/Badge";
import { useState } from "react";

const Candidates = () => {
  const rows = mapCandidatesToRows(candidateData);

  const [searchValue, setSearchValue] = useState("");
  const [selectedInternship, setSelectedInternship] = useState("");

  const getCardTitle = () => {
    if (!selectedInternship) {
      return null;
    }
    return (
      <div className="candidates-header">
        <div className="candidates-header-title">
          <Title type="medium" variant="primary">
            {selectedInternship}
          </Title>
          <Badge type="evaluated" text={rows.length + " candidates"} />
        </div>

        <div className="candidates-actions">
          <div className="">
            {
              <InputField
                placeholder="Search candidates..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            }
          </div>
          <div className="">
            {
              <DropdownMenu
                size="large"
                options={[
                  "All Statuses",
                  "Nominated",
                  "Evaluated",
                  "Rejected",
                  "Processing",
                  "Imported",
                ]}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            }
          </div>
        </div>
      </div>
    );
  };
  return (
    <DefaultTemplate>
      <div className="candidates">
        <InfoTitle
          label="Candidates"
          value="Select an internship to review its applicants"
        />
        <div className="label-dropdown">
          <Title type="small" variant="primary">
            Internship
          </Title>
          <DropdownMenu
            size="large"
            options={[
              "Software Engineering Summer Internship 2026",
              "Data Science Internship 2026",
              "Cloud & DevOps Internship 2026",
            ]}
            onChange={(value) => {
              setSelectedInternship(value);
            }}
          />
        </div>
        <CardInfo title={getCardTitle()} isTable>
          <div className="candidates-table">
            <Table
              columns={candidateColumns}
              data={selectedInternship ? rows : []}
            />
          </div>
        </CardInfo>
      </div>
    </DefaultTemplate>
  );
};

export default Candidates;
