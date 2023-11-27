import { useCallback, useEffect, useState } from "react"
import useProssesing from "./useProssesing"

export default function useStarwars() {

  const {processing, initProcess, endProcess} = useProssesing() 
  const [characters, setCharacters] = useState<any>([])
  const [char, setChar] = useState<any>([])
  const [films, setFilms] = useState<any>([])

  const getFilms = useCallback(async function (char: any){

    if(!char?.films?.length) return
    const reqs = char.films.map(async (film: string) => {
      const resp = await fetch(film)
      return resp.json()
    })

    const films = await Promise.all(reqs)
    setFilms(films)

    console.log(films)
  }, []) 

  useEffect(() => {
    getFilms(char)
  }, [char, getFilms])

    const getCharacters = useCallback(async function () {
      try{
        initProcess()
        console.log('Inicio Chamada')
        const response = await fetch('https://swapi.dev/api/people/')
        const dados = await response.json()
        setCharacters(dados.results)  
      }finally{  
        endProcess()
        console.log('Fim da chamada')  
      }
    }, [initProcess, endProcess])

    const selectCharacter = (char: any) => {
      setChar(char.char)
    }
  return {
    characters,
    processing,
    getCharacters,
    selectCharacter
  }
  
}
