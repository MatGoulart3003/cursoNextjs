import Produto from "@/model/Produto"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"
import { formatPrice } from "../../utils/FormatPrice"

interface ProdutoProps{
    produto: Produto
    comprar: (produto: Produto) => void
}

const stylesheet = {
    card: 'flex flex-col border border-zinc-600 gap-2 p-2 rounded-md',
    img: 'rounded-md',
    items: 'flex flex-col justify-center gap-2',
    text: 'font-bold',
    btnsPlace: 'flex items-center justify-center gap-2',
    btn: 'button flex-1 flex justify-center',
    imgDiv: 'flex justify-center items-center'

}

export const ProdutoItem = (props: ProdutoProps) => {
  return (
    <div className={stylesheet.card}>
        <div className={stylesheet.imgDiv}>
            <Image 
                src={props.produto.imagem} 
                width={300} height={300} 
                alt="Imagem Produto"
                className={stylesheet.img}
            />
        </div>
        <div className={stylesheet.items}>
            <p className={stylesheet.text}> {props.produto.id} </p>
            <p className={stylesheet.text}> {props.produto.nome} </p>
            <p className={stylesheet.text}> {props.produto.descricao} </p>
            <p className={stylesheet.text}> {formatPrice(props.produto.preco)} 
            </p>
                <div  className={stylesheet.btnsPlace}>
                    <button onClick={() => props.comprar(props.produto)} className={stylesheet.btn}>
                        <IconShoppingCart />
                        Comprar
                    </button >
                          
                </div>
            </div>         
    </div>
  )
}
