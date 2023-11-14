import Image from "next/image"
import {useState} from 'react'

interface callProps {
    texto: string
}

export function RandomImage(props: callProps){

    const url = 'https://source.unsplash.com/featured/'
    const [search, setSearch] = useState('abstract')
    const [size, setSize] = useState(300)

    function changeSize(event:any){
        setSize(+event.target.value)
    }

    function urlImage(){
        return `${url}${size}x${size}?${search}`
    }

    function renderButton(value: string){
       return(
         <button onClick={() => {setSearch(value)
         console.log(urlImage())}} className="bg-blue-700 rounded-md py-4 px-6">
            {value}
        </button>
)}

    return(
        <div className="flex flex-col items-center gap-7 border-zinc-400 border rounded-md p-7">
            <div className="flex gap-7 justify-center">
                <span> {search} </span>
                <span> {size}x{size}</span>
            </div>
            <Image className="rounded-md" src={urlImage()} width={300} height={300} alt="Imagem aleatória"/>
            <div className="flex justify-between gap-5">
                {renderButton("abstract")}
                {renderButton("city")}
                {renderButton("person")}            
            </div>
            <div>
                <input type="number" value={size} className="bg-zinc-500 p-3" onChange={changeSize} />
            </div>
        </div>
    )
}