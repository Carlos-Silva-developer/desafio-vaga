import PromoCard from "../utilitarios/PormoCard"
import { carregar } from '../../app/const/banco_de_dados'

export default function MenuCarrossel(
    { produtos, setImagemPrincipal }: any) {  
    const listaProdutos =  carregar()      

    function clicar(produto: any) {
        const produtoSelecionado = listaProdutos.find((produtoBanco) => produto.src === produtoBanco.src)
        setImagemPrincipal(produtoSelecionado)
    }

    const produto = produtos.map((produto: any) => {
        return (
            <li key={produto.nome} onClick={() => clicar(produto)}>
                <PromoCard nome={produto.nome} src={produto.src} alt={produto.alt} valor={produto.valor} />
            </li>
        )
    })
    return (
        <menu>
            <ul className="flex flex-wrap gap-5" >
                {produto}
            </ul>
        </menu>
    )
}