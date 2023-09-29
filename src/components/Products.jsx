import React from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
export default function Products({ products, category }) {
  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  // Render the filtered products
  return (
    <ProductsContainer>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
}

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next row if needed */
  justify-content: space-evenly; /* Center-align cards horizontally */
  gap: 20px; /* Add spacing between cards */
`;
