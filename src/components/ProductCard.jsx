// const ProductCard = ({ product, addToCart }) => (
//   <div className="card">
//     <img src={product.image} alt={product.name} />
//     <h3>{product.name}</h3>
//     <p>${product.price}</p>
//     <button onClick={() => addToCart(product)}>Add to Cart</button>
//   </div>
// );
// export default ProductCard;


import {motion} from "framer-motion";

const ProductCard = ({ product, addToCart }) => (
  <motion.div
    className="card"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </motion.div>
);

export default ProductCard;
