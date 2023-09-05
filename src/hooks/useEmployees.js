import { useState } from "react";

// Custom Hook
export const useEmployees = (initialEmployees) => {
  const [employees, setEmployees] = useState(initialEmployees);

  const columns = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Age", key: "age" },
    { label: "Department", key: "department" },
    { label: "Position", key: "position" },
    { label: "Email", key: "email" },
    { label: "Salary", key: "salary" },
  ];

  const handleAdd = () => {
    // Implement adding a new row, perhaps showing a modal form
  };

  const handleEdit = (row) => {
    // Implement editing the row, perhaps showing a modal form pre-filled with row data
  };

  const handleDelete = (row) => {
    setEmployees(employees.filter((employee) => employee.id !== row.id));
  };

  return {
    employees,
    columns,
    handleAdd,
    handleEdit,
    handleDelete,
  };
};
