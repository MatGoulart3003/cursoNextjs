import { Pai } from "./Pai";

interface AvoProps{
    nome: string
    sobrenome: string
}

export function Avo(props: AvoProps) {
    return (
        <div className="flex flex-col gap-5 p-5 bg-orange-500 rounded-md border border-white">
            <div className="flex items-center justify-center gap-2 text-xl">
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex flex-col gap-5">
             <Pai nome="Marcos" sobrenome={props.sobrenome}/>
             <Pai nome="Adriano" sobrenome={props.sobrenome}/>
             <Pai nome="Luciano" sobrenome={props.sobrenome}/>           
            </div>
           </div>
    )
}