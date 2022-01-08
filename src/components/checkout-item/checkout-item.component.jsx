import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { CheckoutItemContainer, ImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer } from './checkout-item.style';

const CheckoutItem = ({ cartItems, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItems;
  console.log(cartItems);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItems) } >&#10094;</div>
        <span className='value'>{quantity}</span>
        <div onClick={() => addItem(cartItems) }>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItems)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};


const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});


export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem); 
