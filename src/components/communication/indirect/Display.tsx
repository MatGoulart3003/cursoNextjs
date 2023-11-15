interface DisplayProps{
    valor: number
}

export function Display (props: DisplayProps ){
    return(
        <div className="flex text-4xl items-center justify-center bg-zinc-700 flex-1 border border-zinc-500 rounded-md font-bold">
            {props.valor}
        </div>
    )
}