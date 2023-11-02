import MenuOpcao from "./MenuOpcao";


export function MenuLateral() {
    return (
        <menu className="w-52 h-full p-4 border-4 border-black border-r-0">
                <h5 className="py-5 font-bold text-2xl">Categories</h5>
            <ul>

                <MenuOpcao texto="Food"/>
                <MenuOpcao texto="Pet"/>
                <MenuOpcao texto="Hardware"/>
                <MenuOpcao texto="Flowers"/>
                <MenuOpcao texto="Garden's"/>
                <MenuOpcao texto="Beauty & Hair"/>
            </ul>            
        </menu>
    )
}

export function MenuGerencia() {
    return (
        <menu className="w-56 p-8 border-4 border-black border-r-0">
            <ul className="py-2">
            <h1 className="text-2xl underline">Products</h1>
                <MenuOpcao texto="Company profile" />
                <MenuOpcao texto="Logout" />
            </ul>
        </menu>
    )
}