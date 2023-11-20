import ItemCarrinho from '@/model/ItemCarrinho'
import React from 'react'
import { formatPrice } from '../../utils/FormatPrice'


export const CarrinhoItem = (props: ItemCarrinho) => {
  return (
    <div className='p-2 flex gap-5 border border-zinc-800 rounded-xl'>
        <p>{props.produto.nome}</p>
        <p>{props.quantidade}</p>
        <p>{formatPrice(props.produto.preco * props.quantidade)}</p>
    </div>
  )
}
