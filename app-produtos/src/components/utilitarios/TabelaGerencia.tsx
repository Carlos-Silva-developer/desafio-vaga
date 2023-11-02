"use client"
import { useState, useEffect } from "react"
import FormularioEdicao from './FormularioEdicao';

export function TabelaGerencia({ produtos }: any) {

    const dadosDoBanco = produtos
    const [produtoEmEdicao, setProdutoEmEdicao] = useState(false);
    const [listaDeProdutos, setListaDeProdutos] = useState(dadosDoBanco)

    useEffect(() => {
        rowProdutos()
    }, [setListaDeProdutos]);

    function adicionarProduto(novoProduto: any) {
        dadosDoBanco.push(novoProduto)
        localStorage.setItem("produtos", JSON.stringify(dadosDoBanco))
    }

    function editarProduto(produtoEmEdicao: any, produtoEditado: any) {
        const produtosAtualizados = dadosDoBanco.map((produto: any) => {
            if (produto === produtoEmEdicao) {
                return produtoEditado
            } else {
                return produto
            }
        })
        setListaDeProdutos(produtosAtualizados)
        localStorage.setItem("produtos", JSON.stringify(produtosAtualizados))
    }

    function rowProdutos() {
        return listaDeProdutos.map((produto: any) => {
            return (
                <tr key={produto.nome}>
                    <td className="px-5">{produto.nome}</td>
                    <td>$ {produto.valor.toString()}</td>
                    <button onClick={() => setProdutoEmEdicao(produto)}>editar</button>
                    <button
                        className="bg-red-500 px-3 ms-3"
                        onClick={() => apagar(produto.nome)}>
                        <p>X</p>
                    </button>
                </tr>

            );
        });
    }

    function apagar(nome: string) {
        const novaLista = listaDeProdutos.filter((produto: { nome: string; }) => produto.nome !== nome)
        setListaDeProdutos(novaLista)
        localStorage.setItem("produtos", JSON.stringify(novaLista))
    }

    return <>
        <table className="w-9/12 border-4">
            <tbody>
                {rowProdutos()}
            </tbody>
        </table>
        {produtoEmEdicao &&
            <FormularioEdicao
                produtoEmEdicao={produtoEmEdicao}
                editarProduto={editarProduto}>
            </FormularioEdicao>}

    </>
}