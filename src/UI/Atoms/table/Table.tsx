import { TableData } from "../tableData/TableData";
import { TableHeader } from "../tableHeader/TableHeader";
import { TableRow } from "../tableRow/TableRow";
import "./Table.css";


type Candidate = {
  id: number;
  name: string;
  email: string;
};

const candidates: Candidate[] = [
  {
    id: 1,
    name: "Ahmed",
    email: "ahmed@test.com",
  },
  {
    id: 2,
    name: "Abdalla",
    email: "abdalla@test.com",
  },
  {
    id: 3,
    name: "Mazin",
    email: "mazin@test.com"
  },
];

export function CandidateTable() {
  return (
    <table className="candidate-table">
      <TableHeader columns={["Name", "Email"]} />

      <tbody>
        {candidates.map((candidate) => (
          <TableRow key={candidate.id}>
            <TableData>{candidate.name}</TableData>
            <TableData>{candidate.email}</TableData>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}