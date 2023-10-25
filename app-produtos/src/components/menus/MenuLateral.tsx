import MenuOpcao from "./MenuOpcao";


export default function MenuLateral() {
    return (
        <menu>
            <ul>
                <h5>Categories</h5>
                <MenuOpcao texto="- Food"/>
                <MenuOpcao texto="- Pet"/>
                <MenuOpcao texto="- Hardware"/>
                <MenuOpcao texto="- Flowers"/>
                <MenuOpcao texto="- Garden's"/>
                <MenuOpcao texto="- Beauty & Hair"/>
            </ul>            
        </menu>
    )
}