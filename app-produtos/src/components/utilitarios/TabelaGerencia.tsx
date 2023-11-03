"use client"
import { useState, useEffect } from "react"
import FormularioEdicao from './FormularioEdicao';

export function TabelaGerencia({ produtos }: any) {

    const dadosDoBanco = produtos;
    const [produtoEmEdicao, setProdutoEmEdicao] = useState(false);
    const [listaDeProdutos, setListaDeProdutos] = useState(dadosDoBanco);

    useEffect(() => {
        rowProdutos()
    }, [listaDeProdutos, setListaDeProdutos]);

    useEffect(() => {
        setListaDeProdutos(produtos);
    }, [produtos])

    function editarProduto(produtoEmEdicao: any, produtoEditado: any) {
        const produtosAtualizados = dadosDoBanco.map((produto: any) => {
            if (produto === produtoEmEdicao) {
                return produtoEditado
            } else {
                return produto
            }
        })
        setProdutoEmEdicao(false);
        setListaDeProdutos(produtosAtualizados)
        localStorage.setItem("produtos", JSON.stringify(produtosAtualizados))
    }

    function rowProdutos() {
        if (listaDeProdutos.length > 0) {
            return listaDeProdutos.map((produto: any) => {
                return (
                    <tr key={produto.nome} className="">
                        <td className="px-2 ">{produto.nome}</td>
                        <td className="px-2">$ {produto.valor.toString()}</td>
                        <button 
                            className="px-2"
                            onClick={() => setProdutoEmEdicao(produto)}>
                               <p>
                                    editar
                                </p> 
                        </button>
                        <button
                            className="bg-red-500 px-3 ms-3"
                            onClick={() => apagar(produto.nome)}>
                            <p>X</p>
                        </button>
                    </tr>
                );
            });
        } else {
            return (<p className="w-full p-2 flex justify-center">Não há produtos disponíveis</p>)
        }
    }

    function apagar(nome: string) {
        const novaLista = listaDeProdutos.filter((produto: { nome: string; }) => produto.nome !== nome)
        setListaDeProdutos(novaLista)
        localStorage.setItem("produtos", JSON.stringify(novaLista))
    }

    return (
        <div className="w-full border-black">
            <table className="w-7/12 h-96 flex justify-evenly">
                <tbody className="border-4 border-black p-5">{rowProdutos()}</tbody>
            </table>
            {produtoEmEdicao && <FormularioEdicao produtoEmEdicao={produtoEmEdicao} editarProduto={editarProduto} />}
        </div>
    )
}