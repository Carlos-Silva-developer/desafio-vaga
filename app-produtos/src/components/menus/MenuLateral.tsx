import MenuOpcao from "./MenuOpcao";

export function MenuLateral() {
    return (
        <menu className="w-full h-full p-4 border-4 border-black border-r-0">
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
        <menu className="w-56 h-60 ps-6 pt-14 me-4 border-4 border-t-0 border-s-0 border-black">
            <ul className="py-2">
            <h1 className="text-2xl underline">Products</h1>
            <div className="mt-5">
                <MenuOpcao texto="Company profile" />
                <MenuOpcao texto="Logout" />

            </div>
            </ul>
        </menu>
    )
}