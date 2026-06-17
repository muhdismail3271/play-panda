import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../services/orderService";

function Orders() {
  const user = useSelector(
    (state) => state.auth.user
  );

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        const userOrders = data.filter(
          (order) =>
            order.userId === user.id
        );
        setOrders(userOrders);
      }catch (error) {
        console.log(error);
      }
    };
    fetchOrders();
  }, [user]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>My Orders</h1>
      {orders.length === 0 ? (
          <h3>No Orders Found</h3>
        ) : (orders.map((order) => (
            <div key={order.id} style={{border: "1px solid gray", padding: "20px", marginBottom: "20px"}}> 
              <h3>Order ID: {order.id}</h3> 
              <p>Date: {order.date}</p>
              <p>Total: ₹{order.totalPrice}</p>
              <h4>Items:</h4>

              {order.items.map((item) => (
                  <div key={item.id}>
                    <p>{item.title}</p>
                    <p>Qty: {item.quantity} </p>
                  </div>
                ))
              }
            </div>
          ))
        )
      }
    </div>
  );
}

export default Orders;