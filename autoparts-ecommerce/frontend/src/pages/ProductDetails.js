import { useParams, Link } from "react-router-dom";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">⬅ Back to Products</Link>

      <div style={{ display: "flex", marginTop: 20 }}>
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: 350,
            height: 350,
            objectFit: "contain",
            marginRight: 30
          }}
        />

        {/* Product Info */}
        <div>
          <h2>{product.name}</h2>
          <h3 style={{ color: "#B12704" }}>₹{product.price}</h3>
          <p>{product.specs}</p>

          <p>
            ⭐ {product.rating} ({product.reviews} ratings)
          </p>

          <p>
            <b>Availability:</b>{" "}
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>

          <button
            onClick={addToCart}
            style={{
              background: "#f0c14b",
              border: "1px solid #a88734",
              padding: "10px 20px",
              cursor: "pointer",
              fontSize: 16
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div style={{ marginTop: 40 }}>
        <h3>Customer Reviews</h3>

        <div style={reviewBox}>
          ⭐⭐⭐⭐⭐ – “Excellent quality, fits perfectly.”
        </div>
        <div style={reviewBox}>
          ⭐⭐⭐⭐ – “Good value for money.”
        </div>
        <div style={reviewBox}>
          ⭐⭐⭐⭐ – “Delivery was fast, product works well.”
        </div>
        <div style={reviewBox}>
          ⭐⭐⭐ – “Average but acceptable.”
        </div>
      </div>
    </div>
  );
}

const reviewBox = {
  border: "1px solid #ddd",
  padding: 10,
  marginBottom: 10,
  borderRadius: 4,
  background: "#fafafa"
};
