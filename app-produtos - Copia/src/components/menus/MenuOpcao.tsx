interface MenuOpcaoProps {
    texto: string
    imgUrl?: string
}

export function MenuOpcao(props: MenuOpcaoProps) {
    const urlBase = "http://localhost:3000/"
    const textoFormatado = props.texto.toLowerCase()
    
    return <p className="font-bold text-xl"><a href={urlBase + textoFormatado}>- {props.texto}</a></p>
}

export function MenuOpcaoGerencia(props: MenuOpcaoProps) {
    const urlBase = "http://localhost:3000/gerencia"
    const textoFormatado = props.texto.toLowerCase()
    
    return <p className="text-lg"><a href={urlBase + textoFormatado}>- {props.texto}</a></p>
}