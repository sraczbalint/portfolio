import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { CollectionItemContainer, CollectionFooterContainer, NameContainer, PriceContainer, BackgroundImage, AddButton } from './collection-item.style';


const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <CollectionFooterContainer>
        <NameContainer className='name'>{name}</NameContainer>
        <PriceContainer className='price'>{price}$</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);