import React from "react";
import styles from "./styles";
import productList from "./productsList";

function App() {
  return (
    <div>
      <div>
        <h1 style={styles.text}>Practice</h1>
        <h2 style={styles.text}> All You need to achive </h2>
        <img
          style={styles.shopImage}
          src="https://d3j2bju5c7tc02.cloudfront.net/2017_11/cropped-dreamstime_s_61881966.jpg"
          alt="pic"
        />
      </div>
      <div style={styles.list}>{productList}</div>
    </div>
  );
}
export default App;
