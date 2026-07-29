import "./TableHeader.css";
type TableHeaderProps = {
  columns: string[];
};

export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="table-header">
      {columns.map((column) => (
        <th className="table-header-cell" key={column}>
          {column}
        </th>
      ))}
    </thead>
  );
}
