import "./candidates.css";
import InfoTitle from "../../UI/Molecules/InfoTitle/InfoTitle";
import Table from "../../UI/Molecules/Table/Table";
import { candidateColumns, candidateData } from "./mockData";
import { mapCandidatesToRows } from "./candidatesService";
import CardInfo from "../../UI/Molecules/CardInfo/CardInfo";
import Title from "../../UI/Atoms/Title/Title";
import DropdownMenu from "../../UI/Atoms/DropdownMenu/DropdownMenu";
import InputField from "../../UI/Atoms/InputField/InputField";
import Badge from "../../UI/Atoms/Badge/Badge";
import { useNavigate, useSearchParams } from "react-router";

const Candidates = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get("search") || "";
  const selectedInternship = searchParams.get("internship") || "";
  const selectedStatus = searchParams.get("status") || "";

  const rows = mapCandidatesToRows(
    candidateData,
    {
      search: searchValue,
      internship: selectedInternship,
      status: selectedStatus,
    },
    (id: string) => navigate(`/candidates/${id}`),
  );
  const setParam = (key: string, value: string) =>
    setSearchParams((prev) => {
      if (value) {
        prev.set(key, value);
      } else {
        prev.delete(key);
      }
      return prev;
    });

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
                onChange={(e) => setParam("search", e.target.value)}
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
                onChange={(value) => setParam("status", value)}
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
          options={[
            {
              id: "Software Engineering Summer Internship 2026",
              label: "Software Engineering Summer Internship 2026",
            },
            {
              id: "Data Science Internship 2026",
              label: "Data Science Internship 2026",
            },
            {
              id: "Cloud & DevOps Internship 2026",
              label: "Cloud & DevOps Internship 2026",
            },
          ]}
          selectedOption={selectedInternship}
          onChange={(value) => {
            setParam("internship", value);
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
  );
};

export default Candidates;
