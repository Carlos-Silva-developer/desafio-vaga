import { CabecalhoGerencia } from "@/components/corpo/Cabecalho";
import { MenuGerencia } from "@/components/menus/MenuLateral";
import { CorpoPrincipalGerencia } from "@/components/corpo/CorpoPrincipal";

export default function Gerencia() {

    return (
        <div>
            <div className="flex flex-col w-9/12 m-auto border-4 border-black">
                <CabecalhoGerencia texto="My products admin" />

                <div className="flex body-gerencia min-h-screen">
                    <MenuGerencia />
                    <CorpoPrincipalGerencia />
                </div>
            </div>
        </div>
    )
}