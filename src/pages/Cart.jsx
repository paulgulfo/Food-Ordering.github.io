import { useCart } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

export default function Cart() {
  const { cart, removeFromCart, updateQty, getTotal } = useCart()
  const navigate = useNavigate()

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

      <h1 className="text-2xl font-bold mb-4">Your Cart 🛒</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b py-3"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>₱{item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateQty(item.id, item.qty - 1)
                }
                className="px-2 bg-gray-200"
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() =>
                  updateQty(item.id, item.qty + 1)
                }
                className="px-2 bg-gray-200"
              >
                +
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-3 text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {/* TOTAL */}
      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">
          Total: ₱{getTotal()}
        </h2>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-green-500 text-white px-6 py-2 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}   