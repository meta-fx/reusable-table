import { useState } from "react";

// Custom Hook
export const useProducts = (initialProducts) => {
  const [products, setProducts] = useState(initialProducts);

  const columns = [
    { label: "Product ID", key: "id" },
    { label: "Product Name", key: "name" },
    { label: "Category", key: "category" },
    { label: "Price", key: "price" },
    { label: "Stock", key: "stock" },
    { label: "Rating", key: "rating" },
  ];

  const handleAdd = () => {
    // Implement adding a new row, perhaps showing a modal form
  };

  const handleEdit = (row) => {
    // Implement editing the row, perhaps showing a modal form pre-filled with row data
  };

  const handleDelete = (row) => {
    setProducts(products.filter((product) => product.id !== row.id));
  };

  return {
    products,
    columns,
    handleAdd,
    handleEdit,
    handleDelete,
  };
};
