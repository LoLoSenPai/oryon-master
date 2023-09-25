import React from 'react';
import { useHistory } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
  const history = useHistory();

  const handleClick = () => {
    const currentPath = history.location.pathname;
    const parentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    history.push(parentPath);
  };

  return (
    <button className='btn-blur-effect back-btn' onClick={handleClick}>
        <span className='span-blur-effect'></span>
        <span className='span-blur-effect'></span>
        <span className='span-blur-effect'></span>
        <span className='span-blur-effect'></span> Back
    </button>
  );
}

export default BackButton;
