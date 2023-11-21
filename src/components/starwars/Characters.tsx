import React from 'react'
import { RenderCharacter } from './RenderCharacter'
import useStarwars from '@/data/hooks/useStarwars'

export const Characters = () => {
 
  const {processing, characters, getCharacters} = useStarwars()

  return (
    <div className='flex flex-col gap-5'>
      {processing ? (        
          <h1>Processando...</h1>      
        ) : characters.length > 0 ? (
            <RenderCharacter characters={characters}/>            
        ) : (
          <h1>Personagens não encontrados</h1>
        )
      }
      <button className='bg-blue-600 p-3' onClick={getCharacters}> Chama API</button>
    </div>
  )
}
