import { useCallback, useEffect, useState } from "react"

export default function Contador() {
  const [valor, setValor] = useState(0)
  const [delta, setDelta] = useState(2)
  const [multi10, setMulti10] = useState(0)

  const calcularValorMulti10 = useCallback((valor: number) => {
    return valor * 10
  }, [])

    useEffect(() => {
      console.log('effect')
      const multi10 =  calcularValorMulti10(valor)
      setMulti10(multi10)
    }, [valor, calcularValorMulti10])



  return (
    <div className="flex flex-col gap-2 items-center justify-center bg-slate-900 p-5 rounded-xl">
        <span className="p-5 rounded-xl border border-blue-400 bg-slate-600 text-5xl"> {valor} </span>
        <span className="p-5 rounded-xl border border-blue-400 bg-slate-600 text-2xl"> {multi10} </span>
        <span className="p-5 rounded-xl border border-blue-400 bg-slate-600 text-sm"> {delta} </span>
        <div className="flex gap-2">
            <button className="button m-8 p-5 text-xl font-semibold" onClick={() => setValor(valorAtual => valorAtual + delta)}>
                +{delta}
            </button>     
            <button className="button m-8 p-5 text-xl font-semibold" onClick={() => setValor(valorAtual => valorAtual - delta)}>
                -{delta}
            </button>
            <input className="button m-8 p-5 text-xl font-semibold" type="number" value={delta} onChange={e => setDelta(+e.target.value)}/>
  
        </div>
    </div>
  )
}
