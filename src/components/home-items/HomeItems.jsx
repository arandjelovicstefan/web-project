import React, { useEffect, useState } from 'react';
import { getAllSectionItems } from '../../service';
import HomeItem from '../home-item/HomeItem';
import './HomeItems.scss';

function HomeItems() {
   const [setions, setSetions] = useState([]);

   useEffect(() => {
      getAllSectionItems().then(response => {
         setSetions(response.data);
      });
   }, []);

   return (
      <div className='home'>
         {setions.map(section => {
            return <HomeItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />;
         })}
      </div>
   );
}

export default HomeItems;
