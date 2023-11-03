import Cabecalho from "@/components/corpo/Cabecalho";
import { CorpoPrincipalGerencia } from "@/components/corpo/CorpoPrincipal";
import { MenuGerencia } from "@/components/menus/MenuLateral";




export default function Gerencia() {

   
    return (
        <div>
            <div className="flex flex-col w-9/12 m-auto border-4 border-black">
                <Cabecalho texto="My products admin"></Cabecalho>
                <div className="flex body-gerencia ps-10 min-h-screen">
                    <MenuGerencia></MenuGerencia>
                    <CorpoPrincipalGerencia></CorpoPrincipalGerencia>
                </div>
            </div>
        </div>
    )
}