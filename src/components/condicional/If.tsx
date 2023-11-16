interface IfProps{
    teste:boolean
    children: any
}

export const If = (props:IfProps) => {
    if(props.teste){
        return props.children
    }else{
        return null
    }

}
