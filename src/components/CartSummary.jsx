import './CartSummary.css';

const CartSummary = ({ cart, onReset }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-summary">
      <h2>🛒 Cart Summary</h2>
      <p>Items: {cart.length}</p>
      <p>Total: ₹{total}</p>

      {onReset && (
        <button className="reset-btn" onClick={onReset}>
          ♻️ Reset Cart
        </button>
      )}
    </div>
  );
};

export default CartSummary;
