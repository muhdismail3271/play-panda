import { useDispatch, useSelector } from "react-redux"
import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import playPandasLogo from "../assets/icons/play-pandas-logo.svg"
import { logout } from "../redux/slices/authSlice"
import "../styles/navBar.css"

export default function NavBar() {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    const { isAuthenticated, user } = useSelector(state => state.auth)

    function handleLogout() {
        dispatch(logout())
        localStorage.removeItem("user")
    }

    return (
        <header className="navbar-shell">
            <nav className="page-container navbar">
                <Link to="/" className="nav-logo" aria-label="Play Panda home">
                    <img src={playPandasLogo} alt="Play Panda" />
                </Link>

                <div className="nav-links">
                    <Link className="nav-link nav-menu-link" to="/">Home</Link>
                    <Link className="nav-link nav-menu-link" to="/">About us</Link>
                    <Link className="nav-link nav-menu-link" to="/">Categories</Link>
                    <Link className="nav-link nav-menu-link" to="/">Shop</Link>
                </div>

                <div className="nav-actions">
                    {isAuthenticated ? (
                        <div className="auth-controls">
                            <span>Hi, {user.name}</span>
                            <button
                                className="btn-auth"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="auth-controls">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="btn-auth" to="/register">
                                Register
                            </Link>
                        </div>
                    )}

                    <Link to="/cart" className="cart-icon">
                        <ShoppingCart size={20} />
                        <span>({cartItems.length})</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
