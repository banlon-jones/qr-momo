import React from 'react';

const BtnSecondary = (Props) => {
  const { value } = Props;
  return (
    <div>
      <button className="btn-secondary" type="button">
        {' '}
        {value}
        {' '}
      </button>
    </div>
  );
};

export default BtnSecondary;
