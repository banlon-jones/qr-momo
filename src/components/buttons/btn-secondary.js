import React from 'react';
import './button.css';

const BtnSecondary = (Props) => {
  const { value } = Props;
  return (
    <div>
      <button className="btn-sec width-normal" type="button">
        {value}
      </button>
    </div>
  );
};

export default BtnSecondary;
