import { Link, Outlet } from "react-router-dom"

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

        <nav className="flex flex-col gap-3">
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/sales">Sales</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  )
}