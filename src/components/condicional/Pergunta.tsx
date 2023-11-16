import { useState } from "react"
import { If } from "./If"
import { IconCaretDownFilled, IconCaretUpFilled } from "@tabler/icons-react"

interface PerguntaProps {
    index: number
    pergunta: string
    resposta: string
    open: boolean
    alternarVisibilidade: (index: number) => void
}

export const Pergunta = (props: PerguntaProps) => {  

  return (
    <div onClick={() => props.alternarVisibilidade(props.index)} className=" border border-white rounded-md" >
        <div className="flex justify-between bg-slate-500 p-4 flex-1 cursor-pointer">
            {props.pergunta} {props.open ? <IconCaretUpFilled/> :  <IconCaretDownFilled/>}
        </div>
        
        <If teste={props.open}>
            <div className="bg-blue-500 p-4 flex-1">
               {props.resposta}
            </div>
        </If>
       
    </div>
  )
}
