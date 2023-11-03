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
        <section className="w-10/12">
            <TabelaGerencia produtos={produtos}></TabelaGerencia>
        </section>
    )
}