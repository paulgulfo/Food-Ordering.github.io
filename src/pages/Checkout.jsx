import { useCart } from "../context/CartContext"
import { createOrder } from "../services/orderService"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Checkout() {
  const { cart, getTotal } = useCart()
  const { user } = useAuth()
  const navigate = useNavigate()

  const placeOrder = async () => {
    const order = {
      userId: user.uid,
      items: cart,
      total: getTotal(),
      status: "Pending",
      createdAt: new Date()
    }

    await createOrder(order)

    alert("Order placed successfully!")
    navigate("/")
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Checkout 💳</h1>

      <h2 className="text-xl font-bold mb-4">
        Total: ₱{getTotal()}
      </h2>

      <button
        onClick={placeOrder}
        className="w-full bg-green-500 text-white py-2 rounded"
      >
        Place Order
      </button>
    </div>
  )
}