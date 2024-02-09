import React, { useState } from "react";
// import classes from '../modules/accordion.module.scss'
import classes from '../modules/accordion.module.scss'
import CreateCategoryWindow from "./CreateCategoryWindow";
import ViewCategory from "./ViewCategory";
import { Link } from "react-router-dom";

//{ onAddCategoryClick, onViewCategoryClick }
const Accordion = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };
  const onAddCategoryClick= () => {

    <CreateCategoryWindow />
  }
  const onViewCategoryClick= () => {

    <ViewCategory />
  }




  return (
    <div className={classes.accordion}>
      <div className={classes.accordionItem}>
        <button className={classes.accordionButton} onClick={toggleAccordion}>
          Categories
        </button>
        {isActive && (
          <div className={classes.accordionContent}>
            <Link to="/createcategory"><button className={classes.accordionSubButton} onClick={onAddCategoryClick}>Add Category</button></Link>
            <Link to="/viewcategory"> <button className={classes.accordionSubButton} onClick={onViewCategoryClick}>View Category</button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
