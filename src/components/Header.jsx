import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css"; // Make sure this file exists

const Header = ({ search, setSearch, category, setCategory }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="navbar">
        <h1>Smartkart</h1>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={menuOpen ? "open" : ""}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Samsung">Samsung</option>
          <option value="Xiaomi">Xiaomi</option>
          <option value="Huawei">Huawei</option>
          <option value="Motorola">Motorola</option>
          <option value="Google">Google</option>
          <option value="Apple">Apple</option>
          <option value="Realme">Realme</option>
          <option value="OnePlus">OnePlus</option>
          <option value="Vivo">Vivo</option>
          <option value="Oppo">Oppo</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
