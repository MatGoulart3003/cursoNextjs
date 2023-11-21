interface RenderCharacterProps{
    characters: []
}

export const RenderCharacter = ({characters}: RenderCharacterProps) => {
  return (
    <ul className="flex flex-col gap-3">
        {characters.map((p:any, index) =>(
        <li key={index}> {p.name} </li>
      ))}
    </ul>
  )
}
