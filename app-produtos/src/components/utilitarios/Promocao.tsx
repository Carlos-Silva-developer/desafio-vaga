import Image from 'next/image'

interface PromoProps {
    src: string
    width: number
    height: number
    alt: string
    valor?: number
    texto?: string
    textoBotao?: string
}
    
export default function Promocao(props: PromoProps) {

    return (
        <section>
            <Image 
                src={props.src}
                width={props.width}
                height={props.height}
                alt={props.alt}
            />
            <div>
                <h1>{props.valor}</h1>
                <p>{props.texto}</p>
                <button>{props.textoBotao}</button>
            </div>
        </section>
    )
}