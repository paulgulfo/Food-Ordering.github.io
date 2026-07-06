import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <h1 className="text-xl font-bold text-blue-600">
        FoodOrder 🍔
      </h1>

      <div className="flex gap-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/menu" className="hover:text-blue-500">Menu</Link>
        <Link to="/cart" className="hover:text-blue-500">Cart</Link>
        <Link to="/profile" className="hover:text-blue-500">Profile</Link>
      </div>
    </nav>
  )
}