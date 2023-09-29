import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
  max-width: 200px; /* Set the maximum width for the card */
  height: auto;
`;

const ProductTitle = styled.h3`
  font-size: 16px; /* Reduce font size for the title */
  margin: 5px 0;
`;

const ProductCategory = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const ProductPrice = styled.p`
  font-size: 14px; /* Reduce font size for the price */
  font-weight: bold;
  margin: 5px 0;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 100px;
  margin-top: 10px;
`;
const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductCategory>Category: {product.category}</ProductCategory>
      <ProductPrice>Price: ${product.price.toFixed(2)}</ProductPrice>
      <AddToCartButton>Add To Cart</AddToCartButton>
    </CardContainer>
  );
};

export default ProductCard;
