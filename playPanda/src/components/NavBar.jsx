import "../styles/navBar.css"
import { ShoppingCart } from "lucide-react"


export default function NavBar() {
    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                <h1 className="logo">PLAY PANDA</h1>

                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About us</a>
                    <a href="#">Services</a>
                    <a href="#">Shop</a>
                </div>

                <button className="cart-button"><ShoppingCart /></button>
            </nav>
        </div>
    )
}
