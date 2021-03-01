import styles from "../styles";

const ProductItem = (props) => {
  const product = props.product;
  return (
    <div style={styles.product}>
      <img style={styles.productImage} alt={product.name} src={product.image} />
      <p style={styles.text}>{product.name}</p>
      <p style={styles.text}>{product.price}KD</p>
    </div>
  );
};
export default ProductItem;
