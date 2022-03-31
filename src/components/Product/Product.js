import React from 'react';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, ratings} =props.product
    return (
        <div className='product' >
        <img src={img} alt="" />
      <div className="product-info">
        <p className='Product-Name' >{name}</p>
        <p>Price: ${price}</p>
        <p>Seller: {seller}</p>
        <p>Ratings: {ratings} stars</p>        </div>
            <button onClick={ ()=> props.handelToCart(props.product)} className='button-cart'>
                <p className='btn-cart'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}> 

                </FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;