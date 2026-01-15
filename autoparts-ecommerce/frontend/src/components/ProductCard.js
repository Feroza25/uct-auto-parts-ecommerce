import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      padding: 12,
      borderRadius: 6,
      background: "#fff"
    }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: 160, objectFit: "contain" }}
        />

        <h4>{product.name}</h4>
      </Link>

      <p><b>₹{product.price}</b></p>
      <p>{product.specs}</p>
      <p>⭐ {product.rating} ({product.reviews} reviews)</p>
      <p>Stock: {product.stock}</p>

      <button
        onClick={addToCart}
        style={{
          width: "100%",
          background: "#f0c14b",
          border: "1px solid #a88734",
          padding: 6,
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
