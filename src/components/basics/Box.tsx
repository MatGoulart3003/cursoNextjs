export function Box(props: any){
    return(
        <div className={`
            flex justify-center items-center
            bg-purple-400 rounded-md p-5
            w-64 h-64 text-6xl font-thin
        `}>
            {props.children}
        </div>
    )
}