import { Botoes } from "./Botoes";
import { Display } from "./Display";
import {useState} from 'react'

export function Contador (){

    const [number, setNumber] = useState(0)

    const incrementar = (valor: number) =>{
        setNumber(number + valor)
    }

    
    const decrementar = (valor: number) =>{
        setNumber(number - valor)
    }

    return(
        <div className="flex flex-col border w-72 h-72 bg-zinc-900 border-zinc-500 rounded-md p-7 gap-5">
            <Display valor={number}/>
            <Botoes decrementar={decrementar} incrementar={incrementar} />
        </div>
    )
}