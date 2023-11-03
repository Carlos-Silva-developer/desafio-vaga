interface CabecalhoProps {
    texto: string
}

export function Cabecalho(props: CabecalhoProps) {
    return (
        <header className="flex justify-center h-28 py-8 border-4 border-black w-full">
            <h1 className="text-6xl">{props.texto}</h1>
        </header>
    )
}

export function CabecalhoGerencia(props: CabecalhoProps) {
    return (
        <header className="flex align-middle h-12 border-b-4 border-black w-full">
            <h1 className="text-2xl font-bold ms-5 mt-1">{props.texto}</h1>
        </header>
    )
}