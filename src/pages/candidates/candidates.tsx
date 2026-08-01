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
import { useMemo } from "react";
import { useSearchParams } from "react-router";

const ALL_STATUSES = "All Statuses";

const internships = [
  "Software Engineering Summer Internship 2026",
  "Data Science Internship 2026",
  "Cloud & DevOps Internship 2026",
];

const statuses = [
  ALL_STATUSES,
  "Nominated",
  "Evaluated",
  "Rejected",
  "Processing",
  "Imported",
];

const Candidates = () => {
  // the filters live in the URL: they survive a refresh, work with the back
  // button, and the page can be shared as a link
  const [searchParams, setSearchParams] = useSearchParams();

  const internship = searchParams.get("internship") ?? "";
  const status = searchParams.get("status") ?? ALL_STATUSES;
  const search = searchParams.get("q") ?? "";

  const setParam = (key: string, value: string, replace = false) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set(key, value);
        } else {
          next.delete(key);
        }
        return next;
      },
      { replace },
    );
  };

  const filtered = useMemo(() => {
    if (!internship) return [];
    const query = search.trim().toLowerCase();
    return candidateData.filter((candidate) => {
      const matchesStatus =
        status === ALL_STATUSES || candidate.Status === status;
      const matchesQuery =
        !query ||
        (candidate.Candidate ?? "").toLowerCase().includes(query) ||
        (candidate.Email ?? "").toLowerCase().includes(query);
      return matchesStatus && matchesQuery;
    });
  }, [internship, status, search]);

  // without the memo this rebuilds a Badge, a ColoredNumber and an InfoTitle
  // for every row on every keystroke in the search box
  const rows = useMemo(() => mapCandidatesToRows(filtered), [filtered]);

  const getCardTitle = () => {
    if (!internship) {
      return null;
    }
    return (
      <div className="candidates-header">
        <div className="candidates-header-title">
          <Title type="medium" variant="primary">
            {internship}
          </Title>
          <Badge type="evaluated" text={rows.length + " candidates"} />
        </div>

        <div className="candidates-actions">
          <div className="">
            <InputField
              placeholder="Search candidates..."
              value={search}
              // replace, so typing does not leave one history entry per letter
              onChange={(e) => setParam("q", e.target.value, true)}
            />
          </div>
          <div className="">
            <DropdownMenu
              size="large"
              value={status}
              options={statuses}
              onChange={(value) => setParam("status", value)}
            />
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
          value={internship}
          options={internships}
          onChange={(value) => setParam("internship", value)}
        />
      </div>
      <CardInfo title={getCardTitle()} isTable>
        <div className="candidates-table">
          <Table columns={candidateColumns} data={rows} />
        </div>
      </CardInfo>
    </div>
  );
};

export default Candidates;
