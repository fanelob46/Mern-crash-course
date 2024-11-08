import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "../store/product";

const ProductsCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    console.log("Delete Success:", success, "Message:", message);
  };

  const handleUpdateProduct = async () => {
    const { success, message } = await updateProduct(
      product._id,
      updatedProduct
    );
    console.log("Update Success:", success, "Message:", message);
    setIsModalOpen(false); // Close modal on success
  };

  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={product.image}
        alt="Product"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {product.name}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          ${product.price}
        </p>
      </div>
      <div className="flex px-5 space-x-2 py-4">
        <FaRegEdit
          onClick={() => setIsModalOpen(true)}
          className="text-2xl text-blue-400 cursor-pointer"
        />
        <MdDelete
          onClick={() => handleDeleteProduct(product._id)}
          className="text-red-800 text-2xl cursor-pointer"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 w-80 dark:text-black">
            <h2 className="text-xl font-semibold mb-4 text-white">Edit Product</h2>
            <input
              type="text"
              placeholder="Product name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
              className="border p-2 mb-4 w-full rounded"
            />
            <input
              type="number"
              placeholder="Product Price"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
              className="border p-2 mb-4 w-full rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
              className="border p-2 mb-4 w-full rounded"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateProduct}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsCard;
