import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      <section className="hero">
        <h1>Order Your Favorite Food 🍕</h1>
        <p>Fast delivery, fresh meals, anytime anywhere</p>
      </section>

      <section>
        <h2 className="section-title">Categories</h2>

        <div className="category-grid">
          <CategoryCard name="Burger 🍔" />
          <CategoryCard name="Pizza 🍕" />
          <CategoryCard name="Chicken 🍗" />
          <CategoryCard name="Drinks 🥤" />
        </div>
      </section>

      <section>
        <h2 className="section-title">Popular Foods</h2>

        <div className="product-grid">
          <ProductCard name="Cheese Burger" price="120" />
          <ProductCard name="Pepperoni Pizza" price="250" />
          <ProductCard name="Fried Chicken" price="180" />
          <ProductCard name="Iced Coffee" price="90" />
        </div>
      </section>

    </div>
  );
}