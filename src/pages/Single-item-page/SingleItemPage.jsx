import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { AddItem } from '../../redux/cart/Cart.actions';
import { getAllShopItems } from '../../service';
import './SingleItemPage.scss';

function SingleItemPage({ AddItem }) {
   const { sections, id } = useParams();
   const [item, setItem] = useState();

   useEffect(() => {
      getAllShopItems().then(response => {
         setItem(response.data.find(section => section.title === sections).items.find(item => item.id === Number(id)));
      });
   }, [sections, id]);

   console.log(item);

   return item ? (
      <div className='single-item'>
         <img src={item.imageUrl} alt={item.name} className='image-si' />
         <div className='item-info'>
            <h2>{item.name}</h2>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores, fugit, ut quasi, aperiam quis
               totam dolorum vel consequuntur exercitationem tenetur placeat ab hic numquam? Aperiam eos repudiandae
               sunt autem?
            </p>
            <p className='price-si'>Price: {item.price} € </p>
            <button className='single-item-button' onClick={() => AddItem(item)}>
               Add to cart
            </button>
         </div>
      </div>
   ) : null;
}

const mapDispatchToProps = dispatch => {
   return {
      AddItem: item => dispatch(AddItem(item)),
   };
};

export default connect(null, mapDispatchToProps)(SingleItemPage);
