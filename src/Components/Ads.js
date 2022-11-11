import React from 'react';

const Ads = ({ mobile }) => {
  return mobile ? (
    <div className="ads-mobile">
      <img src="https://www.marketingsgm.es/wp-content/uploads/banner-adidas.jpg" />
    </div>
  ) : (
    <div className="ads">
      <img src="https://www.ruffalonl.com/wp-content/uploads/2020/11/Mizzou_Vertical-Banner.jpg" />
    </div>
  );
};

export default Ads;
