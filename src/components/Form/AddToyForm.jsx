import React, { useState } from 'react';

const AddToyForm = () => {
  const [formData, setFormData] = useState({
    pictureUrl: '',
    name: '',
    sellerName: '',
    sellerEmail: '',
    subCategory: '',
    price: '',
    rating: '',
    quantity: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to the backend
    fetch('https://toymarketplaceapi.onrender.com/addtoy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h1>Add A Toy</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pictureUrl">Picture URL of the toy:</label>
        <input
          type="text"
          id="pictureUrl"
          name="pictureUrl"
          value={formData.pictureUrl}
          onChange={handleChange}
          required
        />

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="sellerName">Seller Name:</label>
        <input
          type="text"
          id="sellerName"
          name="sellerName"
          value={formData.sellerName}
          onChange={handleChange}
        />

        <label htmlFor="sellerEmail">Seller Email:</label>
        <input
          type="email"
          id="sellerEmail"
          name="sellerEmail"
          value={formData.sellerEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="subCategory">Sub-category:</label>
        <select
          id="subCategory"
          name="subCategory"
          value={formData.subCategory}
          onChange={handleChange}
          required
        >
          <option value="">Select a sub-category</option>
          <option value="Math Toys">Math Toys</option>
          <option value="Language Toys">Language Toys</option>
          <option value="Science Toys">Science Toys</option>
        </select>

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />

        <label htmlFor="quantity">Available Quantity:</label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <label htmlFor="description">Detail Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Add Toy</button>
      </form>
    </div>
  );
};

export default AddToyForm;