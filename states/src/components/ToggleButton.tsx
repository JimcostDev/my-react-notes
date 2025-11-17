
import { useState } from "react"

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold transition-colors ${
        isOn ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      {isOn ? '🍑' : '😏'}
    </button>
  )
}