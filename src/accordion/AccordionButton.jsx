import React, { useState } from 'react';

const AccordionButton = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <button className="accordion-button" onClick={handleClick}>
      {isOpen ? 'Close Category Menu' : 'Open Category Menu'}
    </button>
  );
};

export default AccordionButton;
