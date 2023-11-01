'use client'
import {CorpoPrincipal} from "./CorpoPrincipal"
import MenuCarrossel from "../menus/MenuCarrossel"
import CorpoSecundario from "./CorpoSecundario"
import { useState } from 'react'
import { carregar } from '../../app/const/banco_de_dados'
import Rodape from "./Rodape"


export default function Corpo() {

    const produtos =  carregar()
    const [imagemPrincipal, setImagemPrincipal] = useState(
       produtos[0]
    )

    return (
        <section className="flex flex-col w-full border-4">
            <CorpoPrincipal imagemSelecionada={imagemPrincipal}></CorpoPrincipal>
            <MenuCarrossel listaProdutos={produtos} setImagemPrincipal={setImagemPrincipal}></MenuCarrossel>
            <CorpoSecundario listaProdutos={produtos}></CorpoSecundario>
            <Rodape></Rodape>
        </section>
    )
}