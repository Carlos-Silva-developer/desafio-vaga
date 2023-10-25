interface MenuOpcaoProps {
    texto: string
    imgUrl?: string
}

export default function MenuOpcao(props: MenuOpcaoProps) {
    return (
    <>
       <li>{props.texto}</li>
    </>
    )
}