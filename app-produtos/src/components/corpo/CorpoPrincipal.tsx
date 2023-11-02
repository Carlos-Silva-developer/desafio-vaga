"use client" 

import Promocao from "../utilitarios/Promocao"
 import { TabelaGerencia } from "../utilitarios/TabelaGerencia"


export function CorpoPrincipal({ imagemSelecionada }: any) {

    return (
        <section className="h-64">
            <Promocao 
                src={imagemSelecionada.src}
                alt={imagemSelecionada.alt}
                width={350} 
                height={0} 
                valor={imagemSelecionada.valor} 
                texto={imagemSelecionada.texto}
                textoBotao="Buy" />
                <hr className="h-0.5 w-10/12 bg-gray-700 align-middle justify-center mx-auto mt-3" />

        </section>
    )
}

export function CorpoPrincipalGerencia() {


    return (
        <section className="border-4 border-black w-10/12">
            <header className="flex m-14">
                <h1 className="border-4 border-red-400">List of product</h1>
                <button className="border-4">+ New</button>
            </header>
        

            <TabelaGerencia></TabelaGerencia>
        
            
        </section>

    )
}