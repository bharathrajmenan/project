const CartSummary = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
      <div className="cart">
        <h2>🛒 Cart Summary</h2>
        <p>Items: {cart.length}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
  );
};

export default CartSummary;
