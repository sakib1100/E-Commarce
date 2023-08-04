import React, { useEffect, useState } from 'react';

import "./Shop.css"
import Product from '../Product/Product';

const Shop = () => {
    const [product,setProduct] = useState([]);
    const [cart,setCart] = useState([]);

    const  handleAddToCart = (product) => {
        console.log(product);
      const newCart = [...cart,product];
      setCart(newCart);
    }
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='shop_container'>
            <div className='product_container'>
        
{
    product.map((data) => <Product 
    key={data.id}
    data={data}
    handleAddToCart={handleAddToCart}
    ></Product>)
}


            </div>
            <div className='cart_container'>
             <h3>Cart container</h3>
             <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;