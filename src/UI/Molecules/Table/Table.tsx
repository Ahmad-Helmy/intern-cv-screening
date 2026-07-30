import type { ReactNode } from "react";
import { TableHeader } from "../../Atoms/tableHeader/TableHeader";
import { TableRow } from "../../Atoms/tableRow/TableRow";
import "./Table.css";

type RecordData = Record<string, ReactNode>;

type TableProps = {
  data: RecordData[];
  columns: string[];
};

const Table = ({ columns, data }: TableProps) => {
  if (!data || data.length === 0) {
    return (
      <table className="table">
        <TableHeader columns={columns} />
      </table>
    );
  }

  return (
    <table className="table">
      <TableHeader columns={columns} />
      <tbody>
        {data.map((rowData, index) => (
          <TableRow key={index} data={rowData} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
