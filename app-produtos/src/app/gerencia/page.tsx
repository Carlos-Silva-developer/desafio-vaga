import Cabecalho from "@/components/corpo/Cabecalho";
import { CorpoPrincipalGerencia } from "@/components/corpo/CorpoPrincipal";
import { MenuGerencia } from "@/components/menus/MenuLateral";

export default function Gerencia() {
    return (
        <body>
            <Cabecalho texto="My products admin"></Cabecalho>
            <section className="flex">
                <MenuGerencia></MenuGerencia>
                <CorpoPrincipalGerencia></CorpoPrincipalGerencia>
            </section>
        </body>
    )
}