import { useDispatch, useSelector } from "react-redux"
import { removeFromCart, increaseQty, decreaseQty } from "../redux/slices/cartSlice"
import NavBar from "../components/NavBar"
import "../styles/Cart.css"

export default function Cart() {
    const dispatch   = useDispatch()
    const cartItems  = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

    if (cartItems.length === 0) {
        return (
            <>
                <NavBar />
                <div className="flex min-h-[55vh] items-center justify-center">
                    <h1 className="text-center text-[32px] font-bold text-[#444]">Your cart is empty</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <NavBar />
            <div className="page-container cart-container">
                <h1 className="cart-title">
                    Your Cart
                </h1>

                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item sm:flex-row sm:items-center">
                        <img src={item.image} alt={item.name} className="cart-item-image sm:h-[90px] sm:w-[110px]"/>

                        <div className="cart-item-details">
                            <h2 className="cart-item-name">{item.name}</h2>
                            <p className="cart-item-price">Rs. {item.price}</p>

                            <div className="cart-qty-controls">
                                <button className="btn-qty-small" onClick={() => dispatch(decreaseQty(item.id))}>
                                    −
                                </button>
                                <span className="qty-small-value">{item.quantity}</span>
                                <button className="btn-qty-small" onClick={() => dispatch(increaseQty(item.id))}>
                                    +
                                </button>
                            </div>
                        </div>

                        <button className="btn-remove" onClick={() => dispatch(removeFromCart(item.id))}>
                            Remove
                        </button>
                    </div>
                ))}

                <p className="cart-total">
                    Total: Rs. {totalPrice}
                </p>
            </div>
        </>
    )
}
