import React from "react";
import "./candidates.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle";
import Table from "../../UI/Molecules/Table/Table";
import { candidateColumns, candidateData } from "./mockData";
import { mapCandidatesToRows } from "./candidatesService";
import Card from "../../UI/Atoms/Card/Card";

const Candidates = () => {
  const rows = mapCandidatesToRows(candidateData);

  return (
    <DefaultTemplate>
      <div className="candidates">
        <InfoTitle
          label="Candidates"
          value="Select an internship to review its applicants"
        />
      </div>
      <Card table>
        <Table columns={candidateColumns} data={rows} />
      </Card>
    </DefaultTemplate>
  );
};

export default Candidates;
