import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { sectionsToNr } from './Admin.functions';
import { addSectionShopItem, getSectionShopItems } from '../../service';
import './Admin.scss';

function Admin() {
   const [items, setItems] = useState([]);
   const [addName, setAddName] = useState('');
   const [addUrl, setAddUrl] = useState('');
   const [addSelectSection, setAddSelectSection] = useState('');
   const [addSelectSale, setAddSelectSale] = useState('');
   const [addPrice, setAddPrice] = useState();

   const [addItemInfo, setAddItemInfo] = useState('');

   // const [search, setSearch] = useState('');
   // const [itemsSection, setItemsSection] = useState([]);
   // const [changeSelect, setChangeSelect] = useState([]);

   useEffect(() => {
      getSectionShopItems(sectionsToNr(addSelectSection)).then(response => {
         setItems(response.data);
      });
   }, [addSelectSection]);

   const handleAddSubmit = e => {
      e.preventDefault();
      const item = {
         id: nanoid(),
         name: addName,
         imageUrl: addUrl,
         type: addSelectSection,
         sale: addSelectSale,
         price: addPrice,
      };
      let copy = { ...items };
      copy.items.push(item);
      console.log(copy);
      addSectionShopItem(sectionsToNr(addSelectSection), copy);
      setAddName('');
      setAddUrl('');
      setAddPrice();
      setAddItemInfo('Item successfully added!');
   };

   // const handleChangeSubmit = e => {
   //    e.preventDefault();
   // };

   return (
      <div className='admin-page'>
         <div className='add-form'>
            <form onSubmit={handleAddSubmit}>
               <h2>Add item</h2>
               <input className='input-admin' type='text' placeholder='Item name' value={addName} onChange={e => setAddName(e.target.value)} />
               <input className='input-admin' type='url' placeholder='Image url' value={addUrl} onChange={e => setAddUrl(e.target.value)} />
               <h3>Choose item type</h3>
               <select onChange={e => setAddSelectSection(e.target.value)} className='admin-select'>
                  <option disabled>Select section</option>
                  <option value='motherboard'>Motherboard</option>
                  <option value='pc'>PC</option>
                  <option value='gpu'>GPU</option>
                  <option value='cpu'>CPU</option>
                  <option value='monitor'>Monitor</option>
               </select>
               <h3>On sale</h3>
               <select onChange={e => setAddSelectSale(e.target.value)} defaultValue='false' className='admin-select'>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
               </select>
               <input className='input-admin' type='number' placeholder='Price' value={addPrice} onChange={e => setAddPrice(e.target.value)} />
               <p className='infoMsg'> {addItemInfo} </p>
               <input type='submit' value='ADD' className='submit-admin' />
            </form>
         </div>
         {/* {'  '}
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
         </form> */}
      </div>
   );
}

const mapStateToProps = state => {
   return {
      currentUser: state.user.currentUser,
   };
};

export default connect(mapStateToProps)(Admin);
