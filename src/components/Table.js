import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

const Table = ({ title, data, columns, onAdd, onEdit, onDelete }) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key === null) return 0;
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "ascending" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  const toggleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="w-full h-full bg-black overflow-hidden">
      <div id="table-header" className="flex items-center bg-[#121212] p-4">
        <span className="w-full text-2xl font-semibold text-gray-300">
          {title}
        </span>

        <button
          onClick={onAdd}
          className="w-full text-blue-600 flex items-center justify-end "
        >
          <AiOutlinePlus size={25} className="mx-1" />
        </button>
      </div>
      <div className="overflow-auto">
        <table className="w-full h-full whitespace-nowrap">
          <thead>
            <tr className="bg-[#121212] uppercase text-sm leading-normal">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className="py-2 px-6 text-left cursor-pointer"
                  onClick={() => toggleSort(col.key)}
                >
                  <div className="flex items-center">
                    {col.label}
                    {sortConfig.key === col.key ? (
                      sortConfig.direction === "ascending" ? (
                        <PiCaretUpBold className="inline ml-2" />
                      ) : (
                        <PiCaretDownBold className="inline ml-2" />
                      )
                    ) : null}
                  </div>
                </th>
              ))}
              <th className="text-left"></th>
            </tr>
          </thead>
          <tbody className="text-gray-300 text-sm font-light">
            {sortedData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-600 hover:bg-[#121212]"
              >
                {columns.map((col, subIndex) => (
                  <td key={subIndex} className="py-2 px-6 text-left">
                    {row[col.key]}
                  </td>
                ))}
                <td className="flex items-center justify-end w-max h-full space-x-2">
                  <button
                    onClick={() => onEdit(row)}
                    className="text-blue-500 uppercase text-xs font-semibold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(row)}
                    className="text-red-500 uppercase text-xs font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
