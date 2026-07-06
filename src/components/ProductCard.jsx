import "./ProductCard.css";
import { useCart } from "../context/CartContext";

export default function ProductCard({ id, name, price }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-image"></div>

      <h3>{name}</h3>

      <p className="price">₱{price}</p>

      <button
        onClick={() => addToCart({ id, name, price })}
      >
        Add to Cart
      </button>

    </div>
  );
}