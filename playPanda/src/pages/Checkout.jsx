import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/orderService";
import { addOrder } from "../redux/slices/orderSlice";
import { clearCart } from "../redux/slices/cartSlice";

function Checkout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.cartItems);

  const user = useSelector(state => state.auth.user);

  const totalPrice = cartItems.reduce((total, item) =>
      total + item.price * item.quantity,0
  );

  const handlePlaceOrder =
    async () => {
    try {
      const orderData = {
        userId: user.id,
        items: cartItems,
        totalPrice,
        date: new Date().toLocaleString()
      };
      const savedOrder = await createOrder(orderData);
      dispatch(addOrder(savedOrder));
      dispatch(clearCart());
      alert("Order Placed!");
      navigate("/orders");
    }catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Checkout</h1>
      <h2>Total: ₹{totalPrice}</h2>
      <button onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;