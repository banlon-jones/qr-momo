import React from 'react';

const Iframe = (Props) => {
  const { data } = Props;
  return (
    <div>
      <div>
        <iframe
          width="400"
          height="400"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${data}`}
          title="transfer QR code"
        />
      </div>
    </div>
  );
};

export default Iframe;
