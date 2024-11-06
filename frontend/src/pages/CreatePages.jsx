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
      <div>
        <h1 className="text-2xl text-center mb-8">Create New Product</h1>
        <div className="w-full rounded-lg shadow-md p-6 grid place-items-center">
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Product Price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />

          <input
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />

          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePages;
