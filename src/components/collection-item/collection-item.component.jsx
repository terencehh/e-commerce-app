import React from 'react';
import CustomButton from '../custom-button/custom-botton.component'
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss'

const CollectionItem = ({ item, addItemToCart }) => {

  // destructure item data passed in
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}>
      </div>
      <div className="collection-footer">
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItemToCart(item)} inverted>ADD TO CART</CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);