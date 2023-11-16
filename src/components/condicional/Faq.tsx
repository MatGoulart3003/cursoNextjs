import { useState } from "react"
import { Pergunta } from "./Pergunta"
export const Faq = () => {

  const [active, setActive] = useState(0)

  function alternarVisibilidade (index: number){
    if (index === active){
      setActive(-1)
    }else{
      setActive(index)
    }
  }

  return (
    <div className="flex flex-col gap-5 md:w-3/4 w-[90%]">
        <Pergunta 
        index={0}
        open={active === 0}
        alternarVisibilidade={alternarVisibilidade}
        pergunta="Corinhians?" resposta="Melhor do Mundo" />

        <Pergunta 
        index={1}
        open={active === 1}
        alternarVisibilidade={alternarVisibilidade}
        pergunta="Palmeiras?" resposta="Porcada"/>
        
        <Pergunta 
        index={2}
        open={active === 2}
        alternarVisibilidade={alternarVisibilidade}
        pergunta="Santos?" resposta="Vai cair"/>
        <Pergunta 
        index={3}
        open={active === 3}
        alternarVisibilidade={alternarVisibilidade}
        pergunta="Botafogo?" resposta="Perdeu o titulo"/>        
    </div>
  )
}
