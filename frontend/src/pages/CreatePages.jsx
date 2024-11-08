import React, { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePages = () => {

const [newProduct, setNewProduct] = useState({
  name:"",
  price:"",
  image:""
})

const {createProduct} = useProductStore()

const handleAddProduct = async() =>{
  const {success,message} = await createProduct(newProduct);

  setNewProduct({name:"", price:"", image:""});
  console.log("Success:", success);
  console.log("Message:", message);
}

  return (
    <div className="text-black dark:text-white">
      <div className="grid place-items-center">
        <h1 className="text-2xl text-center mb-8">Create New Product</h1>
        <div className="rounded-lg shadow-md p-6 grid place-items-center dark:text-white dark:bg-[#1c2434] w-[700px] space-y-5">
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="dark:bg-gray-400"
          />

          <input
            type="number"
            placeholder="Product Price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="dark:bg-gray-400"
          />

          <input
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="dark:bg-gray-400"
          />

          <button onClick={handleAddProduct}
          className="bg-slate-400 rounded-lg px-3"
          >Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePages;
