import { useEffect, useState } from "react"
import {
  getProducts,
  addProduct,
  deleteProduct
} from "../../services/productService"

export default function Products() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const loadProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const handleAdd = async () => {
    await addProduct({
      name,
      price: Number(price)
    })

    setName("")
    setPrice("")
    loadProducts()
  }

  const handleDelete = async (id) => {
    await deleteProduct(id)
    loadProducts()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products 🍔</h1>

      {/* FORM */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2 mr-2"
        />

        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="border p-2 mr-2"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add
        </button>
      </div>

      {/* LIST */}
      {products.map((p) => (
        <div
          key={p.id}
          className="flex justify-between bg-white p-3 mb-2 rounded shadow"
        >
          <span>{p.name} - ₱{p.price}</span>

          <button
            onClick={() => handleDelete(p.id)}
            className="text-red-500"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}