export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard 📊</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2>Total Sales</h2>
          <p className="text-xl font-bold">₱12,500</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2>Total Orders</h2>
          <p className="text-xl font-bold">120</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2>Products</h2>
          <p className="text-xl font-bold">35</p>
        </div>
      </div>
    </div>
  )
}