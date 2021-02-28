import products from "./products";
import styles from "./styles";

const productList = products.map((product) => (
  <div style={styles.product} key={product.id}>
    <img style={styles.productImage} alt={product.name} src={product.image} />
    <p style={styles.text}>{product.name}</p>
    <p style={styles.text}>{product.price}KD</p>
  </div>
));

export default productList;
