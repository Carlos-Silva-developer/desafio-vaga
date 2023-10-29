import {CorpoPrincipal} from "./CorpoPrincipal"
import MenuCarrossel from "../menus/MenuCarrossel"
import CorpoSecundario from "./CorpoSecundario"


export default function Corpo() {
    return (
        <section className="flex flex-col w-full border-4">
            <CorpoPrincipal></CorpoPrincipal>
            <MenuCarrossel></MenuCarrossel>
            <CorpoSecundario></CorpoSecundario>
        </section>
    )
}