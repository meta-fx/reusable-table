import Layout from "@/components/Layout";
import { employeeData } from "@/data/employeeData";
import { useEmployees } from "@/hooks/useEmployees";
import Table from "@/components/Table";

export default function Employees({ initialEmployees }) {
  const { employees, columns, handleAdd, handleEdit, handleDelete } =
    useEmployees(initialEmployees);

  return (
    <Layout>
      <div className="h-full">
        <Table
          title="Employees"
          data={employees}
          columns={columns}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: { initialEmployees: employeeData },
  };
}
