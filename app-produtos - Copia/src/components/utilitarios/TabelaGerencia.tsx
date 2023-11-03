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
                    <td className="px-5 text-2xl">{produto.nome}</td>
                    <td className="text-2xl">$ {produto.valor.toString()}</td>
                    <button
                        className="m-5 border-2 border-black font-bold h-10 w-24"
                        onClick={() => setProdutoEmEdicao(produto)}>editar</button>
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

    return (
        <div>
            <div className="flex m-14 ">
                <h1 className="">List of product</h1>
                {/* // TODO IMPLEMENTAR ADICIONAR DEPOIS */}
                <button className="border-4">+ New</button>
            </div>
            <table className="w-8/12 border-4 ms-10 h-96">
                <tbody>
                    {rowProdutos()}
                </tbody>
            </table>
            {produtoEmEdicao &&
                <FormularioEdicao
                    produtoEmEdicao={produtoEmEdicao}
                    editarProduto={editarProduto}>
                </FormularioEdicao>}

        </div>
    )
}