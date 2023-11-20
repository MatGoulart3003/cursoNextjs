import ItemCarrinho from "@/model/ItemCarrinho"
import { CarrinhoItem } from "./CarrinhoItem"
import { CarrinhoVazio } from "./CarrinhoVazio"
import { formatPrice } from "@/utils/FormatPrice"

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export const Carrinho = ({itens} : CarrinhoProps) => {
  const total = itens.reduce((soma, item) => {
    return soma + item.quantidade * item.produto.preco
  }, 0)

  return (
    <div className="flex flex-col rounded-lg border border-zinc-400 gap-5 w-4/5 bg-slate-400">
      <div className="bg-zinc-800 text-xl p-3 flex gap-2 justify-between">
        <p>Carrinho</p> <span>{formatPrice(total)}</span>       
      </div>
      <div className="gap-2 mb-2 rounded-2xl pl-3 flex">       
        {itens.length == 0 ? (
          <CarrinhoVazio />
        ) : itens.map((item,i) => {  
          return(
            <CarrinhoItem key={i} {...item}/>
            )       
        }) }      
      </div>
    </div>
  )
}
