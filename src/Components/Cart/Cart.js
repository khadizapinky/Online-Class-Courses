import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const {name} = props.product;
    let total= 0;
    for(let i = 0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
        
    }
    return (
        <div className="cart">
            <h3 className="text-center">My courses</h3>
            <br/>
            <p> Total Course:{cart.length}</p>
            <p>Total Price :${total}</p>
            
            <br/>
            {/* <button className="btn btn-danger"
            onClick = {() => props.handleAddProduct(props.cart)}>
           Show Courses</button> */}
           {/* <p>name:{name}</p> */}
        </div>
    );
};

export default Cart;