"use client";

import Promocao from "../utilitarios/Promocao";
import { carregar } from "@/app/const/banco_de_dados";
import { TabelaGerencia } from "../utilitarios/TabelaGerencia";
import { useState } from "react";
import FormularioNovoItem from "../utilitarios/FormularioNovoItem";


export function CorpoPrincipal({ imagemSelecionada }: any) {

    return (
        <section className="min-h-72 max-h-72 flex justify-center my-5">
            {imagemSelecionada ?
                <div>
                    <Promocao
                        src={imagemSelecionada.src}
                        alt={imagemSelecionada.alt}
                        width={350}
                        height={0}
                        valor={imagemSelecionada.valor}
                        texto={imagemSelecionada.texto}
                        textoBotao="Buy" />
                    <hr className="h-0.5 w-10/12 bg-gray-700 align-middle justify-center mx-auto my-3" />
                </div>
                : <p><strong>Não há produtos disponíveis no momento</strong></p>
            }
        </section>
    )
}

export function CorpoPrincipalGerencia() {
    let produtosDoBanco: any = localStorage.getItem("produtos");
    
    if ([undefined, null, false].includes(produtosDoBanco)) carregar();
    let produtos: any = JSON.parse(produtosDoBanco);
    
    const [isCriandoProduto, setIsCriandoProduto] = useState(false);
    const [listaDeProdutos, setListaDeProtudos] = useState(produtos)

    function novoProduto(novoProduto: any) {
        setIsCriandoProduto(false);
        if (produtos.length > 0) {
            produtos.push(novoProduto);
            localStorage.setItem("produtos", JSON.stringify(produtos));
            setListaDeProtudos(produtos)
        } else {
            localStorage.setItem("produtos", JSON.stringify([novoProduto]));
            setListaDeProtudos([novoProduto])
        }
    }

    return (
        <section className="w-10/12">
            <header className="flex m-14 font-bold text-xl">
                <h1 className="underline mr-4">List of product</h1>
                <button className="border-4 px-2" onClick={() => setIsCriandoProduto(!isCriandoProduto)}>+ New</button>
            </header>

            <TabelaGerencia produtos={listaDeProdutos}></TabelaGerencia>

            {isCriandoProduto && <FormularioNovoItem novoProduto={novoProduto} />}
        </section>

    )
}