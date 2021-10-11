import React from 'react';
import { useHistory } from 'react-router';
import './HomeItem.scss';

const HomeItem = ({ title, imageUrl, linkUrl }) => {
   const history = useHistory();
   return (
      <div className='menu-item' onClick={() => history.push(`/${linkUrl}`)}>
         <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image' />
         <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
         </div>
      </div>
   );
};

export default HomeItem;
