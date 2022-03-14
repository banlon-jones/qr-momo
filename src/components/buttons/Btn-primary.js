import React from 'react';

const BtnPrimary = (Props) => {
  const { value } = Props;
  return (
    <div>
      <button className="btn-primary" type="button">
        {value}
      </button>
    </div>
  );
};

export default BtnPrimary;
