import { useState } from "react"

type CounterProps = {
  title: string
}

export default function Counter({ title,}: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div className="border border-blue-300 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4">{title}</h3>
      <p className="text-4xl font-bold text-blue-800 mb-6">{count}</p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          onClick={() => setCount(count + 1)}
      >
          Incrementar
      </button>
      <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          onClick={() => setCount(count - 1)}
      >
          Decrementar
      </button>
      </div>
    </div>
  )
}
