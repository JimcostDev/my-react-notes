import { useState } from "react";

export default function NameForm() {
    const [name, setName] = useState("");
    return (
        <div className="flex flex-col items-center space-y-4">
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Escribe tu nombre"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-lg">
                {name ? `Hola, ${name}!` : "Por favor, escribe tu nombre arriba."}
            </p>
        </div>

    )
}