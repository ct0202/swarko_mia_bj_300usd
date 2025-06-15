import React from "react";
import {useAdminProducts} from "../hooks/queries/products/useAdminProducts";
import {useCreateProduct} from "../hooks/queries/products/useCreateProduct";
import {useDeleteProduct} from "../hooks/queries/products/useDeleteProduct";

const HooksTest = () => {
  const { data, isLoading, error, refetch } = useAdminProducts();
  const createProduct = useCreateProduct();
  const deleteProduct = useDeleteProduct();

  const handleCreate = () => {
    createProduct.mutate({
      name: "Test Product",
      description: "Just testing",
      link: "https://example.com",
      category: "Test",
    });
  };

  const handleDelete = (id) => {
    deleteProduct.mutate(id);
  };

  return (
    <div>
      <h2>Admin Product Hook Test</h2>

      <button onClick={handleCreate}>Create Product</button>
      <button onClick={refetch}>Refetch Products</button>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {data?.data?.map((p) => (
            <li key={p._id}>
              {p.name}
              <button onClick={() => handleDelete(p._id)}>❌ Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HooksTest;
