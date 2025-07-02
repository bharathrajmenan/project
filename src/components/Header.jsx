import { Link } from "react-router-dom";

const Header = ({ search, setSearch, category, setCategory }) => (
  <header className="header">
    <div className="navbar">
      <h1>Smartkart</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
    <div className="filters">
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
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

export default Header;
