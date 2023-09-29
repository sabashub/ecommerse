import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cart from "../cart3.png";

const HeaderContainer = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: black;
  color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  text-transform: uppercase;
  height: 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;

    a {
      margin-top: 10px;
      font-size: 20px; /* Adjust font size for mobile */
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
    transition: color 0.3s ease-in-out; /* Add a smooth color transition */
    cursor: pointer;

    &:hover {
      color: white; /* Change color on hover */
      text-decoration: none;
    }
  }
`;

const CartLogo = styled.img`
  width: 40px;
  height: 40px;

  cursor: pointer;
`;

const Header = ({ categories }) => {
  return (
    <HeaderContainer>
      <ShopName>3NEST</ShopName>
      <Categories>
        {categories.map((category) => (
          <Link to={`/${category}`} key={category}>
            {category}
          </Link>
        ))}
      </Categories>
      <CartLogo src={cart} />
    </HeaderContainer>
  );
};

export default Header;
