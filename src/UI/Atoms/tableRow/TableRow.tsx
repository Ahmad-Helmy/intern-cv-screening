import type { ReactNode } from "react";
import { TableData } from "../../Atoms/tableData/TableData";
import "./TableRow.css";

type RecordData = Record<string, ReactNode>;

type TableRowProps = {
  data: RecordData;
};

export function TableRow({ data }: TableRowProps) {
  return (
    <tr className="table-row">
      {Object.entries(data).map(([key, value]) => (
        <TableData key={key}>{value}</TableData>
      ))}
    </tr>
  );
}
