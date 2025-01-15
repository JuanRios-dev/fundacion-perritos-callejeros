import React from 'react';
import * as Icons from 'lucide-react'; // Importa todos los iconos como un objeto

interface TableProps {
  columns: { title: string; dataIndex: string }[];
  data: any[];
  actions?: { icon: string; onClick: (row: any) => void }[];
}

const Table: React.FC<TableProps> = ({ columns, data, actions }) => {
  return (
    <div className="overflow-x-auto shadow-lg rounded-lg">
      <table className="table-auto w-full border-collapse bg-white text-sm text-left text-gray-600">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            {columns.map((col) => (
              <th
                key={col.dataIndex}
                className="px-4 py-2 font-medium text-gray-800 uppercase tracking-wide"
              >
                {col.title}
              </th>
            ))}
            {actions && (
              <th className="px-4 py-2 font-medium text-gray-800 uppercase tracking-wide">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition-colors border-b last:border-0"
            >
              {columns.map((col) => (
                <td key={col.dataIndex} className="px-4 py-2 text-gray-700">
                  {row[col.dataIndex]}
                </td>
              ))}
              {actions && (
                <td className="px-4 py-2 text-gray-700">
                  <div className="flex space-x-2">
                    {actions.map((action, i) => {
                      const ActionIcon = Icons[action.icon];
                      return (
                        <button
                          key={i}
                          onClick={() => action.onClick(row)}
                          className="p-2 bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                        >
                          {ActionIcon ? (
                            <ActionIcon className="w-3 h-3 text-white" />
                          ) : (
                            <span className="text-white">?</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
