import "./candidates.css";
import DefaultTemplate from "../../UI/DefaultTemplates/DefaultTemplate";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle";
import Table from "../../UI/Molecules/Table/Table";
import { candidateColumns, candidateData } from "./mockData";
import { mapCandidatesToRows } from "./candidatesService";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";

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
      <CardInfo title="Candidates" isTable>
        <div className="candidates-table">
          <Table columns={candidateColumns} data={rows} />
        </div>
      </CardInfo>
    </DefaultTemplate>
  );
};

export default Candidates;
