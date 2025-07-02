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
  const location = useLocation(); // <-- useLocation hook here

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category)
  );

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<><Home /><ProductList products={filteredProducts} addToCart={addToCart} /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Render CartSummary and Marquee only on Home route */}
      {location.pathname === "/" && (
        <>
          <CartSummary cart={cart} />
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
