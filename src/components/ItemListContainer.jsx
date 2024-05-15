import React from 'react';

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="background-image">
      <p className='parrafo' style={{ textAlign: 'center', color: 'white' }}>
        {greeting}
      </p>
    </div>
  );
};

