import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
};

export default ProductList;
