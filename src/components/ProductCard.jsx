import { useCart } from "../context/CartContext"

export default function ProductCard({ id, name, price }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="h-24 bg-gray-200 rounded mb-3"></div>

      <h3 className="font-semibold">{name}</h3>
      <p className="text-blue-600 font-bold">₱{price}</p>

      <button
        onClick={() => addToCart({ id, name, price })}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  )
}