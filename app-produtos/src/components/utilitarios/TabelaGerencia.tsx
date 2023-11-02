"use client"
import { useState, useEffect } from "react"
import FormularioEdicao from './FormularioEdicao';
import { carregar } from "@/app/const/banco_de_dados";


export function TabelaGerencia() {
    const [produtoEmEdicao, setProdutoEmEdicao] = useState(false);
    const [listaDeProdutos, setListaDeProdutos] = useState([])

    useEffect(() => {
        // Carregue os dados do banco de dados e defina-os em listaDeProdutos
        const dadosDoBanco: any = carregar(); // Substitua isso pelo método de carregamento real
        setListaDeProdutos(dadosDoBanco);
      }, []); // O array vazio faz com que o efeito só seja executado uma vez após a montagem
    

    let produto = listaDeProdutos.map((produto: any) => {
        return (            
                <tr key={produto.nome}>
                    <td className="px-5">{produto.nome}</td>
                    <td>{produto.valor}</td>
                    <td><button onClick={() => setProdutoEmEdicao(produto)}>editar</button></td>
                    <button 
                        className="bg-red-500 px-3 ms-3"
                        onClick={() => apagar(produto.nome)}>
                            <p>X</p>
                    </button>
    
                </tr>
                );
            });
    
        function apagar(nome: string) {
            const novaLista = listaDeProdutos.filter((produto: { nome: string; }) => produto.nome !== nome)
            setListaDeProdutos(novaLista)
        }   
    
    

    return <>
                <table className="w-9/12 border-4">
                    <tbody>
                        {produto}
                    </tbody>                   
                </table>
                {produtoEmEdicao && 
                <FormularioEdicao 
                    produtoEmEdicao={produtoEmEdicao} 
                    setListaDeProdutos={setListaDeProdutos}>
                </FormularioEdicao>}                  

            </>
}