import React, { useEffect, useState } from 'react';
import { getAllSectionItems } from '../../service';
import HomeItem from '../home-item/HomeItem';
import { StyledHome } from './HomeItems.styled';

function HomeItems() {
   const [setions, setSetions] = useState([]);

   useEffect(() => {
      getAllSectionItems().then(response => {
         setSetions(response.data);
      });
   }, []);

   return (
      <StyledHome>
         {setions.map(section => {
            return <HomeItem key={section.id} title={section.title} imageUrl={section.imageUrl} size={section.size} linkUrl={section.linkUrl} />;
         })}
      </StyledHome>
   );
}

export default HomeItems;
