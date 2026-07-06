import { useEffect, useState } from "react"
import { getProducts } from "../services/productService"
import ProductCard from "../components/ProductCard"

export default function Menu() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts()
      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Menu 🍔</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>
    </div>
  )
}