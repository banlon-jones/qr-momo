import React from 'react';
import './button.css';

const BtnPrimary = (Props) => {
  const { value } = Props;
  return (
    <div>
      <button className="btn-pri width-normal" type="button">
        {value}
      </button>
    </div>
  );
};

export default BtnPrimary;
