import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer, EmptyMessageContainer, CartItemContainer, CartDropdownButton } from './cart-dropdown.style';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemContainer>
      {cartItems.length ? (
      cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))
      ) :(
        <EmptyMessageContainer>Your car is empty</EmptyMessageContainer>
      )
      }
    </CartItemContainer>
    <CartDropdownButton
    onClick={()=> {
      history.push('/checkout');
      dispatch(toogleCartHidden());
      }} >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems

});

export default withRouter(connect(mapStateToProps)(CartDropdown));

