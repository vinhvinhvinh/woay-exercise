import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <>
      <div className='header d-flex flex-row  py-4 align-center justify-content-between'>
        <div className='header--content'>Content...</div>

        <div className='header--nav'>
          <div className='header--nav__list d-flex justify-content-between'>
            <div className='header--nav__item'>
              <div>Home</div>
            </div>
            <div className='header--nav__item'>
              <div>Case Studies</div>
            </div>
            <div className='header--nav__item'>
              <div>Contact</div>
            </div>
          </div>
        </div>
      </div>
      <HeaderMain />
    </>
  );
};

const HeaderMain = () => {
  return (
    <div className='header--main'>
      <div className='header--main__left'>
        <div className='d-flex flex-column'>
          <h2 className='header--main__title mb-4'>
            Another landing page for startups
          </h2>
          <p className='mb-5'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className='header--main__btn p-3 text-center'>Get Started</div>
        </div>
      </div>
      <div className='header--main__right'>
        <div>
          <img src='./assets/img/Group221.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Header;
