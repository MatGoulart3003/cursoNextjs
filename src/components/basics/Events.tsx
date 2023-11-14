import { useState } from "react"

export function Events(){

    const [contador, setContador] = useState(0)

    function incrementar(){
       setContador(contador + 1)
    }
    return(
        <button onClick={incrementar} className="h-72 w-72 bg-green-600 p-5 mt-4 hover:bg-green-400 transition">
           {contador}
        </button>
    )
}