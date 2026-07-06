import { useAuth } from "../context/AuthContext"

export default function Profile() {
  const { user, logout } = useAuth()

  return (
    <div className="bg-white p-6 rounded-xl shadow max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Profile</h1>

      <p>Email: {user?.email}</p>

      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}