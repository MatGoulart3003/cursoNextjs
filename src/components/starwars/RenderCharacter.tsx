interface RenderCharacterProps{
    characters: []
    selectCharacter:(character: any) => void
}

export const RenderCharacter = ({characters, selectCharacter}: RenderCharacterProps) => {
  return (
    <table className="w-3/5 text-xl border-2 border-black ">
      <thead>
        <tr className="bg-zinc-800 bg-opacity-80 border-black border-2">
          <th className="p-2 font-bold">Nome</th>
          <th className="p-2 font-bold">Altura</th>
          <th className="p-2 font-bold">Peso</th>
          <th className="p-2 font-bold">Ações</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((p:any, index) =>(
      <tr className={`${index % 2 === 0 ? 'bg-zinc-600' : 'bg-zinc-500' } bg-opacity-30 text-center`} key={index}> 
           <td className="p-2">{p.name}</td>
           <td className="p-2">{p.height}</td>
           <td className="p-2">{p.mass}</td>
           <td className="p-2">
             <button onClick={() => selectCharacter(p)} className="button bg-slate-700 opacity-60 hover:opacity-100 hover:bg-slate-700">Ver filmes
             </button> 
           </td>
          </tr>

        ))}      
      </tbody>
     </table>
  )
}
