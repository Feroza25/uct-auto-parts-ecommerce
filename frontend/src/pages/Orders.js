export default function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const getDeliveryDate = (orderDate) => {
    const d = new Date(orderDate);
    d.setDate(d.getDate() + 5); // 5-day delivery
    return d.toDateString();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Orders</h2>

      {orders.length === 0 && <p>No orders placed yet.</p>}

      {orders.map((order, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 20,
            borderRadius: 6,
            background: "#fff"
          }}
        >
          {/* Order Header */}
          <div style={{ marginBottom: 10 }}>
            <p><b>Order Date:</b> {order.date}</p>
            <p><b>Status:</b> 📦 Shipped</p>
            <p>
              <b>Expected Delivery:</b>{" "}
              {getDeliveryDate(order.date)}
            </p>
            <p><b>Total Amount:</b> ₹{order.total}</p>
          </div>

          <hr />

          {/* Ordered Items */}
          {order.items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 10
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                  marginRight: 15
                }}
              />

              <div>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <p style={{ margin: "4px 0" }}>{item.specs}</p>
                <p style={{ margin: 0 }}>
                  <b>₹{item.price}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
