import { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);

        // Extract unique categories from products and store them in categories state
        const uniqueCategories = Array.from(
          new Set(data.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  console.log(categories);
  return (
    <BrowserRouter>
      <Header categories={categories} />
      <Routes>
        {categories.map((category) => (
          <Route
            path={`/${category}`}
            element={<Products category={category} products={products} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
