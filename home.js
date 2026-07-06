function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome 👋
      </h1>

      <p className="text-gray-500 mt-2">
        Order your favorite food easily
      </p>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white p-4 rounded-xl shadow">
          🍔 Burgers
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          🍕 Pizza
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          ☕ Coffee
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          🍗 Chicken
        </div>
      </div>

      <button className="mt-6 w-full bg-blue-600 text-white p-3 rounded-xl">
        View Menu
      </button>
    </div>
  )
}