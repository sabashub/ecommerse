import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { data } from "./Data";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  useEffect(() => {
    setProducts(data);
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category.name))
    );
    setCategories(uniqueCategories);
  }, [products]);

  return (
    <BrowserRouter>
      <Header categories={categories} toggleCart={toggleCart} />

      <Routes>
        {categories.map((category, index) => (
          <Route
            path={`/${category}`}
            element={
              <Products
                category={category}
                products={products}
                key={index}
                cartVisible={cartVisible}
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
