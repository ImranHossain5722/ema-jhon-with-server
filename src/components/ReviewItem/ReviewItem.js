import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, img, price,shipping, quantity}=props.product
    return (
        <div className='review-item'>
            <div className='review-img'>
                <img src={img} alt="" />
            </div>

            <div className='review-item-container'>
                    <div className='review-item-details'>
                        <p>{name.length >20 ? name.slice(0,20): name}</p>
                        <p><small>price:</small> {price}</p>
                        <p><small>Shipping </small> {shipping} </p>
                        <p><small>Quantity:{quantity}</small> </p>
                    </div>

                   <div className='delete-container'>
                        <button className='btn'>
                              
                            <FontAwesomeIcon className='review-item-deleteBtn' icon={faTrashAlt}></FontAwesomeIcon> 
                        </button>
                   </div>
            </div>

        </div>

    );
};

export default ReviewItem;