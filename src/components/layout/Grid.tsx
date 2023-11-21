interface GridProps{
    cols?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    xl2?: number
    children: any  
}


export default function Grid({children, cols, sm, md, lg, xl, xl2}: GridProps) {
  
  const stylesheet = {
    container: `grid gap-4 grid-cols-
    ${cols ?? 1}
    ${sm ? `sm:grid-cols-${sm}` : ''}
    ${md ? `md:grid-cols-${md}` : ''}
    ${lg ? `lg:grid-cols-${lg}` : ''}
    ${xl ? `xl:grid-cols-${xl}` : ''}
    ${xl2 ? `2xl:grid-cols-${xl2}` : ''}
    w-full`
  }

  return (
    <div className={stylesheet.container}>
        {children}
    </div>
  )
}
