import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    const{ image, name,price} = props.product;
    return (
        <div className='product'>
            <div className="img">
                <img src={image} alt=""/>
               </div>
            <div className='product_right'>
               <h4 className='product-name'>{name}</h4>
               <p>${price}</p>
                <button 
               className="btn btn-danger"
               onClick = {() => props.handleAddProduct(props.product)}>
               <FontAwesomeIcon icon={faPlus} /> Enroll Now</button>
              </div>
           </div>
            
       
    );
};

export default Product;