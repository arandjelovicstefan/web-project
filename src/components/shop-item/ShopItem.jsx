import React from 'react';
import './ShopItem.scss';
import { ReactComponent as ShopLogo } from '../../assets/shop.svg';
import { ReactComponent as SaleLogo } from '../../assets/price-tag.svg';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/Cart.actions';

function ShopItem({ item, AddItem }) {
   return (
      <div className='item'>
         <div className='image' style={{ backgroundImage: `url(${item.imageUrl})` }} />
         <div className='footer'>
            <span className='name'> {item.name} </span>
            <span className='price'> {item.price} € </span>
         </div>
         <ShopLogo className='logo' onClick={() => AddItem(item)} />
         {item.sale ? <SaleLogo className='logo-sale1' /> : null}
      </div>
   );
}

const mapDispatchToProps = dispatch => {
   return {
      AddItem: item => dispatch(AddItem(item)),
   };
};

export default connect(null, mapDispatchToProps)(ShopItem);
