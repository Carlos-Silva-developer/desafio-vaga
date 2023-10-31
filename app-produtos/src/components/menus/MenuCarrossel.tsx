import PromoCard from "../utilitarios/PormoCard"
import { useState } from "react"

export default function MenuCarrossel({ listaProdutos, setImagemPrincipal }: any) {
    const [indice, setIndice] = useState(0);

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
        <menu className="flex border-2 m-5 mx-auto">
            <button onClick={() => menuVoltar()}>botão esquerda</button>
            <div className="flex flex-wrap h-56 gap-5 overflow-hidden carousel-container snap-x align-middle justify-evenly" >
                {produto}
            </div>
            <button onClick={() => menuAvancar()}>botão direita</button>
        </menu>
    );
}
