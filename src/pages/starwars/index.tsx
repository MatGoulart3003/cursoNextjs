import Background from '@/components/starwars/Background'
import { Characters } from '@/components/starwars/Characters'
import React from 'react'

export default function PageStarWars() {

  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen relative'>
        <Background />        
        <Characters />
    </div>
  )
}
