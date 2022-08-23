import React from 'react';
import './feature.scss';

const Feature = () => {
  return (
    <div className='feature d-flex justify-content-around'>
      <div className='feature--left'>
        <img src='./assets/img/Group224.png' alt='' />
      </div>
      <div className='feature--right'>
        <div className='feature--right__content mt-5 '>
          <h2>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
