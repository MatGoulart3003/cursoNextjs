import { useState } from "react"
import useProssesing from "./useProssesing"

export default function useStarwars() {

    const [characters, setCharacter] = useState<any>([''])
    const {processing, initProcess, endProcess} = useProssesing()
 
    const getCharacters = async () => {
      try{
        initProcess()
        console.log('Inicio Chamada')
        const response = await fetch('https://swapi.dev/api/people/')
        const dados = await response.json()
        setCharacter(dados.results)  
      }finally{  
        endProcess()
        console.log('Fim da chamada')  
      }
    }
  return {
    characters,
    processing,
    getCharacters
  }
  
}
