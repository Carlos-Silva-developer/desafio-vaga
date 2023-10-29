import MenuOpcao from "./MenuOpcao";


export default function MenuLateral() {
    return (
        <menu className="w-40 h-full p-8 border-4">
            <ul>
                <h5 className="py-5">Categories</h5>
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