'use client'
import {CorpoPrincipal} from "./CorpoPrincipal"
import MenuCarrossel from "../menus/MenuCarrossel"
import CorpoSecundario from "./CorpoSecundario"
import { useState } from 'react'
import Rodape from "./Rodape"
import { carregar } from "@/app/const/banco_de_dados"


export default function Corpo() {

    let produtosDoBanco: any = localStorage.getItem("produtos")

    if(produtosDoBanco.lenght === 0) {
        produtosDoBanco = carregar()
    }

    let produtos: any = JSON.parse(produtosDoBanco) 

    const [imagemPrincipal, setImagemPrincipal] = useState(
        produtos[0]
    )

    function definirProdutos() {
        produtosDoBanco = localStorage.getItem("produtos")
        produtos = JSON.parse(produtosDoBanco)
    }

    return (
        <section className="flex flex-col w-full min-h-screen border-4 border-black">
            <CorpoPrincipal imagemSelecionada={imagemPrincipal}></CorpoPrincipal>
            <MenuCarrossel listaProdutos={produtos} setImagemPrincipal={setImagemPrincipal}></MenuCarrossel>
            <CorpoSecundario listaProdutos={produtos}></CorpoSecundario>
            <Rodape></Rodape>
        </section>
    )
}