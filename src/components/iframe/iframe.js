import React from 'react';

const Iframe = (Props) => {
  const { data } = Props;
  return (
    <div>
      <div>
        <iframe
          width="560"
          height="560"
          src={`https://api.qrserver.com/v1/create-qr-code/?size=550x550&data=${data}`}
          title="transfer QR code"
        />
      </div>
    </div>
  );
};

export default Iframe;
