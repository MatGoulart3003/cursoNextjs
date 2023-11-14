import { Filho } from "./Filho";

interface PaiProps{
    nome: string
    sobrenome: string
}

export function Pai(props: PaiProps) {
    return (
        <div className="flex flex-col bg-orange-400 p-5 rounded-md text-white border border-white gap-3">
           <div className="flex gap-2 items-center justify-center">
            <span>{props.nome}</span>
            <span>{props.sobrenome}</span>
           </div>
           <div className="flex flex-col gap-2">
           <Filho nome="Mateus" sobrenome={props.sobrenome}/>
           <Filho nome="Maycon" sobrenome={props.sobrenome}/>
           <Filho nome="Isabela" sobrenome={props.sobrenome}/>
           </div>
        </div>
    )
}