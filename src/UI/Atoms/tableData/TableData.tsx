import type { ReactNode } from "react";
import "./TableData.css";

type TableDataProps = {
  children: ReactNode;
};

export function TableData({children}: TableDataProps) {
  return (
    <td className="table-data">
      {children}
    </td>
  );
}