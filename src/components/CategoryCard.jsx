import "./CategoryCard.css";

export default function CategoryCard({ name }) {
  return (
    <div className="category-card">
      <h3>{name}</h3>
    </div>
  );
}