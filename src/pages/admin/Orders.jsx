export default function Orders() {
  const orders = [
    { id: 1, customer: "Juan", total: 350, status: "Pending" },
    { id: 2, customer: "Maria", total: 500, status: "Delivered" }
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Orders 📦</h1>

      <div className="space-y-2">
        {orders.map((o) => (
          <div
            key={o.id}
            className="bg-white p-3 rounded shadow flex justify-between"
          >
            <div>
              <p>Customer: {o.customer}</p>
              <p>Total: ₱{o.total}</p>
            </div>

            <span className="font-bold">{o.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}