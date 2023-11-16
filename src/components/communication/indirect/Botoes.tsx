interface BotoesProps {
    incrementar: (valor: number) => void
    decrementar: (valor: number) => void
}

export function Botoes(props: BotoesProps){
    return(
        <div className="flex items-center justify-center gap-5">
            <button className="button" onClick={() => props.incrementar(10)}>
                Incrementa 
            </button>
            <button className="button" onClick={() => props.decrementar(10)}>
                Decrementa 
            </button>
        </div>
    )
}