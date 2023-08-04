import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (parseFloat(total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
             <h3>Order Summary</h3>
             <p>Selected Items: {cart.length}</p>
             <p>Total Price: ${total}</p>
             <p>Total Shippoing: {shipping} </p>
             <p>Tax:{tax} </p>
             <p className='total'>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;