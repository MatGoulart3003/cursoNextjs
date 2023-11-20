import { Carrinho } from '@/components/listas/Carrinho'
import { ListaProdutos } from '@/components/listas/ListaProdutos'
import produtos from '@/constants/Produto'
import ItemCarrinho from '@/model/ItemCarrinho'
import Produto from '@/model/Produto'
import React, { useState } from 'react'

export default function PaginaProdutos() {
  
  const [itens, setItens] = useState<ItemCarrinho[]>([])
  
  function adicionarProduto(produto: Produto){
    console.log(produto)
    const currentItem = itens.find((item) => item.produto.id === produto.id) ?? {quantidade: 0, produto}
    const newItem = {...currentItem, quantidade: currentItem.quantidade + 1}
    const ottherItems = itens.filter((item) => item.produto.id !== produto.id)
    setItens(([...ottherItems, newItem]))
  }
  return (
    <div className='flex flex-col gap-2 mt-2 items-center'>
      <Carrinho itens={itens}/>
      <ListaProdutos comprar={adicionarProduto} produtos={produtos} />      
    </div>
    )
 
}