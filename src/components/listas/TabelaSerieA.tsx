import React from 'react'

interface TabelaSerieAProps {
    times: string[]
}

export const TabelaSerieA = (props: TabelaSerieAProps) => {
  return (
    <ol className='flex flex-col gap-4 p-2 w-[90%] bg-slate-900 border bd-zinc-400 rounded-md'>
        {props.times.map((item, index ) =>(
            <li className={`flex flex-col p-3 ${index % 2 === 0 ? 'bg-slate-700': 'bg-slate-600'} border border-zinc-500 rounded-sm hover:bg-slate-500 transition cursor-pointer`} key={index}> {item} </li>
        ))
        
        }
        
    </ol>
  )
}
