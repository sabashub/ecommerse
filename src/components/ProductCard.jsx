import React from "react";
import styled from "styled-components";

function ProductCard({ product, addToCart }) {
  return (
    <CardContainer>
      <ProductImage src={product.images[0]} alt="product" />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductCategory>Category: {product.category.name}</ProductCategory>
      <ProductPrice>Price: ${product.price.toFixed(2)}</ProductPrice>
      <AddToCartButton onClick={addToCart}>Add To Cart</AddToCartButton>
    </CardContainer>
  );
}

export default ProductCard;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  text-align: center;
  width: 180px;
  height: auto;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 150px;
`;

const ProductTitle = styled.h3`
  font-size: 16px;
  margin: 5px 0;
  flex-grow: 1;
`;

const ProductCategory = styled.p`
  font-size: 17px;
  margin: 5px 0;
`;

const ProductPrice = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 5px 0;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;
