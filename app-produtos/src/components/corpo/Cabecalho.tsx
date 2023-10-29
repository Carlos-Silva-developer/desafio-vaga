interface CabecalhoProps {
    texto: string,
    subTexto?: string,      // -> passado como opcional, pode ser null
    modoNoturno?: boolean   // -> opcional booleano, pode ser usado nas props em if ternário
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <header className="flex justify-center py-8 border-4 w-full">
            <h1 className="text-4xl">{props.texto}</h1>
        </header>
    )
}