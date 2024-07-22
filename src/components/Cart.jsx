// src/components/Cart.js
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button
              onClick={() =>
                dispatch({ type: "cart/removeItemAsync", payload: item.id })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
