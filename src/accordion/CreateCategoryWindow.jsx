import React, { useState } from 'react';

const CreateCategoryWindow = ({ onSubmit }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      name: categoryName,
      image: categoryImage,
    };
    onSubmit(newCategory);
    setCategoryName('');
    setCategoryImage('');
  };

  return (
    <div className="createCategoryWindow">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category Image URL"
          value={categoryImage}
          onChange={(e) => setCategoryImage(e.target.value)}
        />
        <button type="submit">Create Category</button>
      </form>
    </div>
  );
};

export default CreateCategoryWindow;
