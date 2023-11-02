"use client"
import Promocao from "../utilitarios/Promocao"
import { TabelaGerencia } from "../utilitarios/TabelaGerencia"


export function CorpoPrincipal({ imagemSelecionada }: any) {

    return (
        <section className="min-h-72 max-h-72">

            <Promocao
                src={imagemSelecionada.src}
                alt={imagemSelecionada.alt}
                width={350}
                height={0}
                valor={imagemSelecionada.valor}
                texto={imagemSelecionada.texto}
                textoBotao="Buy" />
            <hr className="h-0.5 w-10/12 bg-gray-700 align-middle justify-center mx-auto my-3" />

        </section>
    )
}

export function CorpoPrincipalGerencia() {
    const produtosDoBanco: any = localStorage.getItem("produtos")
    const produtos: any = JSON.parse(produtosDoBanco)

    return (
        <section className="border-4 border-black w-10/12">
            <header className="flex m-14">
                <h1 className="border-4 border-red-400">List of product</h1>
                {/* // TODO IMPLEMENTAR ADICIONAR DEPOIS */}
                <button className="border-4">+ New</button>
            </header>


            <TabelaGerencia produtos={produtos}></TabelaGerencia>


        </section>

    )
}