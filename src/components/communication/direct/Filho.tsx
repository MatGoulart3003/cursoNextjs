interface FilhoProps{
    nome: string
    sobrenome: string
}

export function Filho(props: FilhoProps) {
    return (
        <div className="flex justify-center items-center bg-orange-300 p-2 rounded-md">
           <h1> {props.nome} {props.sobrenome} </h1>
        </div>
    )
}