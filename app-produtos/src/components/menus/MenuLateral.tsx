import MenuOpcao from "./MenuOpcao";


export function MenuLateral() {
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

export function MenuGerencia() {
    return (
        <menu className="w-56 h-96 p-8 border-4">
            <ul className="py-2">
                <h1 className="text-2xl underline">Products</h1>
                <MenuOpcao texto="Company profile" />
                <MenuOpcao texto="Logout" />
            </ul>
        </menu>
    )
}