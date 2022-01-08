import React from 'react';
import { connect } from 'react-redux';

import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.style';

const CartIcon = ({ toogleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toogleCartHidden}>
    <ShoppingIcon/>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);