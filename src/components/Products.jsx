import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import Cart from "./Cart";

export default function Products({ products, category, cartVisible }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("price");
  const productsPerPage = Math.floor(window.innerHeight / 90);

  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = products
    .filter((product) => product.category.name === category)
    .sort((a, b) => {
      if (sortOption === "price") {
        return a.price - b.price;
      } else if (sortOption === "alphabet") {
        return a.title.localeCompare(b.title);
      }
    });

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      {cartVisible && (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      )}

      <FilterContainer>
        <FilterLabel>Sort by:</FilterLabel>
        <Select value={sortOption} onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="alphabet">Alphabet</option>
        </Select>
      </FilterContainer>
      <ProductsContainer>
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)}
          />
        ))}
      </ProductsContainer>
      <PaginationContainer>
        {Array.from(
          { length: Math.ceil(filteredProducts.length / productsPerPage) },
          (_, index) => (
            <PageNumber
              key={index}
              onClick={() => handlePageChange(index + 1)}
              active={currentPage === index + 1}
            >
              {index + 1}
            </PageNumber>
          )
        )}
      </PaginationContainer>
    </div>
  );
}

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  margin-left: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;

  width: 80%;
  margin: auto;
  margin-bottom: 60px;
`;

const PaginationContainer = styled.div`
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 20px;
`;

const PageNumber = styled.div`
  cursor: pointer;
  margin: 0 10px;
  font-size: 35px;
  color: ${(props) => (props.active === true ? "red" : "black")};
`;
