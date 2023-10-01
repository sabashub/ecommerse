import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cart from "../cart3.png";

function Header({ categories, toggleCart }) {
  return (
    <HeaderContainer>
      <ShopName>SHOP</ShopName>
      <Categories>
        {categories.map((category) => (
          <Link to={`/${category}`} key={category}>
            {category}
          </Link>
        ))}
      </Categories>
      <CartLogo src={cart} onClick={toggleCart} />
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: black;
  color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  height: 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;

    a {
      margin-top: 10px;
      font-size: 20px;
    }
  }
`;

const ShopName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Categories = styled.div`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: red;
    font-size: 25px;
    transition: color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
`;

const CartLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export default Header;
