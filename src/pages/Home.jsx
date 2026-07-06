import CategoryCard from "../components/CategoryCard"
import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <div className="space-y-8">

      {/* HERO */}
      <section className="bg-blue-500 text-white p-10 rounded-xl text-center">
        <h1 className="text-3xl font-bold">
          Order Your Favorite Food 🍕
        </h1>
        <p className="mt-2">
          Fast delivery, fresh meals, anytime anywhere
        </p>
      </section>

      {/* CATEGORIES */}
      <section>
        <h2 className="text-xl font-bold mb-3">Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <CategoryCard name="Burger 🍔" />
          <CategoryCard name="Pizza 🍕" />
          <CategoryCard name="Chicken 🍗" />
          <CategoryCard name="Drinks 🥤" />
        </div>
      </section>

      {/* POPULAR FOODS */}
      <section>
        <h2 className="text-xl font-bold mb-3">Popular Foods</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard name="Cheese Burger" price="120" />
          <ProductCard name="Pepperoni Pizza" price="250" />
          <ProductCard name="Fried Chicken" price="180" />
          <ProductCard name="Iced Coffee" price="90" />
        </div>
      </section>

    </div>
  )
}
