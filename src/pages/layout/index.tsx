import Grid from '@/components/layout/Grid'
import React from 'react'

export default function PaginaGrid() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <div className='w-[90%] lg:w-4/5'>
            <Grid cols={1} lg={8} md={4} sm={2}>
                <div className='h-16 w-full bg-slate-900'>#1</div>
                <div className='h-16 w-full bg-slate-800'>#2</div>
                <div className='h-16 w-full bg-slate-700'>#3</div>
                <div className='h-16 w-full bg-slate-600'>#4</div>
                <div className='h-16 w-full bg-slate-500'>#5</div>
                <div className='h-16 w-full bg-slate-400'>#6</div>
                <div className='h-16 w-full bg-slate-300'>#7</div>
                <div className='h-16 w-full bg-slate-200'>#8</div>                             
            </Grid>
        </div>
        
    </div>
  )
}
