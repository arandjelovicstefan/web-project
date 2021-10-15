import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getAllShopItems } from '../../service';
import SectionItem from '../section-item/SectionItem';

function AllSections() {
   const { sections } = useParams();
   const [section, setSection] = useState();

   useEffect(() => {
      getAllShopItems().then(response => {
         setSection(response.data.filter(section => section.title === sections));
      });
   }, [sections]);

   return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{section ? section[0].items.map(item => <SectionItem key={item.id} item={item} />) : console.log('delay')}</div>;
}

export default AllSections;
