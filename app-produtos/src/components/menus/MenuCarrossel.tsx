import PromoCard from "../utilitarios/PormoCard"
import { useState } from "react"

export default function MenuCarrossel({ listaProdutos, setImagemPrincipal }: any) {
    const [indice, setIndice] = useState(0);
    const setaEsquerda = "<";
    const setaDireita = ">";

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

    function selecionar(e: any, produto: any) {
        e.preventDefault();
        const produtoSelecionado = listaProdutos.find((produtoBanco: any) => produto.src === produtoBanco.src);
        setImagemPrincipal(produtoSelecionado);
    }

    let produto = listaProdutos.map((produto: any) => {
        return (
            <li key={produto.nome} onClick={(e) => selecionar(e, produto)}>
                <PromoCard nome={produto.nome} src={produto.src} alt={produto.alt} valor={produto.valor} />
            </li>
        );
    });

    return (
        <>
            {listaProdutos.length > 0 ?
                <menu className="flex border-2 border-black mx-10 px-5">
                    <button className="text-6xl" onClick={() => menuVoltar()}> 
                        {setaEsquerda} 
                    </button>
                    <ul className="flex flex-wrap h-36 overflow-hidden carousel-container snap-x align-middle justify-evenly" >
                        {produto}
                    </ul>
                    <button className="text-6xl" onClick={() => menuAvancar()}>
                        {setaDireita}
                    </button>
                </menu>
            : null
            }
        </>
       
    );
}
