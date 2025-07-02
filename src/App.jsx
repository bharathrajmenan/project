import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import productsData from "./data/products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import CartSummary from "./components/CartSummary";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./index.css";
import Marquee from "./components/Marquee";

function AppContent() {
  const location = useLocation();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category)
  );

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const resetCart = () => {
    if (window.confirm("Are you sure you want to reset the cart?")) {
      setCart([]);
      localStorage.removeItem("cart");
    }
  };

  return (
    <div className="app">
      <Header
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <ProductList products={filteredProducts} addToCart={addToCart} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {location.pathname === "/" && (
        <>
          <CartSummary cart={cart} onReset={resetCart} />
          <Marquee />
        </>
      )}

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
