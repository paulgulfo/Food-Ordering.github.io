import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await register(email, password)
      navigate("/")
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded-xl shadow w-80">
        <h1 className="text-xl font-bold mb-4">Register</h1>

        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-500 text-white p-2 rounded">
          Create Account
        </button>
      </form>
    </div>
  )
}
