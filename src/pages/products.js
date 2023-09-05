import Layout from "@/components/Layout";
import { productData } from "@/data/productData";
import { useProducts } from "@/hooks/useProducts";
import Table from "@/components/Table";

export default function Products({ initialProducts }) {
  const { products, columns, handleAdd, handleEdit, handleDelete } =
    useProducts(initialProducts);

  return (
    <Layout>
      <div className="h-full">
        <Table
          title="Products"
          data={products}
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
    props: { initialProducts: productData },
  };
}
