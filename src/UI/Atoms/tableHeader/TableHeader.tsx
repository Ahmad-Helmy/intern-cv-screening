import "./TableHeader.css";
import { TableRow } from "../tableRow/TableRow";
type TableHeaderProps = {
  columns: string[];
};

export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="table-header">
      <TableRow>
        {columns.map((column) => {
          return <th key={column}>{column}</th>;
        })}
      </TableRow>
    </thead>
  );
}   