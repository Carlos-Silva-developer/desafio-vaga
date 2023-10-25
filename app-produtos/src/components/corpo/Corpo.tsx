import CorpoPrincipal from "./CorpoPrincipal"
import MenuCarrossel from "../menus/MenuCarrossel"
import CorpoSecundario from "./CorpoSecundario"


export default function Corpo() {
    return (
        <section className="border-spacing-2">
            <CorpoPrincipal></CorpoPrincipal>
            <MenuCarrossel></MenuCarrossel>
            <CorpoSecundario></CorpoSecundario>
        </section>
    )
}