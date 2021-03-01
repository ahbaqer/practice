import React from "react";
import HomePage from "./components/Home";
import ProductItem from "./components/ProductItem";
import ProductList from "./components/ProductsList";
import styles from "./styles";

function App() {
  return (
    <div>
      <div>
        <HomePage />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
}
export default App;
