import Image from 'next/image'

interface CardProps {
    src: string
    alt: string
    valor: number
    width?: number
    height?: number
}

export default function PromoCard(props: CardProps) {

    const baseWidth = 200
    const baseHeight = 0
    return (
        <section>
            <Image 
                src={props.src}
                width={props.width ? props.width : baseWidth}
                height={props.height ? props.height : baseHeight}
                alt={props.alt}
                />                
           <h2>${props.valor}</h2>
        </section>
    )
}