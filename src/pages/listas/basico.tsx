import { TabelaSerieA } from '@/components/listas/TabelaSerieA'
import React from 'react'

export default function PaginaListaBasica() {
  
  const times = [
    'Corinthians',
    'Fluminense',
    'Botafogo',
    'Fortaleza',
    'Palmeiras',
    'Vasco',
    'Internacional',
    'Bragantino',
    'Flamengo',
    'São Paulo',
    'Goiás',
  ]
  return (
    <div className='flex flex-col justify-center items-center h-[100%] gap-5'>
      <h1 className='text-4xl mt-10 p-3 font-bold'>
        Tabela Serie A
      </h1>
      <TabelaSerieA times={times} />
    </div>
  )
}

