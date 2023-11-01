import PromoCard from "../utilitarios/PormoCard"
import { useState } from "react"

export default function MenuCarrossel({ listaProdutos, setImagemPrincipal }: any) {
    const [indice, setIndice] = useState(0);
    const setaEsquerda = "<"
    const setaDireita = ">"

    function menuVoltar() {
        const ultimoItem: any = listaProdutos.pop();
        listaProdutos.unshift(ultimoItem);
        setIndice(indice + 1);
    }

    function menuAvancar() {
        setIndice(indice - 1);
        const primeiroItem: any = listaProdutos.shift();
        listaProdutos.push(primeiroItem);
    }

    function selecionar(produto: any) {
        const produtoSelecionado = listaProdutos.find((produtoBanco: any) => produto.src === produtoBanco.src);
        setImagemPrincipal(produtoSelecionado);
    }

    let produto = listaProdutos.map((produto: any) => {
        return (
            <li key={produto.nome} onClick={() => selecionar(produto)}>
                <PromoCard nome={produto.nome} src={produto.src} alt={produto.alt} valor={produto.valor} />
            </li>
        );
    });

    return (
        <menu className="flex border-2 border-black mx-10 px-5">
            <button 
                className="text-6xl"
                onClick={() => menuVoltar()}> 
                    {setaEsquerda} 
            </button>
            <div className="flex flex-wrap h-40 overflow-hidden carousel-container snap-x align-middle justify-evenly" >
                {produto}
            </div>
            <button 
                className="text-6xl"
                onClick={() => menuAvancar()}>
                    {setaDireita}
            </button>
        </menu>
    );
}
