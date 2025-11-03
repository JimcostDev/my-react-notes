type CardProps = {
  title: string
  description?: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="border border-green-300 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-semibold text-green-600 mb-2">{title}</h3>
      {description ? (
        <p className="text-base text-green-700">{description}</p>
      ) : (
        <p className="text-gray-400 italic">No description available</p>
      )}
    </div>
  )
}
