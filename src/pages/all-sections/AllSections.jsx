import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getAllShopItems } from '../../service';
import { StyledInput, StyledItems, StyledSectionName } from './AllSections.styled';
import SectionItem from '../../components/section-item/SectionItem';

function AllSections() {
   const { sections } = useParams();
   const [section, setSection] = useState();
   const [searchInput, setSearchInput] = useState('');

   useEffect(() => {
      getAllShopItems().then(response => {
         setSection(response.data.find(section => section.title === sections));
      });
   }, [sections]);

   return section ? (
      <div>
         <StyledSectionName>{section.title}</StyledSectionName>
         <StyledInput
            type='search'
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder='search'
         />
         <StyledItems>
            {section.items
               .filter(item => item.name.toLowerCase().includes(searchInput))
               .map(item => (
                  <SectionItem key={item.id} item={item} />
               ))}
         </StyledItems>
      </div>
   ) : null;
}

export default AllSections;
