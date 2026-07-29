import "./TableHeader.css";
import { TableRow } from "../tableRow/TableRow";
type TableHeaderProps = {
  columns: string[];
};

export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="table-header">
      {columns.map((column) => (
        <th key={column}>{column}</th>
      ))}
    </thead>
  );
}
