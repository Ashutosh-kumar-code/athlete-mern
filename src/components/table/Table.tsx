import { Link } from "react-router-dom";

type Column<T> = {
  rowKey: keyof T | string;
  header: string;
  render?: (row: T) => void;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (row: T) => void;
};
const Table = <T extends Record<string, any>>({ columns, data, onRowClick }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th key={column.rowKey as string} className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick && onRowClick(row)}
              className={`border-b transition-all hover:bg-gray-50 ${onRowClick ? "cursor-pointer" : ""}`}
            >
              {columns.map((column) => (
                
                <td key={column.rowKey as string} className="px-4 py-2 text-gray-700">
                  
                  {column.render ? column.render(row) : row[column.rowKey as any]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Table;
