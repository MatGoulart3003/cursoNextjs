import React, { useEffect, useState } from 'react'
import { RenderCharacter } from './RenderCharacter'
import useStarwars from '@/data/hooks/useStarwars'

export const Characters = () => {
 
  const {processing, characters, getCharacters, selectCharacter} = useStarwars()

  useEffect(()=> {
    getCharacters()
  }, [getCharacters])

  return (
    <div className='w-full flex items-center justify-center '>
      {processing ? (        
          <h1>Processando...</h1>      
        ) : characters.length > 0 ? (
            <RenderCharacter selectCharacter={selectCharacter} characters={characters}/>            
        ) : (
          <h1>Personagens não encontrados</h1>
        )
      }
      
    </div>
  )
}
