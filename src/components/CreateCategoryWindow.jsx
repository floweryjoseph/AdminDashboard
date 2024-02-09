import React, { useState } from 'react';
import classes from '../modules/createCategoryWindow.module.scss'
import { useRef } from "react";
const CreateCategoryWindow = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const enteredCategoryName = useRef();
  const enteredCategoryUrl = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const catName = enteredCategoryName.current.value;
    const catUrl = enteredCategoryUrl.current.value;
    setCategoryName(catName);
    setCategoryImage(catUrl);
    const newCategory = {
      name: categoryName,
      image: categoryImage,
    };
   
    // onSubmit(newCategory);
   
   

   
    console.log(categoryName);
    console.log(categoryImage);
    console.log(newCategory);
  };

  return (
    <div className={classes.createCategoryWindow}>


      {/* onSubmit={handleSubmit} */}
      <form className={classes.formCategory} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          // value={categoryName}
          // onChange={(e) => setCategoryName(e.target.value)}
          ref={enteredCategoryName}
        />
        <input
          type="text"
          placeholder="Category Image URL"
          ref={enteredCategoryUrl}
          // value={categoryImage}
          // onChange={(e) => setCategoryImage(e.target.value)}
        />
        <button className={classes.buttonCategory} type="submit">Create Category</button>
     
      
      </form>
      {/* <h2>Category {categoryName} is added!!</h2> */}
    </div>
  );
};

export default CreateCategoryWindow;
