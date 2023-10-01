import React, { useState } from "react";
import styled from "styled-components";

function Filter({ sortProducts }) {
  const [sortOption, setSortOption] = useState("price");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    sortProducts(event.target.value);
  };

  return (
    <FilterContainer>
      <FilterLabel>Sort by:</FilterLabel>
      <Select value={sortOption} onChange={handleSortChange}>
        <option value="price">Price</option>
        <option value="alphabet">Alphabet</option>
      </Select>
    </FilterContainer>
  );
}

export default Filter;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const FilterLabel = styled.label`
  font-weight: bold;
`;

const Select = styled.select`
  margin-top: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
