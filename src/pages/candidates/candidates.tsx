import "./candidates.css";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle";
import Table from "../../UI/Molecules/Table/Table";
import { candidateColumns } from "./mockData";
import { mapCandidatesToRows } from "./candidatesService";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import Title from "../../UI/Atoms/Title/Title";
import DropdownMenu from "../../UI/Atoms/DropdownMenu/DropdownMenu";
import InputField from "../../UI/Atoms/InputField/InputField";
import Badge from "../../UI/Atoms/Badge/Badge";
import { useNavigate, useSearchParams } from "react-router";
import { getCandidates } from "../../services/candidates";
import { getInternships } from "../../services/internships";
import { useEffect, useState } from "react";
import type {
  CandidateStatus,
  CandidateListItem,
} from "../../types/api/candidates";
import type { InternshipListItem } from "../../types/api/internships";

const Candidates = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<
    CandidateStatus | undefined
  >(undefined);
  const [selectedInternship, setSelectedInternship] = useState("");
  const [internships, setInternships] = useState<InternshipListItem[]>([]);
  const [candidates, setCandidates] = useState<CandidateListItem[]>([]);

  useEffect(() => {
    async function initializeInternships() {
      const data = await getInternships();
      console.log(data);

      setInternships(data);
    }
    initializeInternships();
  }, []);

  const handleGetCandidates = async ({
    id,
    search,
    status,
  }: {
    id?: string;
    search?: string;
    status?: CandidateStatus;
  }) => {
    const data = await getCandidates(id || selectedInternship, {
      search: search || searchValue,
      status: status || selectedStatus,
    });
    setCandidates(data);
  };

  const getCardTitle = () => {
    if (!selectedInternship) {
      return null;
    }
    return (
      <div className="candidates-header">
        <div className="candidates-header-title">
          <Title type="medium" variant="primary">
            {internships.find((i) => i.id === selectedInternship)?.name}
          </Title>
          <Badge type="evaluated" text={candidates.length + " candidates"} />
        </div>

        <div className="candidates-actions">
          <div className="">
            {
              <InputField
                placeholder="Search candidates..."
                value={searchValue}
                onChange={(e) => {
                  handleGetCandidates({ search: e.target.value });
                  setSearchValue(e.target.value);
                }}
              />
            }
          </div>
          <div className="">
            {
              <DropdownMenu
                size="small"
                options={[
                  {
                    id: "All Statuses",
                    label: "All Statuses",
                  },
                  { id: "Nominated", label: "Nominated" },
                  { id: "Evaluated", label: "Evaluated" },
                  { id: "Rejected", label: "Rejected" },
                  { id: "Processing", label: "Processing" },
                  { id: "Imported", label: "Imported" },
                ]}
                selectedOption={selectedStatus}
                onChange={(value) => {
                  setSelectedStatus(value as CandidateStatus);
                  handleGetCandidates({ status: value as CandidateStatus });
                }}
              />
            }
          </div>
        </div>
      </div>
    );
  };
  return (
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
          options={internships.map((internship) => ({
            id: internship.id,
            label: internship.name,
          }))}
          selectedOption={selectedInternship}
          onChange={(value) => {
            setSelectedInternship(value);
            handleGetCandidates({ id: value });
          }}
        />
      </div>
      <CardInfo title={getCardTitle()} isTable>
        <div className="candidates-table">
          <Table
            columns={candidateColumns}
            data={
              selectedInternship
                ? mapCandidatesToRows(candidates, (id) =>
                    navigate(`/candidates/${id}`),
                  )
                : []
            }
          />
        </div>
      </CardInfo>
    </div>
  );
};

export default Candidates;
