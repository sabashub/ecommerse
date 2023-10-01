// Cart.js
import React from "react";
import styled from "styled-components";

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContainer>
      <CartTitle>Shopping Cart</CartTitle>
      <CartItemList>
        {cartItems.map((item, index) => (
          <CartItem key={index}>
            <CartImage src={item.images[0]} alt="asda" />
            <CartItemTitle>{item.title}</CartItemTitle>
            <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </CartItem>
        ))}
      </CartItemList>
      <p>Total: ${total.toFixed(2)}</p>
    </CartContainer>
  );
}

export default Cart;

const CartContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
`;

const CartTitle = styled.h2`
  font-size: 20px;
  margin: 5px 0;
`;

const CartItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CartItemTitle = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

const CartItemPrice = styled.span`
  font-weight: bold;
`;
const CartImage = styled.img`
  width: 30px;
  height: 30px;
`;
