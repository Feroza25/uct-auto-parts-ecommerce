import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div style={{ padding: 20 }}>
      <h1>Automotive Parts Store</h1>

      <select onChange={e => setCategory(e.target.value)}>
        <option>All</option>
        <option>Brakes</option>
        <option>Batteries</option>
        <option>Tires</option>
        <option>Lights</option>
        <option>Electronics</option>
      </select>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
        {filtered.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
