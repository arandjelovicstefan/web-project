import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllShopItems } from '../../service';
import { nanoid } from 'nanoid';

function Admin() {
   const [addName, setAddName] = useState('');
   const [addUrl, setAddUrl] = useState('');
   const [addSelectSection, setAddSelectSection] = useState('');
   const [addSelectSale, setAddSelectSale] = useState('');
   const [addPrice, setAddPrice] = useState(0);

   const [search, setSearch] = useState('');
   const [itemsSection, setItemsSection] = useState([]);
   const [changeSelect, setChangeSelect] = useState([]);

   useEffect(() => {
      getAllShopItems().then(response => {
         setItemsSection(response.data);
      });
   }, []);

   const handleAddSubmit = e => {
      e.preventDefault();
      const item = {
         id: nanoid(),
         name: { addName },
         imageUrl: { addUrl },
         type: { addSelectSection },
         sale: { addSelectSale },
         price: { addPrice },
      };
      //post item u zavisnosti od sekcije, setSelectSection mora da ide u post kroz props za url + ceo item !!!
   };

   const handleChangeSubmit = e => {
      e.preventDefault();
   };

   return (
      <div>
         <form onSubmit={handleAddSubmit}>
            <h2>Add item</h2>
            <input className='input-admin' type='text' placeholder='Name' value={addName} onChange={e => setAddName(e.target.value)} />
            <input className='input-admin' type='url' placeholder='Url' value={addUrl} onChange={e => setAddUrl(e.target.value)} />
            <select onChange={e => setAddSelectSection(e.target.value)}>
               <option value='select'>Select section</option>
               <option value='motherboard'>Motherboard</option>
               <option value='pc'>PC</option>
               <option value='gpu'>GPU</option>
               <option value='cpu'>CPU</option>
               <option value='monitor'>Monitor</option>
            </select>
            <select onChange={e => setAddSelectSale(e.target.value)}>
               <option value='true'>True</option>
               <option value='false'>False</option>
            </select>
            <input className='input-admin' type='number' placeholder='Price' value={addPrice} onChange={e => setAddPrice(e.target.value)} />
            <input type='submit' value='ADD' className='submit-admin' />
         </form>
         {'  '}
         {'  '}
         <form onSubmit={handleChangeSubmit}>
            <h2>Change item</h2>
            <select onChange={e => (e.target.value !== 'select' ? setChangeSelect(itemsSection.filter(section => e.target.value === section.title)) : setChangeSelect([]))}>
               <option value='select'>Select section</option>
               <option value='motherboards'>Motherboard</option>
               <option value='pc'>PC</option>
               <option value='gpu'>GPU</option>
               <option value='cpu'>CPU</option>
               <option value='monitors'>Monitor</option>
            </select>
            <input type='search' value={search} onChange={e => setSearch(e.target.value)} />
         </form>
      </div>
   );
}

const mapStateToProps = state => {
   return {
      currentUser: state.user.currentUser,
   };
};

export default connect(mapStateToProps)(Admin);
