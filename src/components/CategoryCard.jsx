export default function CategoryCard({ name }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center hover:scale-105 transition">
      <h3 className="font-semibold">{name}</h3>
    </div>
  )
}