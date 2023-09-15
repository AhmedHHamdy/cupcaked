import { Link } from "react-router-dom"
import "../App.css"

export default function Header() {
  return (
    <header>
      <nav>
        <Link className="nav-shop" to="/shop">Shop</Link>
        <Link className="nav-about" to="/about">About</Link>
        <Link className="nav-contact" to="/contact">Contact Us</Link>
        <Link className="nav-brand" to="/">Cupcaked</Link>
        <i className="nav-search fa-solid fa-magnifying-glass"></i>
        <i className="nav-shoppingCart fa-solid fa-cart-shopping"></i>
      </nav>
    </header>
  )
}