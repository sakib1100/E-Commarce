import React, { useEffect, useState } from 'react';

import "./Shop.css"
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;