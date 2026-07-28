import "./TableHeader.css";

type TableHeaderProps = {
  columns: string[];
};

export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className="table-header">
      <tr>
        {columns.map((column) => {
          return <th key={column}>{column}</th>;
        })}
      </tr>
    </thead>
  );
}   