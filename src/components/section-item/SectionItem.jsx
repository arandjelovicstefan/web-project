import React from 'react';
import { AddItem } from '../../redux/cart/Cart.actions';
import { ReactComponent as ShopLogo } from '../../assets/shop.svg';
import { ReactComponent as SaleLogo } from '../../assets/price-tag.svg';
import './SectionItem.scss';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

function SectionItem({ item, AddItem }) {
   const history = useHistory();
   return (
      <div>
         <div className='item-section'>
            <div
               className='image-section'
               style={{ backgroundImage: `url(${item.imageUrl})` }}
               onClick={() => history.push(`/shop/${item.type}/${item.id}`)}
            />
            <div className='footer-section'>
               <span className='name-section'> {item.name} </span>
               <span className='price-section'> {item.price} € </span>
            </div>
            <ShopLogo className='logo-section' onClick={() => AddItem(item)} />
            {item.sale ? <SaleLogo className='logo-sale' /> : null}
         </div>
      </div>
   );
}

const mapDispatchToProps = dispatch => {
   return {
      AddItem: item => dispatch(AddItem(item)),
   };
};

export default connect(null, mapDispatchToProps)(SectionItem);
