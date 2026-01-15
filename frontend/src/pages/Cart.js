import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const placeOrder = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({
      items: cart,
      total: getTotal(),
      date: new Date().toDateString()
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
    window.location.href = "/orders";
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
            borderRadius: 5
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: 100,
              height: 100,
              objectFit: "contain",
              marginRight: 15
            }}
          />

          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>{item.specs}</p>
            <p><b>₹{item.price}</b></p>
            <p>⭐ {item.rating} ({item.reviews} reviews)</p>
          </div>

          <button
            onClick={() => removeFromCart(index)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "6px 12px",
              cursor: "pointer"
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Total: ₹{getTotal()}</h3>

          <button
            onClick={placeOrder}
            style={{
              background: "#f0c14b",
              border: "1px solid #a88734",
              padding: "10px 20px",
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
