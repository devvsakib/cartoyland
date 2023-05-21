import React, { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import API from '../lib/API';
import { AuthContext } from '../contexts/AuthProvider';
import Layout from '../components/Layout';
const AddToy = () => {
  const { user } = useContext(AuthContext);
  const initialValues = {
    pictureUrl: '',
    name: '',
    sellerName: user?.displayName || '',
    sellerEmail: user?.email || '',
    subcategory: '',
    price: '',
    rating: '',
    availableQuantity: '',
    detailDescription: '',
  };

  const [formValues, setFormValues] = useState(initialValues);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);


    const toyData = {
      ...formValues,
      sellerName: formValues.sellerName || user?.displayName || '',
      sellerEmail: formValues.sellerEmail || user?.email || '',
    };

    if (!toyData.pictureUrl) {
      toast.error('Picture URL is required');
      return;
    }

    if (!toyData.name) {
      toast.error('Name is required');
      return;
    }

    if (!toyData.sellerName) {
      toast.error('Seller name is required');
      return;
    }

    if (!toyData.sellerEmail) {
      toast.error('Seller email is required');
      return;
    }

    if (!toyData.subcategory) {
      toast.error('Sub-category is required');
      return;
    }

    if (!toyData.price) {
      toast.error('Price is required');
      return;
    }
    toyData.price = Number(toyData.price);

    if (!toyData.rating) {
      toast.error('Rating is required');
      return;
    }

    if (!toyData){}

    if (!toyData.availableQuantity) {
      toast.error('Available quantity is required');
      return;
    }

    if (!toyData.detailDescription) {
      toast.error('Detail description is required');
      return;
    }
    try {
      const response = await API.addToy(toyData);
      console.log(response);
  
      toast.success('Toy added successfully!');
      setFormValues(initialValues); // Reset the form values
      e.target.reset(); // Reset the form fields
    } catch (error) {
      console.error('Error adding toy:', error);
      toast.error('Failed to add toy. Please try again.');
    }
    };


  return (
    <div className='my-12'>
      <Layout>
        <div>
          <h1 className="text-center text-3xl font-semibold text-secondary">Add A Toy</h1>
        </div>
        <form className='w-1/2 mx-auto grid gap-4' onSubmit={handleFormSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL of the toy</span>
            </label>
            <label className="input-group">
              <input defaultValue={formValues.pictureUrl} type="text" name="pictureUrl" placeholder="Enter picture URL" className="input rounded-lg shadow-lg w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <label className="input-group">
              <input defaultValue={formValues.name} type="text" name="name" placeholder="Enter name" className="input rounded-lg shadow-lg w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller name</span>
            </label>
            <label className="input-group">
              <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="Enter seller name" className="input rounded-lg shadow-lg w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller email</span>
            </label>
            <label className="input-group">
              <input type="email" defaultValue={user?.email} name="sellerEmail" placeholder="Enter seller email" className="input rounded-lg shadow-lg w-full" />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub-category</span>
            </label>
            <label className="label">
              <select name="subcategory" className="select select-bordered rounded-lg w-full">
                <option value="">Select sub-category</option>
                <option value="Cars">Cars</option>
                <option value="Trucks">Trucks</option>
                <option value="Mini Trucks">Mini Trucks</option>
                <option value="Police Cars">Police Cars</option>
              </select>
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input defaultValue={formValues.price} type="text" name="price" placeholder="Enter price" className="input rounded-lg shadow-lg w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input defaultValue={formValues.rating} type="text" max={"5.0"} min={"1.0"} name="rating" placeholder="Enter rating" className="input rounded-lg shadow-lg w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Available quantity</span>
            </label>
            <label className="input-group">
              <input defaultValue={formValues.availableQuantity} type="number" name="availableQuantity" placeholder="Enter available quantity" className="input rounded-lg shadow-lg w-full" />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <label className="label">
              <textarea name="detailDescription" defaultValue={formValues.detailDescription} placeholder="Enter detail description" className="textarea textarea-bordered rounded-lg w-full" />
            </label>
          </div>
          <div className="mt-5 form-control">
            <button type='submit' className='btns'>Add Toy</button>
          </div>
        </form>
      </Layout>
    </div >
  )
}

export default AddToy