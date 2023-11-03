'use client';

import Rodape from "./Rodape";
import { useState } from 'react';
import {CorpoPrincipal} from "./CorpoPrincipal";
import CorpoSecundario from "./CorpoSecundario";
import MenuCarrossel from "../menus/MenuCarrossel";
import { carregar } from "@/app/const/banco_de_dados";

export default function Corpo() {
    let produtosDoBanco: any = localStorage.getItem("produtos");
    
    if ([undefined, null, false].includes(produtosDoBanco)) carregar();
    let produtos: any = JSON.parse(produtosDoBanco);
    
    const [imagemPrincipal, setImagemPrincipal] = useState(produtos ? produtos[0] : false);

    return (
        <section className="flex flex-col w-full min-h-screen border-4 border-black">
            <CorpoPrincipal
                imagemSelecionada={imagemPrincipal} />

            <MenuCarrossel
                listaProdutos={produtos}
                setImagemPrincipal={setImagemPrincipal} />

            <CorpoSecundario
                listaProdutos={produtos} />
            
            <Rodape />
        </section>
    )
}