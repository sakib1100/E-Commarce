import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({data,handleAddToCart}) => {
    const {img,name,seller,price} = data;
    
    
    return (
        <div className='product'>
            <img src={img} alt='' />
           <div className='desc'>
           <p className='product_name'>{name}</p>
            <p className='price'>$ {price}</p>
            <p>{seller}</p>
           </div>
           <button onClick={() => handleAddToCart(data)} className='btn'><p className='prag'>Add to cart</p>
           <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;