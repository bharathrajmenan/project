import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => (
  <div className="product-grid">
    {products.length === 0 ? (
      <p>No products found</p>
    ) : (
      products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))
    )}
  </div>
);

export default ProductList;
