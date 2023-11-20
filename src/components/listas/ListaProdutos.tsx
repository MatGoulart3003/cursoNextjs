import { ProdutoItem } from "./ProdutoItem"
import Produto from "@/model/Produto"

interface ListaProdutosProps{
  produtos: Produto[]
  comprar: (produto: Produto) => void
}

export const ListaProdutos = (props: ListaProdutosProps) => {
  return (
    <div className='flex items-center gap-5 flex-wrap grid-cols-5 h-screen '>
       {props.produtos.map((item) => (
            <ProdutoItem comprar={props.comprar} produto={item} key={item.id}/>
       ))}        
    </div>
  )
}
