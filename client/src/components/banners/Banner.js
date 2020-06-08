import React from 'react';

import './banner.scss';

const Banner = ({title, body, subtitle}) => {
  return (
    <header className="masthead text-white text-center">
      <div className="overlay"/>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h1>{title}</h1>
            <h4 className="mt-3 mb-4">{subtitle}</h4>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            {body}
          </div>
        </div>
      </div>
    </header>
  )
};

export default Banner;