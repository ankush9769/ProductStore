import React from 'react';
import './AddProduct.css';
import { useState } from 'react';

const AddProduct = () => {
  const [newproducts, setNewProducts] = useState({
    name: "",
    price: "",
    image: ""
  });
  const handleAddProduct = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log(newproducts); //now this newproducts , if we want to add this product in the database , then we have to store it into globel variable by using the zustand
  };
  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center" ,height: "80vh"}}>
      <div className="container" >
        <div className="heading">Add Product</div>
        <form action="" className="form" onSubmit={handleAddProduct}>
          <input 
            required 
            className="input" 
            type="text" 
            name="name"
            value={newproducts.name}
            onChange={(e) => setNewProducts({ ...newproducts, name: e.target.value })}
            placeholder="Name" 
          />
          <input 
            required 
            className="input" 
            type="number" 
            name="price" 
            value={newproducts.price}
            onChange={(e) => setNewProducts({ ...newproducts, price: e.target.value })}
            placeholder="Price" 
          />
          <input 
            required 
            className="input" 
            type="text" 
            name="img" 
            value={newproducts.image}
            onChange={(e) => setNewProducts({ ...newproducts, image: e.target.value })}
            placeholder="Image url" 
          />
          <input 
            className="add-button" 
            type="submit" 
            value="Add Product" 
          />
        </form>
      </div>

      </div>
      
    </>
  );
}

export default AddProduct;