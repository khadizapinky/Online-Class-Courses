import React, { useState } from 'react';
import './Course.css';
import data from '../../data/data.json';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = () => {
    const first10 = data.slice(0,10);
    const[products, setProducts] = useState(first10);

    const[cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('product added',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="main_section">
            <div className="main_sec_left">
             {
                    products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                         product = {pd}
                         ></Product>)
                  
                }
                </div>
                <div className="main_sec_right">
                
              <Cart
               cart={cart}
               handleAddProduct = {handleAddProduct}
               ></Cart>
              
            </div>
                </div>
        
       
    );
};

export default Course;