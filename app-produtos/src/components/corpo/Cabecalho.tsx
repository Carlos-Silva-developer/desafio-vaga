interface CabecalhoProps {
    texto: string,
    subTexto?: string,      // -> passado como opcional, pode ser null
    modoNoturno?: boolean   // -> opcional booleano, pode ser usado nas props em if ternário
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <div className={`
            ${props.modoNoturno ? 'text-black' : 'text-white'}
            ${props.modoNoturno ? 'bg-red-500' : 'bg-black'}
        `}>
            <h1>{props.texto}</h1>
        </div>
    )
}