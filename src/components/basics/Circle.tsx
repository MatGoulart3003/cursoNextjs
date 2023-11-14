interface CircleProps{
    texto:string
    quasePerfeito?: boolean
}

export function Circle(props: CircleProps){
    return(
        <div className={`
            flex justify-center items-center
            bg-blue-500  p-5
            w-64 h-64 text-3xl
            ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
        `}>       
        {props.texto}
        </div>
    )
}